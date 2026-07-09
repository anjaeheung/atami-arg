/* ==========================================================================
   engine.js — 범용 엔진
   책임 4가지: 렌더러 · 진행 관리자 · 퀴즈 판정기 · 북마크 관리자
   story.js 의 STORY 데이터를 읽어서 동작한다. (저장 기능 없음: 새로고침하면 처음부터)
   ========================================================================== */

const REVEAL_DELAY = 900;   // 정답 후 글이 한 개씩 등장하는 간격(ms)

const state = {
  current: "intro",       // 지금 메인에 보이는 페이지 id (intro | board | sceneId | pageId)
  returnTo: null,         // 뉴스/HP에서 "게시판으로 돌아가기" 대상
  solved: {},             // sceneId -> 푼 문제 개수
  answers: {},            // sceneId -> { 문제 entry 인덱스 -> 플레이어가 입력한 정답 텍스트 }
  shown: {},              // sceneId -> 이미 애니메이션 없이 표시된 마지막 entry 인덱스
  bookmarkIds: new Set(),
  bookmarks: [],          // [{id, icon, title}]
  unlockedScenes: new Set(["thread1"]),
  newScenes: new Set(),   // 새로 열려서 "NEW!" 뱃지 붙는 스레드
  animating: false,
  animToken: 0,        // 렌더될 때마다 증가 → 이전 등장 애니메이션 무효화
};

const $main = () => document.getElementById("main");

/* ------------------------------ 진입점 ------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bmHandle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });
  // 메인 영역 클릭 위임
  $main().addEventListener("click", onMainClick);
  // 이미지 확대(라이트박스) 닫기
  document.getElementById("lightbox").addEventListener("click", closeLightbox);
  render();
  if (isDev()) buildDevPanel();   // URL에 #dev → 개발용 점프 패널
});

/* ----------------------- 개발용 점프 패널 ----------------------- */
function isDev() {
  try { return /dev/i.test(location.hash) || /dev/i.test(location.search); }
  catch (e) { return false; }
}

function buildDevPanel() {
  const el = document.createElement("div");
  el.id = "devPanel";
  let html = `<div class="dev-title">DEV 점프 (문제별로 바로 이동)</div>`;
  STORY.scenes.forEach((sc) => {
    const n = sc.entries.filter((e) => e.quiz).length;
    html += `<div class="dev-scene"><span>${esc(sc.title.slice(0, 6))}…</span>`;
    html += `<button data-devjump="${sc.id}" data-devsolved="0">처음</button>`;
    for (let q = 1; q <= n; q++) {
      html += `<button data-devjump="${sc.id}" data-devsolved="${q - 1}">Q${q}</button>`;
    }
    html += `<button data-devjump="${sc.id}" data-devsolved="${n}">끝</button></div>`;
  });
  el.innerHTML = html;
  document.body.appendChild(el);
  el.addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-devjump]");
    if (b) devJump(b.getAttribute("data-devjump"), parseInt(b.getAttribute("data-devsolved"), 10));
  });
}

function devJump(sceneId, solvedCount) {
  state.unlockedScenes.add(sceneId);
  state.solved[sceneId] = solvedCount;
  state.answers[sceneId] = state.answers[sceneId] || {};
  state.shown[sceneId] = 999999;   // 전부 즉시 표시(등장 애니메이션 없음)
  state.current = sceneId;
  render();
  const q = document.querySelector(".quiz-box") || document.querySelector(".thread-exit");
  if (q) q.scrollIntoView({ block: "center" });
  else window.scrollTo(0, 0);
}

function openLightbox(src) {
  const box = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  box.classList.remove("hidden");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
}

/* ------------------------------ 라우팅 ------------------------------ */
function openPage(id) {
  // 스레드에서 뉴스/HP로 갈 때 돌아올 곳 기억
  if (STORY.pages[id] && isScene(state.current)) {
    state.returnTo = state.current;
  }
  state.current = id;
  if (state.newScenes.has(id)) state.newScenes.delete(id);   // 방문하면 NEW 뱃지 해제
  addBookmark(id);
  render();
  window.scrollTo(0, 0);
  const m = $main(); if (m) m.scrollTop = 0;
}

