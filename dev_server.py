"""Servidor de desarrollo del frontend.

Replica las URLs limpias de vercel.json (/recomend -> recomend.html)
para que la navegacion funcione igual que en produccion.

Uso: python3 dev_server.py [puerto]
"""
import http.server
import json
import os
import sys

FRONTEND = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'frontend')
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

with open(os.path.join(FRONTEND, 'vercel.json'), encoding='utf-8') as f:
    _cfg = json.load(f)
ROUTES = {}
for r in _cfg.get('rewrites', []):
    ROUTES[r['source']] = r['destination']
for r in _cfg.get('routes', []):
    if 'src' in r and 'dest' in r:
        ROUTES[r['src'].lstrip('^').rstrip('$')] = r['dest']


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND, **kwargs)

    def translate_path(self, path):
        clean = path.split('?')[0].rstrip('/')
        if clean in ROUTES:
            path = ROUTES[clean]
        elif clean and '.' not in os.path.basename(clean) and \
                os.path.exists(os.path.join(FRONTEND, clean.lstrip('/') + '.html')):
            path = clean + '.html'
        return super().translate_path(path)


if __name__ == '__main__':
    with http.server.ThreadingHTTPServer(('', PORT), CleanURLHandler) as httpd:
        print(f'Frontend en http://localhost:{PORT} (rutas limpias de vercel.json activas)')
        httpd.serve_forever()
