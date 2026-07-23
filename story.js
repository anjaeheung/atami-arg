/* ==========================================================================
   story.js — 사건 데이터 전부
   이 파일만 채우면 게임이 완성됩니다.
   - intro   : 오프닝 내레이션
   - board   : 소문채널 게시판 톱 (스레드 목록)
   - scenes  : 스레드(장면)들의 순서. 각 스레드 = 글(post) + 문제(quiz)의 나열
   - pages   : 링크로 열리는 뉴스/HP 문서
   ========================================================================== */

const STORY = {

  /* ---------- 오프닝 내레이션 ---------- */
  intro: {
    lines: [
      "무심코 들어간 서점에서 아무 생각 없이 집어든 아타미 사진집.",
      "표지에 실린 풍경 사진에 끌려 그만 사버렸다.",
      "",
      "회사와 SNS에서의 폐쇄적인 인간관계에 지쳐,",
      "마음 한구석에서 위안을 찾고 있었던 걸지도 모른다.",
      "",
      "표지를 넘기자 퀴즈 캠페인 전단지가 끼워져 있었다.",
      "“海原なつみ(우나바라 나츠미)….”",
      "최근 TV나 영상 스트리밍 사이트에서 본 기억이 난다.",
      "",
      "‘상품을 받으면 이야깃거리가 될지도’라는 가벼운 마음으로 캠페인 사이트에 접속했다.",
      "사이트를 대충 훑어본 뒤, 늘 하던 습관대로",
      "학창 시절부터 드나들던 인터넷 게시판 ‘소문채널’을 열어보니,",
      "이미 누군가가 스레드를 만들어 놓은 상태였다.",
    ],
    button: "소문채널 열기",
  },

  /* ---------- 소문채널 게시판 톱 ---------- */
  board: {
    logo: "噂ちゃんねる",          // 글자 로고 (항아리 이미지 없이 이 텍스트만 사용)
    tagline: [
      "「해킹」에서 「뒷세계」까지 폭넓게 다루는",
      "거대 게시판군 『소문채널(噂ちゃんねる)』에 오신 걸 환영합니다!",
    ],
    section: "本／出版@소문채널 게시판",
    // to = scene id. 잠금 해제된 스레드만 보임
    threads: [
      { to: "thread1", label: "1. 【유명 편집자】 아타미 사진집 감상 스레 1탄" },
      { to: "thread2", label: "2. 【살인사건!?】 아타미 사진집 감상 스레 2탄" },
      { to: "thread3", label: "3. 【거리의 비참한 현상】 아타미 사진집 감상 스레 3탄" },
      { to: "thread4", label: "4. 【사라진 모델은 어디로?】 아타미 사진집 감상 스레 4탄" },
    ],
  },

  /* ---------- 스레드(장면)들 ---------- */
  scenes: [
    {
      id: "thread1",
      type: "thread",
      title: "【유명 편집자】 아타미 사진집 감상 스레 1탄",
      prevLabel: null,               // "前スレ" 자리 (없으면 null)
      entries: [
        { post: 1,  uid: "swb86w59c", body: "아타미 사진집 당첨 캠페인 퀴즈를 다 같이 협력해서 풀어보는 스레드입니다." },
        { post: 2,  uid: "3u3jauat4", body: ">>1\n그만해라\n당첨 확률 떨어짐" },
        { post: 3,  uid: "44xifpydf", body: "근처 서점에 진열돼 있어서 좀 신경 쓰였는데\n사볼까" },
        { post: 4,  uid: "c9xtzkcnx", body: ">>3\n벌써 당첨 확률 떨어지고 있네 ㅋㅋ" },
        { post: 5,  uid: "44xifpydf", body: "일단 문제 올려둠\n\nQ1. 하루 만에 촬영해서 화제가 된 아타미 사진집. 촬영일은 언제?" },
        { post: 6,  uid: "c9xtzkcnx", body: "“하루 만에 찍었다”\n모르겠는데 (´・ω・`)" },
        { post: 7,  uid: "44xifpydf", body: "사진집에 실린 글은 전부 읽어봤는데, 촬영일은 안 적혀 있음" },
        { post: 8,  uid: "3u3jauat4", body: ">>7\n乙 (수고)" },
        { post: 9,  uid: "swb86w59c", body: "그럼 사진을 자세히 보면 어디엔가 날짜가 찍혀 있는 건가?" },

        { quiz: {
            question: "Q1. 촬영일은 언제? (사진 속 단서를 찾아보자)",
            fields: [
              { type: "text", placeholder: "예: ○월 ○일",
                answers: ["5月1日", "5월1일", "5월 1일", "5.1", "5/1", "5-1", "0501"] },
            ],
        }},

        { post: 10, uid: "c9xtzkcnx", body: "역 사진에 나온 전광판에 “5월 1일”이라고 표시된 게 찍혀 있어" },
        { post: 11, uid: "44xifpydf", body: "진짜네\n이런 데에 날짜가 숨어 있었구나" },
        { post: 12, uid: "c9xtzkcnx", body: "2문제째\n\nQ2. 아타미 사진집 『うたかた』에 등장하는, 아타미 출신 모델의 풀네임은?" },
        { post: 13, uid: "c9xtzkcnx", body: "모델이라면 7페이지에 나온 여자애 말하는 거지?" },
        { post: 14, uid: "d5ehz2nyr", body: ">>12\n아타미 출신인지까지는 굳이 상관없지 않냐?" },
        { post: 15, uid: "44xifpydf", body: "사진집에 모델 이름은 안 적혀 있던데" },
        { post: 16, uid: "3u3jauat4", body: "아이돌 덕질 좀 하는데, 이런 애는 모르겠네\n아마 지역 밀착형 쪽일 듯" },
        { post: 17, uid: "c9xtzkcnx", body: "지역 밀착형이면 보통 지역 기업 광고 같은 데 자주 나오긴 하지" },
        { post: 18, uid: "swb86w59c", body: "이 모델도 광고 같은 데 나오려나?\n거기서 이름 알아낼 수 있을 것 같긴 한데" },

        { quiz: {
            question: "Q2. 아타미 출신 모델의 풀네임은?",
            fields: [
              { type: "text", placeholder: "이름 입력",
                answers: ["真中あい", "真中愛", "마나카아이", "마나카 아이"] },
            ],
        }},

        { post: 19, uid: "c9xtzkcnx", body: "지역 기업 광고 뒤져보니까 나왔다\n이름 「真中あい(마나카 아이)」래" },
        { post: 20, uid: "3u3jauat4", body: "봐라, 역시 지역 밀착형 탤런트였네" },
        { post: 21, uid: "44xifpydf", body: "나 시즈오카 토박이인데 이 애는 모르겠는데" },
        { post: 22, uid: "c9xtzkcnx", body: "잠깐만\n모델 이름이랑 날짜로 검색해봤더니 뉴스가 나오는데…",
          link: { to: "news_missing", label: "▶ 아타미 모델 마나카 아이 씨, 촬영 중 의문의 실종" } },
        { post: 23, uid: "d5ehz2nyr", body: "엥!? 실종?" },
        { post: 24, uid: "44xifpydf", body: "이 사진집 촬영 중에 모델이 실종됐다고…? 진짜야?" },
        { post: 25, uid: "3u3jauat4", body: "야야 이거 완전 문제 있는 사진집 아니냐!\n이걸 어떻게 그냥 발매했냐" },
        { post: 26, uid: "c9xtzkcnx", body: "모델… 어디로 간 걸까?" },
        { post: 27, uid: "3u3jauat4", body: ">>26\n(´・ω・`)  몰?루" },
        { post: 28, uid: "44xifpydf", body: "기사 보니까 12시쯤 휴식 시간에도 한 번 혼자 사라졌던 것 같다고 써 있네" },
        { post: 29, uid: "swb86w59c", body: "그 사이에 찍은 풍경 사진에 우연히 같이 찍혀 있다거나?" },

        { quiz: {
            question: "Q. 22페이지 이후에 그녀가 (우연히) 찍혀 있다. 무엇을 하고 있는가?",
            fields: [
              { type: "select", answer: "음식점",
                options: ["역 앞", "음식점", "온천", "여관", "바다", "해변", "공원"] },
              { text: " 에서 " },
              { type: "select", answer: "남성",
                options: ["할머니", "남성", "초등학생", "여성", "점원", "여고생"] },
              { text: " 과(와) " },
              { type: "select", answer: "만나고 있다",
                options: ["신고하고 있다", "울고 있다", "만나고 있다", "전화하고 있다", "싸우고 있다", "운동하고 있다"] },
            ],
        }},

        { post: 30, uid: "44xifpydf", body: "25페이지 봐봐\nMARUYA Cafe&Bar에서 어떤 남자랑 만나고 있는 게 찍혀 있어" },
        { post: 31, uid: "3u3jauat4", body: "확실히 아저씨랑 같이 찍혀 있네…\n아이탄, 휴식 시간에 파파활동이냐~ (´;ω;`)" },
        { post: 32, uid: "c9xtzkcnx", body: ">>31\n아이탄 ㅋㅋ 벌써 덕질 시작했냐 ㅋㅋ" },
        { post: 33, uid: "44xifpydf", body: "바 카운터에 놓인 시계를 보니까\n증언된 촬영 휴식 시간이랑 딱 맞아떨어지네" },
        { post: 34, uid: "swb86w59c", body: "같이 찍혀 있는 사람, 누구야?" },

        { quiz: {
            question: "Q. 그녀와 함께 찍혀 있는 사람은 누구인가? 풀네임을 답하시오.",
            // answerPost 없음 → 원본처럼 정답 글은 안 남기고 바로 35번(반응)으로 이어짐
            fields: [
              { type: "text", placeholder: "풀네임 입력",
                answers: ["真中陽介", "마나카요스케", "마나카 요스케"] },
            ],
        }},

        { post: 35, uid: "fuy74aanh", body: "마나카 요스케다\n부동산 회사 사장이네" },
        { post: 36, uid: "3u3jauat4", body: "부동산 회사 사장이랑 촬영 중간에 만난 거야?\n근데 성이 같은 건 어떻게 된 거지?" },
        { post: 37, uid: "c9xtzkcnx", body: "마나카 요스케로 검색했더니 뉴스 나왔다",
          link: { to: "news_resort", label: "▶ 마나카 요스케 씨, 아타미 리조트 개발 계획 착수  지역 주민과의 갈등 속 향방 주목" } },
        { post: 38, uid: "3u3jauat4", body: ">아타미에서 모델로 활약하는 외동딸\n아이탄 믿고 있었어! 사장이랑 아이탄은 부녀지간!" },
        { post: 39, uid: "d5ehz2nyr", body: "마나카 사장은 개발추진협회라는 곳이랑 관련이 있는 건가" },
        { post: 40, uid: "c9xtzkcnx", body: "개발추진협회 HP 찾았다",
          link: { to: "hp_kaihatsu", label: "▶ 개발추진협회 HP" } },
        { post: 41, uid: "3u3jauat4", body: "하츠시마 미술관 완공 예상도 개쩌네\n리조트 개발 제대로 하려는 건가" },
        { post: 42, uid: "44xifpydf", body: "리조트 개발에 부동산 회사 사장, 거기에 외동딸 모델까지…\n뭔가 수상해지는데" },
        { post: 43, uid: "swb86w59c", body: "마나카 요스케도 다른 사진에 우연히 찍혀 있거나 하지 않을까" },

        { quiz: {
            question: "Q. 25페이지 외에 마나카 요스케 본인이 (우연히) 찍혀 있다. 어떤 순간이 찍혀 있는가?",
            fields: [
              { type: "select", answer: "낚시 도구",
                options: ["반지", "펜던트", "100만 엔", "계약서", "톱(노코기리)", "낚시 도구"] },
              { text: " 을(를) 들고 " },
              { type: "select", answer: "자동차",
                options: ["집", "회사", "빌딩", "자동차", "자전거", "택시", "버스"] },
              { text: " 에 " },
              { type: "select", answer: "타기",
                options: ["뛰어들기", "타기", "수리하기", "구매하기", "몸싸움", "맡기기", "매각하기"] },
              { text: " 직전" },
            ],
        }},

        { post: 44, uid: "fuy74aanh", body: "55페이지에, 낚시 도구를 들고 차에 타기 직전이 찍혀 있어" },
        { post: 45, uid: "44xifpydf", body: "진짜네\n자세히 보니까 낚싯대 잔뜩 챙겨 들고 있네" },
        { post: 46, uid: "3u3jauat4", body: "부동산 사장답지 않은 패밀리카네" },
        { post: 47, uid: "c9xtzkcnx", body: "이 차 타고 어디로 낚시하러 간 건가" },
        { post: 48, uid: "swb86w59c", body: "이 사진이 마나카 아이랑 만난 뒤라면, 어디로 향한 걸까" },

        { quiz: {
            question: "Q. 마나카 요스케는 어디로 향했는가? 마지막으로 다다랐을 장소의 이름을 입력하시오.",
            fields: [
              { type: "text", placeholder: "장소 이름 입력",
                answers: ["海釣り公園", "海釣公園", "바다낚시공원", "바다 낚시 공원", "해조리공원"] },
            ],
        }},

        { post: 49, uid: "fuy74aanh", body: "바다낚시공원이다!" },
        { post: 50, uid: "d5ehz2nyr", body: "엥? 명탐정이잖아" },
        { post: 51, uid: "3u3jauat4", body: "진짜다\n바다낚시공원에 사장 차가 찍혀 있어" },
        { post: 52, uid: "c9xtzkcnx", body: "정장 차림 그대로 혼자 낚시하러 간 건가…?" },
        { post: 53, uid: "swb86w59c", body: "낚시하는 모습은 안 찍혀 있는 것 같은데, 어디 있는 거지?" },

        { quiz: {
            question: "Q. 마나카 요스케는 바다낚시공원의 어디에 있는가?",
            fields: [
              { type: "text", placeholder: "입력",
                answers: ["海の中", "바닷속", "바다 속", "바다속", "물속", "물 속"] },
            ],
        }},

        { post: 54, uid: "fuy74aanh", body: "바닷속에 있어…" },
        { post: 55, uid: "3u3jauat4", body: "엥" },
        { post: 56, uid: "44xifpydf", body: "헐헐헐헐헐\n사장이 (물에) 떠 있는 게 찍혀 있는데!" },
        { post: 57, uid: "7x9zfhh9s", body: "지금까지 조용히 스레 보고만 있었는데 신고했다" },
        { post: 58, uid: "c9xtzkcnx", body: ">>57\n아니, 이거 3개월도 더 전 일이라\n지금 신고해서 어쩌라는 거야" },
        { post: 59, uid: "d5ehz2nyr", body: "이 사진집 진짜 괜찮은 거냐…" },
        { post: 60, uid: "c9xtzkcnx", body: "뉴스 떴다",
          link: { to: "news_drowned", label: "▶ 지역 부동산 회사 사장 마나카 요스케 씨  익사체로 발견" } },
        { post: 61, uid: "44xifpydf", body: "카메라맨 증언대로면 바다낚시공원엔 아무도 없었던 것 같네" },
        { post: 62, uid: "3u3jauat4", body: "사고사냐 자살이냐는 거야?" },
        { post: 63, uid: "7x9zfhh9s", body: "죽은 직후를 촬영한 거냐… 무섭다!" },
        { post: 64, uid: "swb86w59c", body: "응? 이 뉴스 뭔가 이상하지 않냐?" },

        { quiz: {
            question: "Q. 위 뉴스 기사와 78·79페이지의 사진에서 모순되는 부분은?",
            fields: [
              { text: "뉴스에서는 " },
              { type: "select", answer: "혼자 낚시를 하고 있었다",
                options: ["시체로 발견되었다", "사망 시각은 같은 날 15시경", "익사로 단정되었다", "혼자 낚시를 하고 있었다"] },
              { text: " 라고 적혀 있지만, 사진에는 " },
              { type: "select", answer: "2인분",
                options: ["고양이", "2인분", "시계", "빨간 차"] },
              { text: " 의 " },
              { type: "select", answer: "발자국",
                options: ["시간의 어긋남", "낚싯대", "발자국", "키 리모컨"] },
              { text: " 이(가) 있다." },
            ],
        }},

        { post: 65, uid: "fuy74aanh", body: "뉴스에서는 혼자 낚시를 하고 있었다고 적혀 있는데\n사진에는 2인분의 발자국이 있어" },
        { post: 66, uid: "3u3jauat4", body: "진짜다\n하나는 마나카 요스케 거라고 쳐도 다른 하나는 누구 거야…" },
        { post: 67, uid: "c9xtzkcnx", body: "이거, 둘 다 젖은 정도가 똑같지 않냐?\n같은 시간에 또 한 명 누군가가 있었다는 거잖아?" },
        { post: 68, uid: "44xifpydf", body: "마나카 요스케 타살설 부상" },
        { post: 69, uid: "7x9zfhh9s", body: "경찰이 도착했을 때는 발자국이 이미 말라 있었으니까 사고사로 판단된 거…라든가?" },
        { post: 70, uid: "d5ehz2nyr", body: "음…\n뭐 그래도 지금으로선, 누군가 있었을지도 모른다는 것 이상은 말 못 하겠네" },
        { post: 71, uid: "c9xtzkcnx", body: "뒷맛이 찜찜하지만… 캠페인 사이트에 정답 입력하고 올까…" },
      ],
      // 스레드 마지막: "스레드를 나간다" → 아웃트로 내레이션 → 게시판(2탄 열림)
      outro: {
        button: "스레드를 나간다",
        continueButton: "게시판 열기",
        unlocks: "thread2",
        lines: [
          "캠페인 사이트로 돌아와도",
          "머릿속은 계속 맴돌고 있었다.",
          "",
          "이 사진집은 도대체 뭐지?",
          "사건의 진상은 알 수 없지만,",
          "‘시체가 찍힌 사진집이 손에 있다’는 사실만으로도 소름이 돋는다.",
          "",
          "나는 퀴즈의 답을 캠페인 사이트에 입력했다.",
          "",
          "",
          "캠페인 사이트에 다음 퀴즈가 표시되었다.",
          "나는 다시 그 게시판을 열었다.",
        ],
      },
    },

    {
      id: "thread2",
      type: "thread",
      title: "【살인사건!?】 아타미 사진집 감상 스레 2탄",
      entries: [
        { post: 1, uid: "swb86w59c", body: "캠페인이고 뭐고 할 상황이 아닐지도 모르겠지만, 일단 세워봄\n\n이전 스레드\n【유명 편집자】 아타미 사진집 감상 스레 1탄" },
        { post: 2, uid: "44xifpydf", body: "3번째 문제는, 사진집에 실려 있는 민박집 이름이 뭐냐고 하네" },
        { post: 3, uid: "gg65736d9", body: "이건 쉽지 않냐?" },
        { quiz: { question: "Q. 사진집에 실려 있는 민박집 이름은?", fields: [ { type: "text", placeholder: "민박 이름 입력", answers: ["民宿いなほ", "民宿 いなほ", "いなほ", "민박이나호", "민박 이나호", "이나호"] } ] } },
        { post: 4, uid: "fuy74aanh", body: "민박 이나호(いなほ)야" },
        { post: 5, uid: "3u3jauat4", body: "혹시 모르니까 민박집 이름 검색해볼까" },
        { post: 6, uid: "d5ehz2nyr", body: "전 스레 사건은 아무리 봐도 우연이겠지\n이제 더는 아무것도 없겠지" },
        { post: 7, uid: "c9xtzkcnx", body: "아타미 민박에서 살인 사건 있었다는 기사 있던데…(((；ﾟДﾟ))) 덜덜", link: { to: "news_shrine", label: "▶ 하츠시마 신사 신주, 민박에서 흉기에 찔려 사망… 범인은 도주 중" } },
        { post: 8, uid: "44xifpydf", body: "와 진짜네\n사람 몇 명 죽은 거냐, 이 사진집" },
        { post: 9, uid: "gg65736d9", body: "흉기 아직 못 찾았네\n범인이 들고 그대로 도망친 건가?" },
        { post: 10, uid: "3u3jauat4", body: "이거 사진집에 나온 「민박 이나호(いなほ)」 맞지?" },
        { post: 11, uid: "swb86w59c", body: "맞음" },
        { post: 12, uid: "inydpn6k8", body: "이 사진집 보고 남친이랑 민박 이나호 가보자고 했었는데…\n이 방은 절대 피하고 싶다" },
        { post: 13, uid: "swb86w59c", body: "이 방 이름, 아는 사람?" },
        { quiz: { question: "Q. 살인 사건이 일어난 방의 이름은?", fields: [ { type: "text", placeholder: "방 이름 입력", answers: ["嵐", "あらし", "아라시", "폭풍"] } ] } },
        { post: 14, uid: "gg65736d9", body: "이 방, 「嵐(아라시)」래" },
        { post: 15, uid: "44xifpydf", body: "아라시인가\n신관(新館)에 있는 방이네" },
        { post: 16, uid: "inydpn6k8", body: "이 방만큼은 절대 안 묵을래요" },
        { post: 17, uid: "swb86w59c", body: "뉴스 기사에 피해자 옆에 있던 사람, 이 사진집에도 찍혀 있지 않냐?", image: "images/news04-img03.jpg" },
        { post: 18, uid: "3u3jauat4", body: "기사에서는 얼굴 가려져 있는데\n어디지?" },
        { post: 19, uid: "swb86w59c", body: ">>18\n힌트: 서핑보드" },
        { quiz: { question: "Q. 기사에서 피해자 옆에 있는 남자가 사진집에 찍혀 있는 것 같다. 어느 장소에 있는가? 고유명사로 답하시오.", fields: [ { type: "text", placeholder: "장소 입력", answers: ["サンビーチ", "선비치", "썬비치", "산비치", "모래사장"] } ] } },
        { post: 20, uid: "44xifpydf", body: "사진집에도 있네\n「サンビーチ(선비치)」에서 서핑하는 게 찍혀 있어" },
        { post: 21, uid: "inydpn6k8", body: "알기 쉽네…" },
        { post: 22, uid: "d5ehz2nyr", body: "이 녀석 완전 서퍼네 ㅋㅋ\n왜 팔에 완장 차고 있는지는 모르겠는데 ㅋㅋ", image: "images/thread2-img04.jpg" },
        { post: 23, uid: "swb86w59c", body: "어디 단체 마크 같은데?" },
        { post: 24, uid: "swb86w59c", body: "이 마크, 사진집 뒤쪽에서 본 것 같은데…\n벽돌 같은 건물이었나?" },
        { quiz: { question: "Q. 기사에서 피해자 옆에 있던 남자가 소속된 것으로 보이는 단체 이름은?", fields: [ { type: "text", placeholder: "단체 이름 입력", answers: ["自然を守る会", "자연을지키는회", "자연을지키는모임", "자연을지키는협회"] } ] } },   // 띄어쓰기는 판정에서 무시됨
        { post: 25, uid: "gg65736d9", body: "「自然を守る会(자연을 지키는 회)」이라는 단체네" },
        { post: 26, uid: "44xifpydf", body: "뭐야 그게" },
        { post: 27, uid: "swb86w59c", body: "홈페이지 찾았다", link: { to: "hp_shizen", label: "▶ 자연을 지키는 회 HP" } },
        { post: 28, uid: "3u3jauat4", body: "피해자랑 같이 찍혀 있던 놈 있었다!\n이사인 이와사키다" },
        { post: 29, uid: "c9xtzkcnx", body: "그러고 보니 피해자가 신주이자 회장이었잖아!" },
        { post: 30, uid: "d5ehz2nyr", body: "이와사키도 신주였냐\n좀 수상한데…" },
        { post: 31, uid: "gg65736d9", body: "신착 정보에 「회원 전용 페이지 업데이트했습니다」라고 돼 있는데\n회원 전용 페이지는 어디야?" },
        { post: 32, uid: "3u3jauat4", body: "이거, 무슨 의미일까?", image: "images/thread2-img05.png" },
        { post: 33, uid: "swb86w59c", body: "친구한테 물어봤는데, 이런 소문이 있다네\n\n자연을 지키는 회은, 회원에게 공지가 있을 때 공지와 관련된 물건에 마크를 붙인다.\n공지 내용을 알고 싶다면, 그 물건의 사진을 자연을 지키는 회이 관리하는 사이트에서 찾아서 5번 누르면 된다" },
        { post: 34, uid: "swb86w59c", body: "어, 그게 무슨 뜻이야?" },
        { post: 35, uid: "44xifpydf", body: ">>34\n그러니까 자연을 지키는 회 홈페이지에서\n마크가 붙은 사진(봉투)을 5번 누르면 회원 전용 공지를 볼 수 있다는 거지" },
        { post: 36, uid: "3u3jauat4", body: "어?\n잠깐만, 진짜 회원 페이지 들어갔는데" },
        { post: 37, uid: "swb86w59c", body: "이 수상한 편지, 누가 보낸 걸까?" },
        { quiz: { question: "Q. 수상한 문서를 보내온 단체는?", fields: [ { type: "text", placeholder: "단체 이름 입력", answers: ["開発推進協会", "개발추진협회", "개발 추진 협회"] } ] } },
        { post: 38, uid: "gg65736d9", body: "발신자는 「開発推進協会(개발 추진 협회)」였어" },
        { post: 39, uid: "gg65736d9", body: "잠깐만\n상황을 못 따라가겠어" },
        { post: 40, uid: "44xifpydf", body: "마크 붙어 있는 사진의 봉투를 5번 눌렀더니 숨겨진 페이지가 나왔어" },
        { post: 41, uid: "gg65736d9", body: "와, 진짜네\n이거 무슨 옛날식 장치냐" },
        { post: 42, uid: "3u3jauat4", body: "이런 옛날 감성 기믹 보니까 중2병 시절 흑역사 떠오른다…" },
        { post: 43, uid: "c9xtzkcnx", body: "개발 추진 협회, 완전 쓰레기네" },
        { post: 44, uid: "swb86w59c", body: "「자연을 지키는 회」이랑 「개발 추진 협회」로 검색해봤더니 이런 기사 나오던데—", link: { to: "news_suspect", label: "▶ 아타미 흉기 살인 사건 용의자 체포  행복초 소지 혐의" } },
        { post: 45, uid: "gg65736d9", body: "음? 행복초가 뭐야?" },
        { post: 46, uid: "44xifpydf", body: "마약 같은 건가\n그보다, 자연을 지키는 회 회장 죽인 건 무조건 이 미타 토라타 아니냐" },
        { post: 47, uid: "swb86w59c", body: "잠깐 시간 정리해봤다\n\n12:55 경찰, 민박 정문 근처 순찰\n13:00 피해자, 칼에 찔려 사망\n13:02 민박 정문 앞에서 행복초 소지한 미타 체포\n13:30 시신 발견 → 살인 사건 드러남\n14:00 경찰견 투입, 반경 500m 수색 → 흉기 발견 못함" },
        { post: 48, uid: "d5ehz2nyr", body: ">>47\n굿잡!" },
        { post: 49, uid: "c9xtzkcnx", body: "아… 근데 역시 토라타가 범인은 아닌 건가\n흉기를 안 가지고 있었으니까" },
        { post: 50, uid: "44xifpydf", body: "이 상황이면 칼 건네준 공범도 없었다는 거잖아" },
        { post: 51, uid: "3u3jauat4", body: "사진집 구석구석 다 뒤져봤는데 칼은 어디에도 안 떨어져 있음" },
        { post: 52, uid: "gg65736d9", body: "뭐 살인 사건 자체가 촬영 몇 달 전 일이니까" },
        { post: 53, uid: "swb86w59c", body: "그래도 역시 범인은 토라타인 것 같은데\n그럼 칼은 어디로 간 거지?" },
        { quiz: { question: "Q. 흉기인 칼은 어디로 사라진 것인가?", fields: [ { type: "text", placeholder: "입력", answers: ["ポスト", "우체통", "포스트", "우편함"] } ] } },
        { post: 54, uid: "d5ehz2nyr", body: "칼은 「ポスト(우체통)」에 넣은 거야!" },
        { post: 55, uid: "d5ehz2nyr", body: "와, 그거네…!" },
        { post: 56, uid: "44xifpydf", body: "신관에서 서문으로 나와서 정문 쪽으로 가면\n비석 옆에 있는 우체통 앞을 지나가게 되네" },
        { post: 57, uid: "3u3jauat4", body: "피 묻은 칼을 봉투에 넣어서 우체통에 넣었다는 거야?" },
        { post: 58, uid: "ttptzt7ht", body: "가지고 있던 붓펜이랑 스틱풀은\n주소 쓰고 봉투 봉인하는 데 쓴 거였던 거네…!" },
        { post: 59, uid: "c9xtzkcnx", body: "그거다\n이 우체통, 자세히 보니까 13시 20분에 수거되네" },
        { post: 60, uid: "3u3jauat4", body: "방에서 시신이 발견된 시점이랑 거의 동시에\n칼도 수거된 셈이네…" },
        { post: 61, uid: "d5ehz2nyr", body: "완전 명탐정 수준인데" },
        { post: 62, uid: "gg65736d9", body: "역시 행복초가 신경 쓰여서 찾아봤는데\n이거네", link: { to: "page_flower", label: "▶ 행복초 (幸せ草)" } },
        { post: 63, uid: "ttptzt7ht", body: "환각에 몸 상태 이상… 거의 마약이네" },
        { post: 64, uid: "d5ehz2nyr", body: "이 미타 토라타라는 놈, 뭐 하는 놈이야?" },
        { post: 65, uid: "swb86w59c", body: "이 녀석도 사진집에 찍혀 있지 않냐?\n손에 뭐 들고 있는데" },
        { quiz: { question: "Q. 미타 토라타는 사진집에서 무엇을 들고 있는가?", fields: [ { type: "text", placeholder: "입력", answers: ["スプレー缶", "스프레이캔", "스프레이 캔", "스프레이", "분무기"] } ] } },
        { post: 66, uid: "gg65736d9", body: "손에 「スプレー缶(스프레이 캔)」 들고 있네" },
        { post: 67, uid: "7x9zfnlh9s", body: "진짜네\n셔터에 뭐 쓰고 있는 거야?" },
        { post: 68, uid: "3u3jauat4", body: "완전 낙서 같네" },
        { post: 69, uid: "swb86w59c", body: "이 미타 토라타도 저 단체랑 관련 있는 건가" },
        { post: 70, uid: "gg65736d9", body: "어? 그 단체가 뭐야?" },
        { quiz: {
            question: "Q. 미타 토라타가 관여했다고 생각되는 단체는? 그리고 그 근거는?",
            fields: [
              { type: "text", label: "단체명", answers: ["開発推進協会", "개발추진협회", "개발 추진 협회"] },
              { text: "왜냐하면 " },
              { type: "select", answer: "괴문서", options: ["건물", "인물", "로고 마크", "괴문서"] },
              { text: " 와 " },
              { type: "select", answer: "낙서", options: ["모자", "낙서", "완장", "신발"] },
              { text: " 의 " },
              { type: "select", answer: "필적", options: ["구성", "색", "필적", "크기"] },
              { text: " 이(가) " },
              { type: "select", answer: "일치", options: ["불일치", "일치", "반대", "찬성"] },
            ],
        } },
        { post: 71, uid: "gg65736d9", body: "괴문서랑 낙서, 「ふ」 필적이 완전 똑같아\n「開発推進協会(개발 추진 협회)」네" },
        { post: 72, uid: "44xifpydf", body: "와, 진짜네\n이 「ふ」 글씨 쓰는 방식 완전히 똑같다" },
        { post: 73, uid: "swb86w59c", body: "그럼 「개발 추진 협회」가\n「자연을 지키는 회」 대표를 죽게 만들었다는 거네" },
        { post: 74, uid: "3u3jauat4", body: "아무리 대립한다고 해도 사람을 죽이냐" },
        { post: 75, uid: "7x9zfnlh9s", body: "아타미에서 대체 무슨 일이 벌어지고 있는 거냐 진짜" },
        { post: 76, uid: "gg65736d9", body: "좀 복잡해져서 관계도 만들어봤다\n링크 올릴게", link: { to: "page_chart", label: "▶ 사건 관계도" } },
        { post: 77, uid: "3u3jauat4", body: "미쳤다" },
        { post: 78, uid: "d5ehz2nyr", body: "뒤끝 찝찝하긴 한데… 캠페인 사이트에 답 입력해도 되나…" },
      ],
      outro: {
        button: "스레드를 나간다",
        continueButton: "게시판 열기",
        unlocks: "thread3",
        lines: [
          "민박에서 일어난 신주 살인 사건.",
          "행복초를 소지한 채 체포된 남자…",
          "",
          "아타미에서는 도대체 무슨 일이 벌어지고 있는 걸까?",
          "",
          "그리고 사건으로 이끄는 듯한 캠페인 퀴즈와,",
          "진실을 밝혀낼 단서가 담긴 사진집…",
          "",
          "단순한 우연일까?  아니면…",
          "",
          "",
          "다음 퀴즈도, 아타미에서 일어나고 있는 사건과 관련이 있는 걸까?",
          "호기심이 치솟아, 나는 늘 보던 게시판을 열었다.",
        ],
      },
    },

    {
      id: "thread3",
      type: "thread",
      title: "【거리의 비참한 현상】 아타미 사진집 감상 스레 3탄",
      entries: [
        { post: 1, uid: "swb86w59c", body: "이제 캠페인이고 뭐고 상관없을지도 모르겠지만 일단 스레드 세워놨어\n\n이전 스레\n【살인사건!?】 아타미 사진집 감상 스레 2탄" },
        { post: 2, uid: "7x9zfh9s", body: ">>1\n이제 캠페인이고 뭐고 상관없을지도 모르겠지만 ㄹㅇ 그건 맞다\n그거 말고 다른 게 너무 심각해서…" },
        { post: 3, uid: "cftizu36i", body: "4번째 문제는\n「하츠시마에 건설 예정인 미술관 이름은?」 이래" },
        { post: 4, uid: "wh7trehy3", body: "이것도 다음 사건으로 이어지는 건가…" },
        { post: 5, uid: "7x9zfh9s", body: "야 그만해라" },
        { post: 6, uid: "swb86w59c", body: "미술관 이름인가\n어디서 본 것 같기도 하고" },
        { quiz: { question: "Q. 하츠시마에 건설 예정인 미술관의 이름은?", fields: [{ type: "text", placeholder: "미술관 이름 입력", answers: ["初島美術館", "하츠시마미술관", "하츠시마 미술관"] }] } },
        { post: 7, uid: "gg65736d9", body: "「初島美術館(하츠시마 미술관)」이네" },
        { post: 8, uid: "cemgcma8b", body: "어? 「하츠시마 미술관」이라고 해서 개발추진협회가 관광객 유치용으로 계획하고 있는 미술관 맞지" },
        { post: 9, uid: "28r5eduf4", body: "ㅇㅇ\n개발추진협회 홈페이지에 올라와 있었어" },
        { post: 10, uid: "g25aueszd", body: "잠깐만!\n미술관 위치가 신주가 지켜오던 신목 있는 장소잖아" },
        { post: 11, uid: "wh7trehy3", body: "야야\n그럼 개발추진협회가 신주를 죽이고 강제로 미술관 부지로 만든 거냐…?" },
        { post: 12, uid: "cftizu36i", body: "와… 진짜 위험하다" },
        { post: 13, uid: "swb86w59c", body: "하츠시마 미술관으로 검색해보니까 이런 사건도 나오네", link: { to: "news_museum_theft", label: "▶ 하츠시마 미술관, 개관 전 도난 피해  약 3억 엔 상당의 미술품 5점 도난" } },
        { post: 14, uid: "g25aueszd", body: "창고에서 미술품이 도난당했다…?" },
        { post: 15, uid: "cemgcma8b", body: "이미 이 사진집으로 밝혀진 살인 사건이 2건이나 있음\n이 도난 사건까지 파고들면 또 아타미의 어둠이 드러날지도 모른다" },
        { post: 16, uid: "28r5eduf4", body: "야!\n창고에서 도난당한 항아리 같은 거, 사진집에 실려 있지 않냐?\n22페이지" },
        { post: 17, uid: "wh7trehy3", body: "진짜네 ㅋㅋ 가게 앞에 놓여 있다\n다른 도난품도 사진집에 찍혀 있을지도 모르겠다" },
        { post: 18, uid: "wh7trehy3", body: "이 사진집 진짜 뭐냐…?\n이건 좀 이상한데…?" },
        { post: 19, uid: "swb86w59c", body: "일단 찾아보자, 나머지 4개의 도난품도", images: ["images/news06-img02.jpg", "images/news06-img03.jpg", "images/news06-img05.jpg", "images/news06-img06.jpg"] },
        { quiz: { question: "Q. 나머지 도난품이 실려 있는 사진집 페이지는? (4곳, 순서 상관없음)", fields: [{ type: "text", placeholder: "예: ○,○,○,○", anyOrder: true, answers: ["31", "32", "56", "62"] }] } },
        { post: 20, uid: "28r5eduf4", body: "나머지 도난품도 다 찾았다\n31·32·56·62페이지에 찍혀 있어" },
        { post: 21, uid: "28r5eduf4", body: "도난품을 길거리에 놔두다니 대담한 범인이네" },
        { post: 22, uid: "cftizu36i", body: "전부 일부러 가게 앞에 둔 것 같지 않냐" },
        { post: 23, uid: "7x9zfh9s", body: "뭔가 숨은 의도가 있을 것 같은데" },
        { post: 24, uid: "wh7trehy3", body: "훔친 걸 장식처럼 둔 건가? ㅋㅋ" },
        { post: 25, uid: "swb86w59c", body: "도난품이 놓인 가게들 공통점 뭐 있지?" },
        { post: 26, uid: "swb86w59c", body: "다 음식점 같은데, 다른 공통점은?" },
        { post: 27, uid: "swb86w59c", body: "어느 가게든 그거 있잖아…" },
        { quiz: {
            question: "Q. 도난품이 놓여 있던 가게의 공통점은?",
            fields: [
              { type: "text", label: "어느 점포에나", answers: ["鹿頭", "가토", "사슴머리", "사슴 머리", "사슴머리(가토)"] },
              { type: "text", label: "가 있어서", answers: ["自然を守る会", "자연을지키는회", "자연을지키는모임", "자연을지키는협회"] },
              { text: "협력점이라는 걸 알 수 있다" },
            ],
        } },
        { post: 28, uid: "fuy74aahn", body: "확실히, 어느 가게든 사슴 머리가 있어서 「자연을 지키는 회 협력점」인 건 알 수 있네" },
        { post: 29, uid: "7x9zfh9s", body: "응?\n그럼 결국 자연을 지키는 회가 미술품을 훔쳤다는 거야?" },
        { post: 30, uid: "gg65736d9", body: ">>29\n축제각 ㅋㅋ" },
        { post: 31, uid: "cftizu36i", body: "신목을 지키려고 미술관 창고에서 미술품을 훔쳤다는 건가?" },
        { post: 32, uid: "7x9zfh9s", body: "결국 잡혔네", link: { to: "news_theft_arrest", label: "▶ 하츠시마 미술관 도난 사건  ‘자연을 지키는 회’ 협력점 점주들 체포, 혐의 부인" } },
        { post: 33, uid: "wh7trehy3", body: "아무리 봐도 자연을 지키는 회 협력점 짓 같네" },
        { post: 34, uid: "wh7trehy3", body: "사슴 머리 놓여 있는 시점부터 수상하다고 생각했어" },
        { post: 35, uid: "c9xtzkcnx", body: "신주 죽고 나서 개발추진협회에 엄청 원한 있었던 거겠지" },
        { post: 36, uid: "swb86w59c", body: "아니, 오인 체포였던 것 같음", link: { to: "news_misarrest", label: "▶ 하츠시마 미술관 미술품 도난 사건  용의자 얼굴 공개, 오인 체포된 찻집 주인에게 사과" } },
        { post: 37, uid: "wh7trehy3", body: "어? 그럼 자연을 지키는 회 범행이 아닌 건가…?\n아니면 이 사진 속 범인도 결국 자연을 지키는 회 쪽인가?\n좀 무섭다…" },
        { post: 38, uid: "c9xtzkcnx", body: "전혀 자연을 지킬 것 같은 얼굴은 아닌데 ㅋㅋㅋㅋ" },
        { post: 39, uid: "swb86w59c", body: "이 얼굴, 사진집에서 어디 가게에 있었던 것 같은데…" },
        { quiz: { question: "Q. 용의자(범인)가 사진집에서 있던 가게 이름은?", fields: [{ type: "text", placeholder: "가게 이름 입력", answers: ["HARBOR'S W", "HARBORS W", "ハーバーズW", "하버스W", "하버스 W", "하버즈W"] }] } },
        { post: 40, uid: "28r5eduf4", body: "「HARBOR'S W(하버스W)」에 있었어" },
        { post: 41, uid: "7x9zfh9s", body: "진짜네\n46페이지에 찍혀 있음" },
        { post: 42, uid: "wh7trehy3", body: "고급 레스토랑 같은데, 얘 돈은 어디서 난 거냐?\n미술품은 회수됐으니까 판 건 아닐 텐데" },
        { post: 43, uid: "swb86w59c", body: "비싼 정장 입어도 인상 나쁜 건 숨겨지지가 않네" },
        { post: 44, uid: "d5ehz2nyr", body: "얘 어디서 정장 샀을까?\n이 정장, 어디서 본 적 있는 것 같은데" },
        { post: 45, uid: "swb86w59c", body: "정장 산 순간 찍힌 거 없냐?" },
        { quiz: { question: "Q. 범인이 정장을 산 가게는?", fields: [{ type: "text", placeholder: "가게 이름 입력", answers: ["スーツ花菱", "슈트하나비시", "슈트 하나비시", "정장 하나비시", "하나비시"] }] } },
        { post: 46, uid: "gg65736d9", body: "「スーツ花菱(슈트 하나비시)」에서 샀네" },
        { post: 47, uid: "gg65736d9", body: "진짜네\n얼굴은 안 보이는데 28페이지에 같은 정장 입은 놈 있음" },
        { post: 48, uid: "c9xtzkcnx", body: "정장 안 어울린다 ㅋㅋㅋ" },
        { post: 49, uid: "28r5eduf4", aa: true, body: ">>48\n　　＾∀＾\n（´∀｀）＜ オマエモナー\n（　　　）\n　　｜　｜\n　（＿）＿）" },
        { post: 50, uid: "gg65736d9", body: "“하나비”인가 했는데, 고급 정장집이네" },
        { post: 51, uid: "wh7trehy3", body: "차 봉투에 “参百萬(300만)”이라고 적혀 있네\n부럽다", image: "images/thread3-img02.jpg" },
        { post: 52, uid: "swb86w59c", body: "혹시 이 범인, 미술품 훔친 보수로 이 돈 받은 거 아닐까?\n물론 가설이지만" },
        { post: 53, uid: "c9xtzkcnx", body: "그럼 미술품 절도를 의뢰한 사람이 있다는 거네?" },
        { post: 54, uid: "swb86w59c", body: "범인 동선 따라가면 의뢰자도 알 수 있을 듯" },
        { quiz: { question: "Q. 범인은 어디서 돈을 받았는가?", fields: [{ type: "text", placeholder: "장소 입력", answers: [   // 띄어쓰기는 판정에서 무시됨. 락커/로커/사물함/물품보관함 등 한국어 표현 모두 허용
          "熱海駅北側のコインロッカー", "コインロッカー",
          "코인락커", "코인로커", "사물함", "물품보관함", "보관함", "락커", "로커", "코인사물함", "코인보관함",
          "아타미역코인락커", "아타미역코인로커", "아타미역사물함", "아타미역물품보관함", "아타미역보관함", "아타미역락커", "아타미역로커",
          "아타미역북쪽코인락커", "아타미역북쪽코인로커", "아타미역북쪽사물함", "아타미역북쪽물품보관함", "아타미역북쪽보관함", "아타미역북쪽락커", "아타미역북쪽로커",
        ] }] } },
        { post: 55, uid: "rayi7aahn", body: "차 봉투 들고 아타미역 북쪽 코인락커에 있더라!" },
        { post: 56, uid: "wh7trehy3", body: "야 잘 찾았다" },
        { post: 57, uid: "gg65736d9", body: "코인락커에서 돈 꺼낸 건가?" },
        { post: 58, uid: "c9xtzkcnx", body: "얘 혼자 락커에 돈 넣어둔 거냐?" },
        { post: 59, uid: "gg65736d9", body: "개쓸데없는 짓이네\n코인락커를 금고 대신 쓰는 놈 ㅋㅋ" },
        { post: 60, uid: "swb86w59c", body: "아니, 이런 큰돈을 혼자 넣어둘 것 같진 않고\n누가 열쇠 줘서 돈 받아간 거 아닐까?" },
        { post: 61, uid: "28r5eduf4", body: "오, 명탐정이다" },
        { post: 62, uid: "swb86w59c", body: "열쇠 받은 순간 찍힌 거 없냐?" },
        { quiz: { question: "Q. 범인은 어디서 코인락커 열쇠를 전달받았는가?", fields: [{ type: "text", placeholder: "장소 입력", answers: ["熱海親水公園", "아타미친수공원", "아타미 친수공원", "친수공원"] }] } },
        { post: 63, uid: "rayi7aahn", body: "「熱海親水公園(아타미 친수공원)」에서 받았네" },
        { post: 64, uid: "swb86w59c", body: "어?\n확실히 정장 입은 여자가 코인락커 열쇠를 누군가에게 건네고 있는데, 건네받는 상대는 사진에 안 찍혀 있지 않냐?" },
        { post: 65, uid: "7x9zfh9s", body: "아니, 받는 쪽이 범인이야\n슬쩍 보이는 손목시계가 일치해" },
        { post: 66, uid: "wh7trehy3", body: "그럼 이 정장 여자가 미술품 도난을 의뢰한 건가" },
        { post: 67, uid: "cftizu36i", body: "이 정장 여자, 다른 페이지에도 찍혀 있었던 것 같은데" },
        { post: 68, uid: "28r5eduf4", body: "58페이지에 찍혀 있어!", image: "images/thread3-img03.jpg" },
        { post: 69, uid: "swb86w59c", body: "정장 여자, 여기서 누구한테 열쇠 받고 있는 거야?" },
        { post: 70, uid: "c9xtzkcnx", body: "상대는 신발밖에 안 찍혀 있는데…\n이거 즉, 그 신발이 검은색이니까 정장 여자는 단순히 열쇠 운반책일 뿐이라는 거 아냐?" },
        { post: 71, uid: "g25aueszd", body: "상대의 이 신발, 시즈오카 참의원 의원에게 기념품으로 증정된 신발 아니야?", image: "images/thread3-img04.jpg" },
        { post: 72, uid: "swb86w59c", body: "시즈오카 참의원 홈페이지 찾았다!\n미술품 훔치게 한 검은 구두는 이 4명 중 누군가임이 틀림없다!", link: { to: "hp_giin", label: "▶ 시즈오카 참의원 의원 소개" } },
        { post: 73, uid: "swb86w59c", body: "흑막을 특정해줘" },
        { quiz: {
            question: "Q. 미술관 도난 사건의 흑막(배후)의 이름과, 특정할 수 있는 근거는?",
            fields: [
              { type: "text", label: "흑막의 이름은", answers: ["大山新一", "오야마 신이치", "오야마신이치"] },
              { text: "흑막은 " },
              { type: "select", answer: "전자동", options: ["차", "자가용", "버기(사륜 오토바이)", "전기", "마이(개인용)", "전자동"] },
              { type: "select", answer: "의자", options: ["비행기", "가방", "의자", "오토바이", "세탁기", "TV"] },
              { text: "에 " },
              { type: "select", answer: "타고", options: ["치여서", "넋을 잃고 바라보다가", "타고", "올라타서(걸터앉아서)", "찍혀서"] },
              { text: "있고, " },
              { type: "select", answer: "발", options: ["마음", "의혹", "배지", "손", "발", "눈"] },
              { text: "이 " },
              { type: "select", answer: "떠 있다", options: ["떼고 있다", "잡고 있다·들고 있다", "놓고 있다", "죽이고 있다", "죽어 있다", "떠 있다"] },
              { text: "때문에." },
            ],
        } },
        { post: 74, uid: "gg65736d9", body: "이 신발 주인, 전동 의자(휠체어)에 타고 있어서 발이 떠 있어\n오야마 신이치잖아!" },
        { post: 75, uid: "wh7trehy3", body: "와, 이거 휠체어다!\n대박!" },
        { post: 76, uid: "c9xtzkcnx", body: "어?\n오야마 신이치가 개발추진협회의 의원이었지\n미술품 훔친 건 자연을 지키는 회 쪽이라고 생각했는데 아닌 거야?" },
        { post: 77, uid: "7x9zfh9s", body: "무슨 일이 벌어지고 있는 거지?" },
        { post: 78, uid: "swb86w59c", body: "개발추진협회의 미술품 도난 사건\n↓\n자연을 지키는 회 협력점의 남자가 체포\n↓\n오인 체포로 석방\n↓\n진범을 쫓다 보니 결국 도달한 건 개발추진협회 사람\n이거 대체 뭐야??" },
        { post: 79, uid: "cftizu36i", body: "즉 미술품 도난은… 개발추진협회의 자작극…?" },
        { post: 80, uid: "wh7trehy3", body: "자연을 지키는 회의 악평을 퍼뜨리기 위해\n저 험상궂은 남자를 고용해서 미술품을 훔치게 하고\n자연을 지키는 회 협력점 앞에 놔둔 거네\n\n“3억 엔짜리 미술품을 털어가다니, 너무 대담하잖아…!”" },
        { post: 81, uid: "swb86w59c", body: "뉴스 또 나왔다", link: { to: "news_final_arrest", label: "▶ 하츠시마 미술관 미술품 도난 사건  지명수배 용의자 체포" } },
        { post: 82, uid: "gg65736d9", body: "진범 하루 만에 잡혔네" },
        { post: 83, uid: "c9xtzkcnx", body: "이 얼굴, 사진집에서 봤던 그 험상궂은 남자 맞지" },
        { post: 84, uid: "swb86w59c", body: "상관도 업데이트됐다고 했었지", link: { to: "page_chart2", label: "▶ 사건 관계도 (업데이트)" } },
        { post: 85, uid: "28r5eduf4", body: "신(神)" },
        { post: 86, uid: "7x9zfh9s", body: "뭐 어쨌든 캠페인 사이트에 정답 입력하러 가볼까" },
        { post: 87, uid: "swb86w59c", body: "이걸로 캠페인 질문은 전부 답한 거네\n근데 진짜 위험한 사진집이었다…" },
      ],
      outro: {
        button: "스레드를 나간다",
        continueButton: "캠페인 사이트로",
        finale: true,   // 게시판 대신 최종 피날레로
        lines: [
          "개발 예정지의 열쇠를 쥐고 있던 남자의 사망 사건.",
          "신목을 모시는 신주의 살해 사건.",
          "건설 예정 미술관의 도난 사건.",
          "",
          "이 사진집의 퀴즈 캠페인을 통해",
          "모두 이어져 있다.",
          "",
          "이 퀴즈에 답하면",
          "편집부로부터 모든 진상이 밝혀질지도 모른다.",
          "",
          "나는 답을 입력했다.",
        ],
      },
    },

    {
      id: "thread4",
      type: "thread",
      title: "【사라진 모델은 어디로?】 아타미 사진집 감상 스레 4탄",
      entries: [
        { post: 1, uid: "t57r5h43d", body: "그러고 보니 그 모델은 어디로 간 걸까?\n\n이전 글\n【거리의 비참한 현실】 아타미 사진집 의혹 스레 3번째" },
        { post: 2, uid: "y4zmtcaus", body: "개발추진협회에 납치된 거 아니냐?" },
        { post: 3, uid: "kk3whcd7z", body: "그 「아타미 사진집」 의혹 스레 다시 읽어보고, 다시 한 번 정보 정리해보자" },
        { post: 4, uid: "ggh7cgd3k", body: "모델 몸 상태 안 좋았던 거 아니었냐?\n뭔가 이상한 거 먹은 거 아냐?" },
        { quiz: { question: "Q. 모델 마나카 아이가 몸이 나빠지기 전에 먹었던 것은? 상품명으로 답하시오.", fields: [{ type: "text", placeholder: "상품명 입력", answers: ["シンマンジュウ", "신만주", "신 만주", "심만주"] }] } },
        { post: 5, uid: "kk3whcd7z", body: "「シンマンジュウ(신만주)」네" },
        { post: 6, uid: "y4zmtcaus", body: "확실히, 뉴스에서는 만쥬를 먹고 나서…라고 적혀 있었지" },
        { post: 7, uid: "kk3whcd7z", body: "신만주(シンマンジュウ) 홈페이지 찾았다", link: { to: "hp_shinmanju", label: "▶ 신만주 HP" } },
        { post: 8, uid: "ggh7cgd3k", body: "시중에 파는 만주 아니냐?\n먹어도 몸 상태 안 나빠지지 않냐" },
        { quiz: {
            question: "Q. 신만주를 먹고 몸 상태가 나빠진 이유는?",
            fields: [
              { type: "text", label: "마나카 아이가 먹은 신만주에는", answers: ["幸福草", "행복초", "こうふくそう"] },
              { type: "text", label: "별명", answers: ["ミツロ", "미츠로", "みつろ", "ロロロ", "로로로"] },
              { text: "가 들어 있었다" },
            ],
        } },
        { post: 9, uid: "fuy74aanh", body: "알았다!\n마나카 아이가 먹은 신만주에는 행복초, 즉 별명 미츠로가 들어 있었다" },
        { post: 10, uid: "y4zmtcaus", body: "뭐?\n행복초라면 신주를 죽인 미타 토라타가 가지고 있던 위험한 식물 아니냐\n환각 작용 있지 않았냐?" },
        { post: 11, uid: "kk3whcd7z", body: "그런 게 들어간 만주를 판다고!?" },
        { post: 12, uid: "cfitzu36i", body: "사러 간다 ( ﾟ∀ﾟ)o彡゜" },
        { post: 13, uid: "kk3whcd7z", body: "신만주는 2종류 있는데, 행복초 들어간 건 공물용 쪽인 듯" },
        { post: 14, uid: "ggh7cgd3k", body: "이거 만주를 잘못 넣은 건 편집장 아니냐?\n잘못 사온 거 아냐?" },
        { quiz: { question: "Q. 편집장이 공물용 신만주를 살 수 있었던 이유는?", fields: [{ type: "text", placeholder: "입력", answers: ["神事用の装束", "신사용의상", "신사용복장", "신사용제복", "신사용의복", "신사용장속", "装束", "의상", "복장", "제복", "의복", "장속"] }] } },
        { post: 15, uid: "fuy74aanh", body: "편집장은 신사 의식용 복장을 가지고 있어서 공물용 만주를 살 수 있었던 거야" },
        { post: 16, uid: "y4zmtcaus", body: "공물용은 신사 관계자만 살 수 있게 되어 있잖아\n그럴 만도 하지, 위험한 성분 들어있으니까" },
        { post: 17, uid: "kk3whcd7z", body: "아! 2페이지에 있는 편집장 사진에 의상 찍혀 있네!" },
        { post: 18, uid: "ggh7cgd3k", body: "그럼 일부러 공물용 만주를 사온 건가…?" },
        { post: 19, uid: "cfitzu36i", body: "편집장이 모델한테 만주 먹여서 유인했다는 거냐?" },
        { post: 20, uid: "kk3whcd7z", body: "설마…" },
        { post: 21, uid: "y4zmtcaus", body: "아타미 사진집 의혹 스레 다시 보고 있었는데\n나 엄청난 거 알아챈 것 같아" },
        { post: 22, uid: "28r5eduf4", body: "뭐야\n무서운데" },
        { post: 23, uid: "y4zmtcaus", body: "ID:swb86w59c의 글 전부 이상한데…" },
        { post: 24, uid: "ggh7cgd3k", body: ">>ID:swb86w59c의 글 전부 이상한데\n뭐가 어떻게 이상한 거야?" },
        { post: 25, uid: "y4zmtcaus", body: "ID:swb86w59c가 던진 질문에 답을 찾아보면, 전부 사건의 진실에 가까워지고 있어" },
        { post: 26, uid: "kk3whcd7z", body: "좀 어렵다\n쉽게 말해줘" },
        { post: 27, uid: "y4zmtcaus", body: "그러니까, 사진집에 숨겨진 사건의 진실을 알아차리게 하려고\n우린 ID:swb86w59c에게 유도당하고 있었던 거야!" },
        { post: 28, uid: "kk3whcd7z", body: "뭐야 그게? 진짜로 하는 말이야?" },
        { post: 29, uid: "ggh7cgd3k", body: "그런 게 가능한 사람이 있을 리가 없잖아?" },
        { post: 30, uid: "t57r5h43d", body: "아니, 한 명은 있어\n사진집에 어떤 사진을 실을지 결정할 수 있는 사람" },
        { post: 31, uid: "y4zmtcaus", body: "편집장 우나바라 나츠미" },
        { post: 32, uid: "ggh7cgd3k", body: "ID:swb86w59c의 리모트 호스트 특정됨\n아타미 출판 쪽이었음" },
        { post: 33, uid: "t57r5h43d", body: "축제다ーー(ﾟ∀ﾟ)ーー!!" },
        { post: 34, uid: "y4zmtcaus", body: "지금 아타미 출판에 전화했는데 아무도 안 받는다" },
        { post: 35, uid: "kk3whcd7z", body: "현지다. 아타미 출판으로 간다" },
        { post: 36, uid: "y4zmtcaus", body: "난 처음부터 편집장이 수상하다고 생각했어" },
        { post: 37, uid: "kk3whcd7z", body: "지금 돌입\n편집장 흑막 확정?" },
        { post: 38, uid: "ggh7cgd3k", body: "편집장 우나바라가 도망치기 전에 잡아!" },
        { post: 39, uid: "swb86w59c", body: "", image: "images/thread4-img01.jpg" },
        { post: 40, uid: "t57r5h43d", body: "아! ID:swb86w59c!" },
        { post: 41, uid: "kk3whcd7z", body: "모델 사진? 사진집에 실려 있던 거다" },
        { post: 42, uid: "ggh7cgd3k", body: "야! 우나바라! 이제 정체 들통났어!!" },
        { post: 43, uid: "cfitzu36i", body: "사진에 대해 생각해보자!" },
      ],
    },
  ],

  /* ---------- 최종 피날레 (진 엔딩) ---------- */
  finale: {
    congrats: {
      heading: "축하합니다",
      lines: [
        "화면에 표시된 것은 아무 변화도 없는 캠페인 응모 페이지였다.",
        "",
        "나는 김이 빠졌다.",
        "모든 게 우연이었던 걸까?",
        "일상에 질려 있던 내가 무의식적으로 만들어낸",
        "망상에 지나지 않았던 걸까…?",
      ],
      button: "계속",
    },
    transition: "그러고 1개월 후, 나는 이메일 하나를 받게 되었다.",
    emailFrom: "우나바라 나츠미(海原なつみ)로부터의 메시지",
    emailLines: [
      { t: "많은 응모 감사합니다." },
      { t: "사진집을 다시 한번 잘 봐주세요." },
      { t: "" },
      { t: "아타미를 더럽힌 ‘호랑이 두 마리’를 부리는", red: true },
      { t: "세피아 색에 숨겨진 그 인물.", red: true },
      { t: "" },
      { t: "내가 특별하게 생각하는 상대가 누구인지 알 수 있게 해두었습니다." },
      { t: "모든 걸 이해한 당신과 이야기할 수 있기를 기대하고 있습니다." },
    ],
    finalQuizTitle: "최종 문제",
    finalQuizQuestion: "나(우나바라)가 특별한 마음을 품은 상대의 이름은?",
    finalQuizAnswers: ["うつみこうた", "うつみ こうた", "우츠미 코우타", "우츠미코우타", "우츠미 코타", "우츠미코타"],
    ending: {
      lines: [
        "말대로 행동해 보니",
        "「절대 용서하지 않는다」라는 불길한 메시지가 떠올랐고,",
        "화살표는 개발추진협회의 「우츠미 코우타」를 가리키고 있었다.",
        "",
        "이건…",
        "",
        "떨리는 손으로 「우츠미 코우타」라고 입력하자",
        "영상 통화 앱이 자동으로 실행되었다.",
        "",
        "그 화면에 나타난 것은",
        "감정을 읽을 수 없는 표정으로 이쪽을 바라보는",
        "우나바라 나츠미였다…",
      ],
      video: "W36i1iE69ZE",   // 엔딩 영상(YouTube)
      leakButton: "고발한다",   // 영상 아래 버튼 → 文秋리크스 폼
    },

    // 文秋리크스(제보 사이트) — 사건 전체 요약 최종 보너스
    leak: {
      title: "文秋리크스",
      heading: "당신이 가진 정보를 알려주세요.",
      sub: "아래 항목을 입력하고 「전송」 버튼을 클릭하세요.",
      sectionTitle: "제공 정보의 내용",
      statements: [
        { fields: [
          { text: "1. 개발추진협회의 미타는, " },
          { type: "select", answer: "민박 이나호", options: ["바다낚시공원", "아타미역", "공장", "개발추진협회 사무소", "민박 이나호"] },
          { text: " 에서 " },
          { type: "select", answer: "자연을 지키는 회 회장", options: ["카페 점주", "모델", "부동산 회사 사장", "자연을 지키는 회 회장", "경찰"] },
          { text: " 을(를) 살해했다." },
        ] },
        { fields: [
          { text: "2. 개발추진협회에 의한 미술품 도난은 " },
          { type: "select", answer: "자연을 지키는 회", options: ["카페 점주", "모델", "부동산 회사 사장", "자연을 지키는 회", "경찰"] },
          { text: " 에 대한 " },
          { type: "select", answer: "괴롭힘", options: ["배려", "친절함", "괴롭힘", "농담"] },
          { text: " 이었다." },
        ] },
        { fields: [
          { text: "3. 개발추진협회는 자연을 지키는 회가 소중히 여기는 것을 빼앗으려 했다. 그것은, " },
          { type: "select", answer: "신목", options: ["미술품", "아이들", "사슴 머리", "신목"] },
          { text: " 와(과) " },
          { type: "select", answer: "하츠시마 미술관", options: ["아타미역", "민박 이나호", "하츠시마 미술관", "아타미 부동산"] },
          { text: " 의 " },
          { type: "select", answer: "주소", options: ["소유자", "주소", "계약자", "명칭"] },
          { text: " 가 같았던 것으로부터 알 수 있다." },
        ] },
        { fields: [
          { text: "4. 1~3은 모두 흑막 " },
          { type: "select", answer: "우츠미 코우타", options: ["우나바라 나츠미", "카미시마 모리오", "우츠미 코우타", "오오야마 신이치", "마나카 요스케"] },
          { text: " 의 지시이다." },
        ] },
      ],
      submit: "전송",
      successHead: "정보 제공 감사합니다.",
      successLines: [
        "당신이 유출한 것으로 인해 개발추진협회의 악행은 만천하에 드러났다.",
        "게시판은 축제 분위기가 되었다.",
        "당신은 자신의 행동이 틀리지 않았음을 안도하며,",
        "게시판을 닫으려 마우스에 손을 올렸다.",
        "",
        "그때, 하나의 글이 눈에 들어왔다.",
      ],
      postPreview: { no: 1, uid: "t57r5h43d", body: "그러고 보니 그 모델은 어디로 간 걸까?" },
      successLines2: [
        "그렇다. 수수께끼는 아직 남아 있다.",
        "",
        "나도 다시 한 번 사진집을 펼쳤다.",
      ],
      nextButton: "다시 게시판을 연다",
      nextThread: "thread4",
    },

    // 神事用饅頭 기록 — 신만주 HP 포스터의 여자아이 쇄골(문양) 5번 클릭으로 열리는 숨겨진 페이지
    record: {
      title: "신사(神事)용 만주 기록",
      entries: [
        { date: "20XX년 5월 1일", buyer: "우나바라 나츠미 (うなばらなつみ)", target: "마나카 아이 (まなかあい)" },
        { date: "20XX년 3월 1일", buyer: "이와사키 쿠사미 (いわさきくさみ)", target: "야마조에 유코 (さんらくゆうこ)" },
        { date: "20XX년 1월 1일", buyer: "카미시마 모리오 (かみしまもりお)", target: "쿠츠나 마리 (くつなまり)" },
      ],
      rules: [
        "신사용 만주는, 의식 전에 대상자＝신에게 바치는 제물에게 먹일 것.",
        "제물을 중심으로 의식을 행한 후, 숨이 남아 있는 동안에 묻을 것.",
        "다음 의식이 행해지기까지 붉게 자란 미츠로를 베어내어, 신만주(シンマンジュウ)용으로 가공을 진행할 것.",
      ],
      closeButton: "닫기",
      afterLines: [
        "편집장, 우나바라 나츠미가 게시판에 올린 한 장의 사진.",
        "",
        "그걸 계기로 모든 사실을 알게 된 나는,",
        "진실을 다시 문춘 온라인에 투고하기로 했다…",
      ],
      nextButton: "文秋리크스로",
    },

    // 文秋리크스 — 최종 제보(모델의 행방). 정답: 신목 / 아래
    leak2: {
      title: "文秋리크스",
      heading: "당신이 가진 정보를 알려주세요.",
      sub: "아래 항목을 입력하고 「전송」 버튼을 클릭하세요.",
      sectionTitle: "제공 정보의 내용",
      statements: [
        { fields: [
          { text: "모델 마나카 아이가 지금 있는 곳은, " },
          { type: "select", answer: "신목", options: ["바다", "민박 이나호", "신목", "개발추진협회", "자연을 지키는 회"] },
          { text: " 의 " },
          { type: "select", answer: "아래", options: ["위", "가운데", "아래", "처마 밑", "창고", "사무소"] },
        ] },
      ],
      submit: "전송",
      endingMovie: "Xj535-wQFvU",           // 최종 제보(신목/아래) 후 이어지는 엔딩 영상 = 끝
      endingMovieButton: "엔딩 무비를 재생한다",
      successLines: [],
    },
  },

  /* ---------- 링크로 열리는 페이지 ---------- */
  pages: {
    news_missing: {
      type: "news",
      title: "아타미 모델 마나카 아이, 촬영 중 의문의 실종",
      date: "20XX/05/02 공개",
      body: [
        "아타미에서 활동하는 지역 출신 모델, 마나카 아이(24)가 사진집 촬영 도중 행방불명된 것으로 알려졌다.",
        "마나카 씨는 5월 1일 아침부터 아타미 일대에서 촬영을 진행하고 있었으며, 오후 2시경 “몸 상태가 안 좋아서 화장실에 다녀오겠다”고 말한 뒤 현장을 떠난 채 이후 소식이 끊겼다.",
        "모델이 사라진 상황에서 촬영팀은 일정을 변경해 인근 상점가를 촬영하면서 수색을 진행했지만, 마나카 씨와는 연락이 닿지 않았고 자택에도 돌아오지 않아 결국 수색 요청이 접수됐다.",
        "관계자에 따르면, 마나카 씨는 정오 무렵 한 차례 휴식을 취한 뒤 오후 1시에 현장으로 복귀했으며, 사진집 편집자가 준비한 촬영용 도시락을 먹은 이후 몸 상태가 좋지 않은 모습이 보였다고 한다.",
      ],
      images: [
        // src: 기사에 오른쪽으로 뜨는 사진 (클릭하면 이 사진이 그대로 크게 뜸)
        // caption: 사진 밑 설명
        { src: "images/news_missing_1.jpg.webp", caption: "▲ 마나카 아이 씨" },
      ],
    },

    news_resort: {
      type: "news",
      title: "마나카 요스케 씨, 아타미 리조트 개발 계획 착수  지역 주민과의 갈등 속 향방 주목",
      date: "20XX/4/10 공개",
      body: [
        "아타미에서 넘버원 수준의 부동산 보유 수를 자랑하는 ‘아타미 부동산’의 사장, 마나카 요스케(まなか ようすけ) 씨가 다음 사업으로 시야에 두고 있는 것은 ‘아타미 개발 추진 협회’가 추진 중인 아타미 리조트 개발 계획이다.",
        "최근 아타미를 찾는 관광객 수는 증가 추세에 있으며, 이를 바탕으로 더 큰 발전을 목표로 하츠시마를 중심으로 한 대규모 리조트 단지 조성 계획이 진행되고 있다. 그 개발 부지 확보의 열쇠를 쥔 인물이 바로 마나카 씨다.",
        "한편, 이 계획이 자연환경 파괴를 수반한다는 점에서 지역 주민들 사이에서는 반대 목소리도 커지고 있다. 마나카 씨는 개발을 추진하려는 측의 압박과 동시에, 자연 보호를 주장하는 측의 비판을 받는 등 갈등 상황에 놓여 있다.",
        "또한, 아타미에서 모델로 활동하는 마나카 씨의 외동딸을 둘러싼 괴롭힘 사건도 발생하고 있어, 그 속에서 마나카 씨가 어떤 판단을 내릴지 주목되고 있다.",
      ],
      images: [
        { src: "images/news02-img01.jpg", caption: "▲ 마나카 요스케 씨" },
      ],
    },

    news_drowned: {
      type: "news",
      title: "지역 부동산 회사 사장 마나카 요스케 씨, 익사체로 발견",
      date: "20XX/5/3 공개",
      body: [
        "지역을 중심으로 사업을 전개하는 ‘아타미 부동산’의 사장, 마나카 요스케(まなか ようすけ) 씨가 5월 1일 16시경, 익사한 상태로 발견되었다. 검시 결과, 사망 시각은 같은 날 15시경으로 판명되었다.",
        "최초 발견자인 카메라맨은 “발견했을 당시, 바다낚시공원에는 아무도 없었다”라고 증언했다. 이 카메라맨은 마나카 씨의 사망 추정 시각에 다른 장소에 있었다는 알리바이가 있기 때문에, 경찰은 마나카 씨가 혼자 낚시를 하던 중 발을 헛디뎌 바다에 추락한 사고사로 보고 수사를 진행하고 있다.",
      ],
      images: [
        { src: "images/news02-img01.jpg", caption: "▲ 마나카 요스케 씨" },
      ],
    },

    hp_kaihatsu: {
      type: "hp",
      title: "개발 추진 협회",
      subtitle: "Development Promotion Association ・ 2015년 결성",
      banner: "아타미를 세련된 관광 도시로",
      images: [
        { src: "images/3.png", caption: "개발추진협회 대표  우츠미 코타(うつみこうた)" },
      ],
      body: [
        "아타미를 아시아 최대 규모의 대형 리조트로.",
        "모든 것은 미래를 위해. 아이들을 위해.",
        "그리고 아타미의 더 큰 도약을 위해.",
      ],
      supporterImage: "images/4.png",   // 오야마 신이치 지지자 블록(그래픽)
      // HP 하단의 News 공지 블록
      news: {
        title: "하츠시마에 새로운 리조트 개발 부지 확보!",
        body: [
          "끈질긴 협상 끝에 하츠시마 숲 지역(아타미시 하츠시마 2번지 45)을 확보했습니다. 하츠시마 지역 개발이 한 단계 더 진전되었습니다.",
          "본 협회는 관광객 유치를 위해 이곳에 세계 각국의 미술품을 모은 ‘하츠시마 미술관’ 건설을 계획하고 있습니다.",
        ],
        images: [
          { src: "images/5.jpg", caption: "▲ 하츠시마 미술관 완공 예상도" },
        ],
      },
    },

    /* ===================== 2탄 페이지 ===================== */

    news_shrine: {
      type: "news",
      title: "하츠시마 신사 신주, 민박에서 흉기에 찔려 사망… 범인은 도주 중",
      date: "20XX/1/30 공개",
      body: [
        "아타미 시내의 한 민박에서 하츠시마 신사의 신주, 가미시마 모리요시(神島守生·71) 씨가 흉기에 찔려 사망하는 사건이 발생했다. 범인은 아직 체포되지 않았으며, 도주한 것으로 보인다.",
        "가미시마 씨는 혼자 숙박 중이었고, 동행자는 없었다.",
        "어제 1월 29일 오후 1시 30분경, 민박 직원이 청소를 위해 그의 방에 들어갔다가 복부에서 피를 흘리고 있는 가미시마 씨를 발견했다. 이후, 오후 12시 55분부터 민박 주변을 순찰 중이던 경찰관에게 신고가 접수됐다.",
        "시즈오카현 경찰은 오후 2시에 현장에 도착해 주변 수색을 진행했다. 검시 및 현장 감식 결과, 사망 시각은 오후 1시경으로 추정되며, 사용된 흉기는 칼날 길이 약 12cm, 손잡이를 포함한 두께 약 2cm 정도의 칼로 밝혀졌다.",
        "민박을 중심으로 반경 500m 이내의 도로·주택·수풀 등을 경찰견을 동원해 철저히 수색했으며, 인근 해역에서도 잠수부를 투입해 수색을 진행했지만 흉기는 발견되지 않았다.",
        "수사 결과, 민박 관계자나 다른 숙박객에 의한 범행은 불가능한 것으로 밝혀졌으며, 경찰은 범인 검거를 위한 제보를 요청하고 있다.",
      ],
      images: [
        { src: "images/news04-img01.jpg", caption: "▲ 사건이 발생한 민박" },
        { src: "images/news04-img02.jpg", caption: "▲ 피해자가 묵고 있던 방 (민박 HP 제공)" },
        { src: "images/news04-img03.jpg", caption: "▲ 흉기에 찔린 가미시마 모리요시 씨(왼쪽)" },
      ],
    },

    hp_shizen: {
      type: "hp",
      title: "자연을 지키는 회",
      logoImage: "images/nsa-logo-l.png",            // 좌상단 로고
      centerLogoImage: "images/nsa-logo-l.png",      // 가운데 큰 로고
      hero: {
        fullImage: "images/nsa-main-img.jpg",        // 히어로 통이미지(텍스트 포함)
      },
      blocks: [
        { heading: "신착 정보", lines: ["・회원 전용 페이지를 업데이트했습니다"] },
        { heading: "회원 소개" },
        {
          profile: {
            image: "images/nsa-kamishima.jpg",
            role: "회장",
            name: "가미시마 모리요시(かみしま もりお)",
            sub: "하츠시마 신사 신주",
          },
        },
        { plainImage: "images/nsa-kamishima-comment.png" },
        {
          heading: "회장의 말",
          lines: [
            "시간은 흘러가는 것입니다. 변화를 막을 수는 없습니다. 하지만 바꿔서는 안 되는 것도 분명 존재합니다.",
            "하츠시마의 신목(御神木)은 수령 2000년이 넘는다고 하며, 수많은 천재지변으로부터 우리를 지켜주었습니다.",
            "지금, 그 신목이 마음 없는 개발자들에 의해 베어질 위기에 놓여 있습니다.",
            "우리는 개발 추진 협회로부터 하츠시마의 신목을 지키기 위한 활동을 하고 있습니다.",
          ],
          image: "images/nsa-img01.jpg",
          caption: "▲ 하츠시마의 신목(御神木)",
        },
        {
          profile: {
            image: "images/nsa-iwasaki.jpg",
            role: "이사",
            name: "이와사키 쿠사미(いわさき くさみ)",
            sub: "수호신사(守海神社) 신주",
            quote: "어린 시절부터 사랑해온 아타미의 자연을 지켜나갑시다",
          },
        },
        {
          heading: "자연을 지키는 회 협력점",
          image: "images/nsa-img02.jpg",
          lines: [
            "협력점 입구에는, 아타미에 전해 내려오는 신사(神事)에 따라 사슴 머리를 효수하여 신에게 바치는 ‘가토(鹿頭·かとう)’를 두고 있습니다.",
            "자연을 지키는 회 협력점을 많이 애용해 주시기 바랍니다.",
          ],
        },
        {
          heading: "자연을 지키는 회 회원 여러분",
          members: {
            honorary: ["우나바라 나츠미(うなばら なつみ / 출판 편집)"],
            general: [
              "스즈키 코헤이(すずき こうへい / 정치가)",
              "오하시 타케노리(おおはし たけのり / 만주집)",
              "키시 료타(きし りょうた / 제조업)",
              "하나다 카오루(はなだ かおる / 만주집)",
              "시미즈 노리오(しみず のりお / 농가)",
              "야마모토 키요(やまもと きよ / 기념품점)",
              "세이부 네이차로(せいぶ ねいちゃろう / 찻집)",
            ],
          },
        },
      ],
      // 봉투를 5번 누르면 열리는 회원 전용 숨겨진 페이지
      secret: {
        heading: "우리는 지지 않습니다!",
        clueLines: [
          "얼마 전, 우리 협회에 괴문서가 도착했습니다.",
          "자세한 내용은 회원 전용 페이지에 게재합니다.",
        ],
        envelopeImage: "images/nsa-img03.jpg",
        // 봉투 위 "마크"에만 얹는 클릭 영역 (5번 클릭 → 숨겨진 페이지). 힌트는 표시 안 함
        markHotspot: { left: "44%", top: "40%", width: "15%", height: "19%" },
        clicks: 5,
        revealImage: "images/thread2-img03.jpg",   // 숨겨진 회원 페이지 통이미지
      },
    },

    news_suspect: {
      type: "news",
      title: "아타미 흉기 살인 사건 용의자 체포  행복초 소지 혐의",
      date: "20XX/1/30 공개",
      body: [
        "시즈오카현 경찰은 1월 29일 오후 1시 2분, ‘행복초’라는 꽃을 소지한 혐의로 무직의 미타 토라타(三田虎太·24) 용의자를 현행범으로 체포했다.",
        "체포가 이루어진 장소는 ‘자연을 지키는 회’ 회장인 가미시마 씨가 찔린 민박 앞이었으며, 가미시마 씨의 사망 시각으로부터 불과 2분 뒤였다.",
        "체포 당시 경찰은 아직 살인 사건 신고를 받지 못한 상태였기 때문에 사건이 드러난 이후 다시 조사가 진행되었지만, 흉기인 칼은 발견되지 않았고 살인에 대해서는 증거가 부족한 상태다.",
        "체포 당시 미타 용의자는 행복초 외에도 메모장과 스틱 풀 등을 소지하고 있었다고 한다.",
        "행복초는 아타미 주변에 자생하는 식물로 소지가 금지되어 있다. 미타 용의자는 입수 경로에 대해 침묵을 지키고 있다.",
        "시즈오카현 경찰은 미타 용의자와 살인 사건과의 관련성을 계속 조사 중이다.",
      ],
      images: [
        { src: "images/news05-img01.jpg", caption: "▲ 체포된 미타 토라타 용의자" },
      ],
    },

    page_flower: {
      type: "hp",
      title: "행복초 (幸せ草)",
      hero: { fullImage: "images/mitsuro-img.png" },   // 경고 통포스터(텍스트 포함)
      blocks: [
        {
          heading: "행복초란",
          lines: [
            "아타미 주변에서 자생하는 풀꽃이다. 생물로부터 얻는 영양분이 필요하기 때문에 대부분의 지역에서는 자라지 않는다.",
            "과거에는 “이 꽃을 섭취하면 말이 제대로 나오지 않게 된다”는 점에서 “로로로(ロロロ) = 세 개의 로(ロ) = 미츠로(ミツロ)”라고 불리기도 했다.",
            "신사 의식에 사용하기 위해 인공 재배가 시도된 적도 있었지만, 이 꽃은 땅속에서 “생물의 피”를 빨아들였을 때에만 붉은 꽃을 피우는 특성이 있다.",
            "그 때문에 개화시키려면 생물을 산 채로 묻어야 했고, 윤리적인 문제로 현재는 그런 방식은 행해지지 않고 있다.",
          ],
          image: "images/mitsuro-illust.jpg",
          caption: "▲ 약물이 뇌에 작용하는 원리",
        },
      ],
    },

    page_chart: {
      type: "hp",
      title: "사건 관계도",
      blocks: [
        { image: "images/soukanzu-a.jpg", caption: "▲ 클릭하면 크게 볼 수 있습니다" },
      ],
    },

    page_chart2: {   // 3탄 업데이트판 (카와토라 킨조·절도 지시 추가)
      type: "hp",
      title: "사건 관계도 (업데이트)",
      blocks: [
        { image: "images/soukanzu-b.jpg", caption: "▲ 클릭하면 크게 볼 수 있습니다" },
      ],
    },

    /* ===================== 3탄 페이지 ===================== */

    news_museum_theft: {
      type: "news",
      title: "하츠시마 미술관, 개관 전 도난 피해  약 3억 엔 상당의 미술품 5점 도난",
      date: "20XX/4/30 공개",
      body: [
        "내년 개관을 목표로 준비 중이던 하츠시마 미술관 창고에서 미술품이 도난당한 사실이 4월 29일 밝혀졌다. 도난당한 미술품은 5점이며, 총 가치는 약 3억 엔에 달하는 것으로 알려졌다.",
        "현재 범인은 특정되지 않았으며, 도난 경로나 수법도 아직 밝혀지지 않았다. 경찰은 범인 특정과 미술품 회수를 위해 수사를 진행 중이다.",
        "하츠시마 미술관 개관을 위한 준비는 일시적으로 중단되었지만, 관계자들은 신속한 대응과 복구를 통해 예정대로 개관을 목표로 하겠다고 밝혔다.",
      ],
      images: [
        { src: "images/5.jpg", caption: "▲ 하츠시마 미술관 완공 예상도" },
      ],
      gallery: {
        images: [
          "images/news06-img02.jpg",
          "images/news06-img03.jpg",
          "images/news06-img04.jpg",
          "images/news06-img05.jpg",
          "images/news06-img06.jpg",
        ],
        caption: "▲ 도난당한 5점의 미술품",
      },
    },

    news_theft_arrest: {
      type: "news",
      title: "하츠시마 미술관 도난 사건  ‘자연을 지키는 회’ 협력점 경영자들 체포, 혐의는 부인",
      date: "20XX/5/3 공개",
      body: [
        "건설 예정인 하츠시마 미술관 창고에서 미술품이 도난당한 사건과 관련하여, 시즈오카현 경찰은 5월 3일 아타미 시내의 음식점 경영자들을 체포했다.",
        "체포된 음식점들은 모두 ‘자연을 지키는 회’의 협력점들로, 도난당한 미술품들은 이 가게들 앞에 놓여 있었던 것으로 밝혀졌다. 체포된 경영자들은 현재 “사건에 관여하지 않았다”며 혐의를 완강히 부인하고 있다.",
        "현경은 증거 확보와 목격자 진술 조사 등을 병행하며 사건의 진상을 밝히기 위해 수사를 계속하고 있다.",
      ],
    },

    news_misarrest: {
      type: "news",
      title: "하츠시마 미술관 미술품 도난 사건  용의자 얼굴 공개, 오인 체포된 찻집 주인에게 사과",
      date: "20XX/5/5 공개",
      body: [
        "건설 예정인 하츠시마 미술관 창고에서 미술품이 도난당한 사건과 관련해, 시즈오카현 경찰은 5월 4일 용의자의 사진을 공개하고 제보를 요청했다.",
        "한편, 전날 체포됐던 찻집 주인이 오인 체포였던 사실이 밝혀져, 경찰은 공식적으로 사과했다. 해당 점주는 이미 석방됐지만, 경찰에 대한 비판이 이어지고 있다.",
        "경찰은 사건의 진상 규명과 진범 특정에 계속해서 수사를 진행 중이며, 용의자 사진 공개를 통해 새로운 정보가 들어오기를 기대하고 있다.",
      ],
      images: [
        { src: "images/news08-img01.jpg", caption: "▲ 새롭게 용의자로 발표된 이미지" },
      ],
    },

    hp_giin: {
      type: "hp",
      title: "시즈오카현 선거구 참의원 의원",
      blocks: [
        { heading: "의원 소개" },
        { image: "images/mp-img01.jpg" },
        { lines: ["쿠즈하 타카시(葛葉たかし) · 61세", "시즈오카 차 보급 연맹 회장, 시즈오카현 아웃도어 연맹 회장, 시즈오카현 연식야구 연맹 1급 심판원이라는 얼굴을 가지고 있으며, 다양한 직함과 경력을 지닌 것으로부터 ‘시즈오카의 곡예사’라 불리고 있다."] },
        { image: "images/mp-img02.jpg" },
        { lines: ["히라타 이사무(平田勇) · 57세", "시즈오카 겟코이 TV 보도부 기자 경력을 가지고 있으며, 3기 연속 당선. 시즈오카현민에게 강한 지지를 받고 있어 ‘이사밍’이라는 애칭으로 불리고 있다."] },
        { image: "images/mp-img03.jpg" },
        { lines: ["오야마 신이치(大山新一) · 45세", "28세 때 사고로 양다리를 움직일 수 없게 되어 휠체어 생활을 하게 됨. 이후 ‘누구도 버려지지 않는 사회’를 만들겠다는 호소를 내걸고 출마하여 의원에 당선되었다."] },
        { image: "images/mp-img04.jpg" },
        { lines: ["하야시 켄조(はやしけんぞう) · 55세", "하야카와 대학 정경학부를 거쳐 재팬 은행에 입행. 하야카와 대학 종합연구기구 객원교수를 맡고 있으며, 일본 재정학회에 소속되어 일본 경제의 위험성을 계속해서 호소하고 있다."] },
      ],
    },

    news_final_arrest: {
      type: "news",
      title: "하츠시마 미술관 미술품 도난 사건  지명수배 용의자 체포  오인 체포로 인한 불신 불식인가",
      date: "20XX/5/6 공개",
      body: [
        "건설 예정이던 하츠시마 미술관의 창고에서 미술품이 도난당한 사건으로 지명수배 중이던 카와토라 킨조(川寅金三) 용의자가, 어제 5월 5일 새벽 아타미 호텔 앞에서 신병이 확보되어 긴급 체포되었다.",
        "이 사건에서는 이전에 카페 점주를 오인 체포한 일이 있어 시즈오카현 경찰에 대한 불신이 높아지고 있었지만, 지명수배된 용의자가 불과 하루 만에 체포됨으로써 경찰의 신속한 대응을 평가하는 목소리도 나오고 있다.",
      ],
      images: [
        { src: "images/news09-img01.jpg", caption: "▲ 아타미 경찰서로 연행되는 카와토라 킨조 용의자" },
      ],
    },

    /* ===================== 4탄(에필로그) 페이지 ===================== */

    hp_shinmanju: {
      type: "hp",
      title: "신만주 (シンマンジュウ)",
      hero: { fullImage: "images/shin-main-img.jpg" },
      blocks: [
        { heading: "원재료" },
        { lines: [
          "팥, 밀가루, 설탕, 꿀, 물엿, 전분, 카라멜, 팽창제, 식용 식물성 유지, 유화제(대두 포함)",
          "6개입  1,200엔(세금 포함)",
        ] },
        { heading: "신착 정보", lines: ["・회원 전용 페이지를 업데이트했습니다"] },
        { heading: "신만주의 역사", lines: [
          "아타미에서 옛날부터 행해지는 신사(神事)에서 쓰이는 「신만주(神饅頭·しんまんじゅう)」를, 「シンマンジュウ」로 어레인지했습니다.",
        ] },
        { heading: "神事 (신사)",
          image: "images/shin-history-img.jpg",
          lines: ["예로부터 복장(装束)과 함께 그 내용이 전승되고 있습니다. 이 신에게 기도한 덕분에 아타미에서는 천재지변을 피할 수 있다고 합니다."] },
        { plainImage: "images/shin-title04.png" },
        { image: "images/shin-shinmotsu-img.jpg" },
        { lines: [
          "아타미에서만 자생하는 꽃 「미츠로」를 넣은 공물용 만주도 판매하고 있습니다.",
          "",
          "※ 이것은 식용이 아닙니다. 절대 먹지 마세요.",
          "※ 신사에 종사하는 분께만 판매가 허가된 것입니다. 신사 복장(装束)을 가진 분께만 판매합니다.",
          "",
          "2개입  20,000엔(세금 포함)",
        ] },
        { posterSecret: {
            image: "images/shin-poster.jpg",
            // 여자아이 쇄골(자연을 지키는 회 문양)에 얹는 투명 클릭 영역. 5번 클릭 → 숨겨진 기록
            hotspot: { left: "19%", top: "45%", width: "16%", height: "9%" },
            clicks: 5,
        } },
      ],
    },
  },
};
