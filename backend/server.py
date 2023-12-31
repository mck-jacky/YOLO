import signal
from flask import Flask, request
from flask_cors import CORS
from json import dumps

# Local File Imports
from .auth import auth_logout, auth_login, auth_register

# Change Server Port Here
import src.config

APP = Flask(__name__)
CORS(APP)

APP.config['TRAP_HTTP_EXCEPTIONS'] = True
APP.register_error_handler(Exception, defaultHandler)


## Test Route ##################################################################


@APP.route("/echo", methods=['GET'])
def echo():
     data = request.get_json()

    if data == 'echo':
        raise InputError(description='Cannot echo "echo"')

    return dumps({
        'data': data
    })


def map():
    data = request.get_json()

    return dumps({
        'map': data.map
    })