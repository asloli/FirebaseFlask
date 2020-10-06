#from industriousWoman import x
from flask import Flask, render_template, url_for, redirect, request
from flask import send_from_directory
from flask_socketio import SocketIO, emit
import string
import random
import os

app = Flask(__name__ ,
            template_folder='templates',
            static_folder='static',
            static_url_path='')

app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')
    
#替所有服務器隨機產生字串
@socketio.on('getToken')
def getToken():
	emit("receiveToken","".join(random.sample(charList, 10)).replace(" ",""))

if __name__ == '__main__':
    charList = []
    for i in range(0, 200):
        charList.append(chr(i))
    paintStack = []
    socketio.run(app, host = '127.0.0.1', port = 8888, debug=True)