function isScene(id) { return STORY.scenes.some((s) => s.id === id); }
function getScene(id) { return STORY.scenes.find((s) => s.id === id); }

function render() {
  state.animToken++;            // 진행 중이던 글 등장 애니메이션 취소
  state.animating = false;
  const id = state.current;
  if (id === "intro") return renderIntro();
  if (id === "board") return renderBoard();
  if (isScene(id)) return renderThread(id);
  if (STORY.pages[id]) return renderDocument(id);
}

/* ------------------------------ 오프닝 ------------------------------ */
function renderIntro() {
  const t = STORY.intro;
  $main().innerHTML = `
    <div class="intro">
      <div class="intro-text">
        ${t.lines.map((l) => l === "" ? `<div class="intro-gap"></div>` : `<p>${esc(l)}</p>`).join("")}
      </div>
      <button class="intro-btn" data-nav="board">${esc(t.button)}</button>
    </div>`;
}

/* ----------------------- 아웃트로 내레이션 ----------------------- */
function showOutro(sceneId) {
  const o = getScene(sceneId).outro;
  state.animToken++;                 // 진행 중 애니메이션 취소
  $main().innerHTML = `
    <div class="outro">
      <div class="outro-text">
        ${o.lines.map((l) => l === "" ? `<div class="intro-gap"></div>` : `<p>${esc(l)}</p>`).join("")}
      </div>
      <button class="outro-btn" data-outro-continue="${sceneId}">${esc(o.continueButton || "계속")}</button>
    </div>`;
  window.scrollTo(0, 0);
}

function finishOutro(sceneId) {
  const o = getScene(sceneId).outro;
  if (o && o.unlocks) {
    state.unlockedScenes.add(o.unlocks);
    state.newScenes.add(o.unlocks);
  }
  openPage("board");
}

/* --------------------------- 게시판 톱 --------------------------- */
function renderBoard() {
  const b = STORY.board;
  const threads = b.threads.filter((th) => state.unlockedScenes.has(th.to));
  $main().innerHTML = `
    <div class="board-top">
      <div class="board-logo">
        ${b.logoImage ? `<img src="${b.logoImage}" alt="" onerror="this.style.display='none'">` : ""}
        <span class="logo-text">${esc(b.logo)}</span>
      </div>
      <div class="board-tagline">
        ${b.tagline.map((l) => `<p>${esc(l)}</p>`).join("")}
      </div>
      <div class="board-section">${esc(b.section)}</div>
      <ul class="thread-list">
        ${threads.map((th) => `<li><a data-nav="${th.to}">${esc(th.label)}</a>${state.newScenes.has(th.to) ? ` <span class="new-badge">NEW!</span>` : ""}</li>`).join("")}
      </ul>
    </div>`;
}

