import os
from bottle import response,route, run

system_name = os.uname().nodename

@route('/')
def GetPython():
    response.headers['Access-Control-Allow-Origin'] = '*'
    result = { 'hostname': system_name}
    return result

run(host='0.0.0.0', port=3001)
