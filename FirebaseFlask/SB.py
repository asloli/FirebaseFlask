#from industriousWoman import x
from flask import Flask, render_template
from flask import send_from_directory
from flask_socketio import SocketIO #取得js的套件

app = Flask(__name__ ,
            template_folder='templates',
            static_folder='static',
            static_url_path='')

app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/test1')
def test1():
    return render_template('test_001.html')
@app.route('/qrcode')
def qrcode():
    return render_template('QRcode_test.html')
@app.route("/page_1")
def page_1():
    return render_template("page_1.html")
@app.route("/page_2")
def page_2():
    return render_template("page_2.html")
@app.route("/page_3")
def page_3():
    return render_template("page_3.html")
@app.route("/page_4")
def page_4():
    return render_template("page_4.html")
    
#替所有服務器隨機產生字串
@socketio.on('getToken')
def getToken():
	emit("receiveToken","".join(random.sample(charList, 10)).replace(" ",""))

if __name__ == '__main__':
    socketio.run(app, host = '127.0.0.1', port = 8888, debug=True)