/* ----------------------------- 스레드 ----------------------------- */
function renderThread(sceneId) {
  const scene = getScene(sceneId);
  const entries = scene.entries;
  const solvedCount = state.solved[sceneId] || 0;

  // 현재 막고 있는 문제(gate) 찾기: (solvedCount+1)번째 문제
  let quizSeen = 0, gateIndex = entries.length, gateQuiz = null;
  for (let i = 0; i < entries.length; i++) {
    if (entries[i].quiz) {
      quizSeen++;
      if (quizSeen === solvedCount + 1) { gateIndex = i; gateQuiz = entries[i].quiz; break; }
    }
  }

  $main().innerHTML = `
    <div class="thread">
      <div class="thread-head">${esc(scene.title)}</div>
      <div class="posts" id="posts"></div>
      <div class="quiz-area" id="quizArea"></div>
    </div>`;

  const postsEl = document.getElementById("posts");
  const lastShown = state.shown[sceneId] ?? -1;

  // gate 이전의 표시 대상: 일반 글 + 이미 푼 문제의 "정답 글"(플레이어 입력)
  const postEntries = [];
  for (let i = 0; i < gateIndex; i++) {
    const e = entries[i];
    if (e.post != null) {
      postEntries.push({ i, data: e });
    } else if (e.quiz && e.quiz.answerPost) {
      // 정답 글을 남기는 문제만: 내가 입력한 답이 지정된 번호 글로 올라감
      const ap = e.quiz.answerPost;
      const ans = (state.answers[sceneId] || {})[i] || "";
      postEntries.push({ i, data: { post: ap.post, uid: ap.uid, body: ans } });
    }
    // answerPost 없는 문제는 정답 글 없이 통과만 (게시판 번호 연속)
  }

  const immediate = postEntries.filter((p) => p.i <= lastShown);
  const toAnimate = postEntries.filter((p) => p.i > lastShown);

  immediate.forEach((p) => postsEl.appendChild(postEl(p.data)));

  const finish = () => {
    state.shown[sceneId] = gateIndex - 1;
    if (gateQuiz) {
      renderQuiz(sceneId, gateQuiz);
    } else if (scene.outro) {
      // 스레드 끝 → "스레드를 나간다" 버튼
      document.getElementById("quizArea").innerHTML =
        `<div class="thread-exit"><button class="exit-btn" data-outro="${sceneId}">${esc(scene.outro.button)}</button></div>`;
    } else {
      // 아직 준비 안 된 스레드
      document.getElementById("quizArea").innerHTML =
        `<div class="thread-end">이 스레드는 아직 준비 중입니다. (스토리 계속 제작 중…)
         <br><a class="link-inline" data-nav="board">← 게시판 목록으로</a></div>`;
    }
  };

  if (toAnimate.length === 0) { finish(); return; }

  // 새로 열린 글을 한 개씩 시간 텀을 두고 등장
  const myToken = state.animToken;
  state.animating = true;
  let k = 0;
  const step = () => {
    if (myToken !== state.animToken) return;   // 그새 다른 페이지로 이동 → 중단
    const el = postEl(toAnimate[k].data);
    el.classList.add("reveal");
    postsEl.appendChild(el);
    k++;
    if (k < toAnimate.length) {
      setTimeout(step, REVEAL_DELAY);
    } else {
      state.animating = false;
      finish();
    }
  };
  step();
}

// 링크 배너 색: HP는 초록, 뉴스는 빨강(기본)
function linkKind(pageId) {
  const p = STORY.pages[pageId];
  return p && p.type === "hp" ? "hp" : "";
}

function postEl(e) {
  const div = document.createElement("div");
  div.className = "post";
  const lines = e.body.split("\n").map((l) => esc(l) || "&nbsp;").join("<br>");
  div.innerHTML = `
    <div class="post-meta">
      <span class="pno">${e.post}:</span>
      <span class="pname">익명</span>
      <span class="pdate">20XX/08/26</span>
      <span class="pid">ID:${esc(e.uid || "????????")}</span>
    </div>
    <div class="post-body">${lines}</div>
    ${e.image ? `<div class="post-img"><img src="${esc(e.image)}" alt="" onerror="this.parentNode.classList.add('img-missing')"></div>` : ""}
    ${e.link ? `<div class="link-banner ${linkKind(e.link.to)}" data-open="${e.link.to}">${esc(e.link.label)}</div>` : ""}`;
  return div;
}

/* ----------------------------- 퀴즈 ----------------------------- */
function renderQuiz(sceneId, quiz) {
  const area = document.getElementById("quizArea");
  const fieldsHtml = quiz.fields.map((f, i) => {
    if (f.text != null) return `<span class="qz-fixed">${esc(f.text)}</span>`;
    if (f.type === "select") {
      const opts = `<option value="" disabled selected></option>` +
        f.options.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join("");
      return `<select class="qz-input qz-select" data-fi="${i}">${opts}</select>`;
    }
    // text
    const label = f.label ? `<div class="qz-label">${esc(f.label)}</div>` : "";
    return `${label}<input class="qz-input qz-text" data-fi="${i}" type="text"
              placeholder="${esc(f.placeholder || "")}" autocomplete="off">`;
  }).join("");

  area.innerHTML = `
    <div class="quiz-box">
      <div class="quiz-q">${esc(quiz.question)}</div>
      <div class="quiz-fields">${fieldsHtml}</div>
      <div class="quiz-msg" id="quizMsg"></div>
      <button class="quiz-submit" data-submit="${sceneId}">입력하는</button>
    </div>`;

  const first = area.querySelector(".qz-text");
  if (first) {
    first.focus();
    first.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter") submitQuiz(sceneId);
    });
  }
}

