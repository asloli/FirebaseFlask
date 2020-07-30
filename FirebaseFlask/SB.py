#測試 Web API 效果的程式檔
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

@app.route('/qrcode')
def qrcode():
    return render_template('QRcode_test.html')


if __name__ == '__main__':
    socketio.run(app, host = '127.0.0.1', port = 8888, debug=True)