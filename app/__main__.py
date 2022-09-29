#!/usr/bin/env python3
from aiohttp import web
from os import mkdir
from datetime import datetime
import logging 

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

fh = logging.FileHandler()
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