function submitQuiz(sceneId) {
  if (state.animating) return;
  const scene = getScene(sceneId);
  const solvedCount = state.solved[sceneId] || 0;

  // 현재 gate 문제 다시 찾기 (entry 인덱스도 기억)
  let quizSeen = 0, quiz = null, quizIndex = -1;
  for (let i = 0; i < scene.entries.length; i++) {
    const e = scene.entries[i];
    if (e.quiz) { quizSeen++; if (quizSeen === solvedCount + 1) { quiz = e.quiz; quizIndex = i; break; } }
  }
  if (!quiz) return;

  let ok = true;
  quiz.fields.forEach((f, i) => {
    if (f.text != null) return;
    const el = document.querySelector(`[data-fi="${i}"]`);
    const val = el ? el.value : "";
    if (f.type === "select") {
      if (val !== f.answer) ok = false;
    } else {
      const answers = (f.answers || []).map(norm);
      if (!answers.includes(norm(val))) ok = false;
    }
  });

  const msg = document.getElementById("quizMsg");
  if (ok) {
    // 플레이어가 입력/선택한 내용을 "정답 글" 본문으로 조립 (고정텍스트 + 입력값)
    const answerText = quiz.fields.map((f, i) => {
      if (f.text != null) return f.text;
      const el = document.querySelector(`[data-fi="${i}"]`);
      return el ? el.value : "";
    }).join("").replace(/\s+/g, " ").trim();
    state.answers[sceneId] = state.answers[sceneId] || {};
    state.answers[sceneId][quizIndex] = answerText;

    state.solved[sceneId] = solvedCount + 1;
    renderThread(sceneId);            // 정답 글 + 다음 글들이 순차 등장
  } else {
    msg.textContent = "정답이 아닙니다. 다시 시도해 보세요.";
    msg.classList.add("wrong");
  }
}

function norm(s) {
  return String(s).trim().toLowerCase().replace(/\s+/g, "").replace(/[.\-/,、·・]/g, "");
}

/* --------------------------- 뉴스 / HP --------------------------- */
function renderDocument(pageId) {
  const p = STORY.pages[pageId];
  state.secretClicks = 0;   // 페이지 열 때마다 봉투 클릭 수 초기화
  const back = state.returnTo
    ? `<button class="doc-back" data-nav="${state.returnTo}">← 게시판으로 돌아가기</button>` : "";

  if (p.type === "news") {
    $main().innerHTML = `
      <div class="doc news">
        ${back}
        <div class="news-masthead">News</div>
        <div class="news-date">${esc(p.date || "")}</div>
        <h1 class="news-title">${esc(p.title)}</h1>
        ${(p.images || []).map(imgHtml).join("")}
        ${p.body.map((para) => `<p>${esc(para)}</p>`).join("")}
      </div>`;
  } else if (p.blocks) {  // 섹션(blocks) 구조의 HP
    $main().innerHTML = renderHpStructured(p, pageId, back);
  } else { // 기존 단순 HP
    $main().innerHTML = `
      <div class="doc hp">
        ${back}
        <div class="hp-head">
          <h1 class="hp-title">${esc(p.title)}</h1>
          ${p.subtitle ? `<div class="hp-sub">${esc(p.subtitle)}</div>` : ""}
        </div>
        ${p.banner ? `<div class="hp-banner">${esc(p.banner)}</div>` : ""}
        ${(p.images || []).map(imgHtml).join("")}
        ${p.body.map((para) => para === "" ? "" : `<p class="hp-line">${esc(para)}</p>`).join("")}
        ${p.supporterImage ? `<figure class="doc-figure hp-supporter"><div class="img-wrap"><img src="${p.supporterImage}" alt="" onerror="this.parentNode.classList.add('img-missing')"></div></figure>` : ""}
        ${p.secret ? renderSecret(p, pageId) : ""}
        ${p.news ? `
          <div class="hp-news">
            <div class="news-masthead">News</div>
            <h2 class="hp-news-title">${esc(p.news.title)}</h2>
            ${p.news.body.map((para) => `<p>${esc(para)}</p>`).join("")}
            ${(p.news.images || []).map(imgHtml).join("")}
          </div>` : ""}
      </div>`;
  }
}

