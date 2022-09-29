#!/usr/bin/env python3
from aiohttp import web
from os import mkdir
from datetime import datetime
from pathlib import Path
import logging
import sys

"""
Logging Stuff
"""

try:
    mkdir(".logs")
except FileExistsError:
    pass

fp = f'./.logs/{datetime.now()}.log'.replace(' ', '-')

if sys.platform.lower() == 'win32':
    fp = fp.replace(':', '.')


logger = logging.getLogger()
logger.setLevel(logging.DEBUG) # we want to not filter messages yet

fh = logging.FileHandler(fp)
fh.setLevel(logging.DEBUG)

ch = logging.StreamHandler()
ch.setLevel(logging.INFO) # we don't want to clog up the console

fmt = logging.Formatter('[%(asctime)s] [%(name)s] [%(levelname)s] : %(message)s')

ch.setFormatter(fmt)
fh.setFormatter(fmt)

logger.addHandler(ch)
logger.addHandler(fh)

"""
aiohttp stuff
"""

routes = web.RouteTableDef()

@web.middleware
async def static_server(request, handler):

    rel_fp = Path(request.path).relative_to('/')
    fp = Path('./static') / rel_fp

    if fp.is_dir(): # somebody is looking for /
        fp /= 'index.html'

    if not fp.exists():
        return await handler(request)

    return web.FileResponse(fp)

if __name__ == '__main__':
    app = web.Application(middlewares=[static_server])
    app.add_routes(routes)
    web.run_app(app, port=8000)




