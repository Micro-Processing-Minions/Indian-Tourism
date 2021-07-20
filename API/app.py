from flask import Flask, make_response
from flask_cors import CORS
from scrape import fetch_india, fetch_location
from flask import request
import os
app = Flask(__name__)
CORS(app)

@app.route("/")
def fetchIndia():
    resp = make_response('Hello, World!');
    resp.set_cookie('same-site-cookie', 'foo', samesite='Lax');
    resp.headers.add('Set-Cookie','cross-site-cookie=bar; SameSite=None; Secure')
    return fetch_india()


@app.route('/add/new', methods=['GET', 'POST'])
def user():
    resp = make_response('Hello, World!');
    resp.set_cookie('same-site-cookie', 'foo', samesite='Lax');
    resp.headers.add('Set-Cookie','cross-site-cookie=bar; SameSite=None; Secure')
    email = request.args["email"] or ''
    phone = request.args["phone"] or ''
    name = request.args["name"] or ''
    msg = request.args["msg"] or ''
    f = open('saves.txt', 'a+')
    f.write(":".join([email, phone, name, msg])+'\n')
    f.close()
    return 'success'


@ app.route("/<location>")
def fetchLocation(location):
    resp = make_response('Hello, World!');
    resp.set_cookie('same-site-cookie', 'foo', samesite='Lax');
    resp.headers.add('Set-Cookie','cross-site-cookie=bar; SameSite=None; Secure')
    if 'india' in location:
        return fetch_india()
    elif location+'.txt' in os.listdir('./cached'):
        with open('./cached/'+location+'.txt', 'r') as f:
            return f.read()
    else:
        with open('./cached/'+location+'.txt', 'w') as f:
            txt = fetch_location(location)
            f.write(txt)
            return txt

# http://127.0.0.1:5000/add/new?email=asddsa&phone=&msg=hhelo world&name=rex
# / india
# /loc location info