// 봉투의 "마크"를 5번 클릭 → 회원 전용 숨겨진 페이지 (힌트 없음)
function renderSecret(p, pageId) {
  const s = p.secret;
  const hs = s.markHotspot || { left: "42%", top: "38%", width: "18%", height: "22%" };
  return `<div class="hp-secret">
      ${s.heading ? `<h2 class="hp-bh">${esc(s.heading)}</h2>` : ""}
      ${(s.clueLines || []).map((l) => `<p class="hp-line">${esc(l)}</p>`).join("")}
      <div class="secret-envwrap">
        ${s.envelopeImage ? `<img src="${s.envelopeImage}" alt="" onerror="this.style.display='none'">` : ""}
        <button class="secret-mark" data-secret-click="${pageId}" aria-label=""
          style="left:${hs.left};top:${hs.top};width:${hs.width};height:${hs.height};"></button>
      </div>
      <div class="secret-reveal" id="secretReveal" style="display:none;">
        ${s.revealImage
          ? `<div class="secret-reveal-img"><img src="${s.revealImage}" alt="" onerror="this.parentNode.classList.add('img-missing')"></div>`
          : `<div class="news-masthead">${esc(s.revealTitle)}</div>${(s.revealBody || []).map((l) => `<p>${esc(l)}</p>`).join("")}`}
      </div>
    </div>`;
}

// 섹션 구조 HP (히어로 + 로고 + blocks + 봉투)
function renderHpStructured(p, pageId, back) {
  let h = `<div class="doc hp hp-structured">${back}`;
  h += `<div class="hp-brand">${p.logoImage ? `<img src="${p.logoImage}" alt="" onerror="this.style.display='none'">` : ""}<span>${esc(p.title)}</span></div>`;
  if (p.hero && p.hero.fullImage) {   // 텍스트가 박힌 통 히어로 이미지
    h += `<div class="hp-herofull"><img src="${p.hero.fullImage}" alt="" onerror="this.style.display='none'"></div>`;
  } else if (p.hero) {
    h += `<div class="hp-hero"${p.hero.image ? ` style="background-image:url('${p.hero.image}')"` : ""}>
        <div class="hp-hero-text">${esc(p.hero.banner)}</div>
        ${p.hero.sub ? `<div class="hp-hero-sub">${esc(p.hero.sub)}</div>` : ""}
      </div>`;
  }
  if (p.centerLogoImage) {
    h += `<div class="hp-centerlogo"><img src="${p.centerLogoImage}" alt="" onerror="this.style.display='none'"><div>${esc(p.title)}</div></div>`;
  }
  (p.blocks || []).forEach((b) => {
    h += `<div class="hp-block">`;
    if (b.heading) h += `<h2 class="hp-bh">${esc(b.heading)}</h2>`;
    if (b.center) h += `<p class="hp-calligraphy">${esc(b.center)}</p>`;
    if (b.plainImage) h += `<div class="hp-plain-img"><img src="${b.plainImage}" alt="" onerror="this.style.display='none'"></div>`;
    if (b.lines) h += b.lines.map((l) => `<p class="hp-line">${esc(l)}</p>`).join("");
    if (b.image) h += imgHtml({ src: b.image, caption: b.caption });
    if (b.profile) {
      const pr = b.profile;
      h += `<div class="hp-profile">
          ${imgHtml({ src: pr.image })}
          <div class="hp-profile-info">
            ${pr.role ? `<div class="hp-pr-role">${esc(pr.role)}</div>` : ""}
            ${pr.name ? `<div class="hp-pr-name">${esc(pr.name)}</div>` : ""}
            ${pr.sub ? `<div class="hp-pr-sub">${esc(pr.sub)}</div>` : ""}
          </div>
        </div>
        ${pr.quote ? `<p class="hp-calligraphy">${esc(pr.quote)}</p>` : ""}`;
    }
    if (b.members) {
      h += `<table class="hp-members">
          <tr><th>명예회원</th><td>${b.members.honorary.map(esc).join("<br>")}</td></tr>
          <tr><th>일반 회원</th><td>${b.members.general.map(esc).join("<br>")}</td></tr>
        </table>`;
    }
    h += `</div>`;
  });
  if (p.secret) h += renderSecret(p, pageId);
  h += `</div>`;
  return h;
}

