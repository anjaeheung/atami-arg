"""로컬 미리보기용 멀티스레드 정적 서버 (단일 스레드 http.server의 커넥션 블로킹 회피)."""
import os
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

port = int(sys.argv[1]) if len(sys.argv) > 1 else 5188
root = os.path.dirname(os.path.abspath(__file__))


class Handler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, *args):
        pass


handler = partial(Handler, directory=root)
ThreadingHTTPServer(("127.0.0.1", port), handler).serve_forever()