function imgHtml(img) {
  const o = typeof img === "string" ? { src: img } : img;
  // o.full: 클릭 확대 시 보여줄 별도(고해상도/확대) 이미지. 없으면 기사 이미지를 그대로 확대
  const full = o.full ? ` data-full="${o.full}"` : "";
  return `<figure class="doc-figure">
      <div class="img-wrap"><img src="${o.src}"${full} alt=""
        onerror="this.parentNode.classList.add('img-missing')"></div>
      ${o.caption ? `<figcaption>${esc(o.caption)}</figcaption>` : ""}
    </figure>`;
}

/* --------------------------- 북마크 --------------------------- */
function addBookmark(id) {
  if (id === "intro") return;
  if (state.bookmarkIds.has(id)) return;

  let icon = "💬", title = "";
  if (id === "board") { icon = "💬"; title = "「소문채널」 TOP"; }
  else if (isScene(id)) { icon = "💬"; title = getScene(id).title; }
  else if (STORY.pages[id]) {
    const p = STORY.pages[id];
    icon = p.type === "news" ? "📝" : "🌐";
    title = p.title;
  } else return;

  state.bookmarkIds.add(id);
  state.bookmarks.push({ id, icon, title });
  renderSidebar();
  showToast("북마크에 추가되었습니다");
}

function renderSidebar() {
  const ul = document.getElementById("bmList");
  ul.innerHTML = state.bookmarks.map((b) =>
    `<li data-nav="${b.id}"><span class="bm-i">${b.icon}</span>${esc(b.title)}</li>`).join("");
}

let toastTimer = null;
function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1600);
}

/* --------------------------- 이벤트 위임 --------------------------- */
function onMainClick(ev) {
  // 기사/HP 이미지 클릭 → 확대 (실제로 로드된 이미지일 때만)
  const img = ev.target.closest(".doc-figure img, .post-img img");
  if (img && img.naturalWidth > 0) { openLightbox(img.dataset.full || img.src); return; }

  const nav = ev.target.closest("[data-nav]");
  if (nav) { openPage(nav.getAttribute("data-nav")); return; }

  const open = ev.target.closest("[data-open]");
  if (open) { openPage(open.getAttribute("data-open")); return; }

  const outro = ev.target.closest("[data-outro]");
  if (outro) { showOutro(outro.getAttribute("data-outro")); return; }

  const outroC = ev.target.closest("[data-outro-continue]");
  if (outroC) { finishOutro(outroC.getAttribute("data-outro-continue")); return; }

  const sub = ev.target.closest("[data-submit]");
  if (sub) { submitQuiz(sub.getAttribute("data-submit")); return; }

  // 봉투 N번 클릭 → 숨겨진 회원 페이지 공개
  const sec = ev.target.closest("[data-secret-click]");
  if (sec) {
    const page = STORY.pages[sec.getAttribute("data-secret-click")];
    const need = (page && page.secret && page.secret.clicks) || 5;
    state.secretClicks = (state.secretClicks || 0) + 1;
    sec.classList.add("clicked");
    if (state.secretClicks >= need) {
      const rev = document.getElementById("secretReveal");
      if (rev) rev.style.display = "block";
    }
    return;
  }
}

// 북마크 목록 클릭 (사이드바)
document.addEventListener("click", (ev) => {
  const li = ev.target.closest("#bmList li[data-nav]");
  if (li) openPage(li.getAttribute("data-nav"));
});

/* --------------------------- 유틸 --------------------------- */
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
