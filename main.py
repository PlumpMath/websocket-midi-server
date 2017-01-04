from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin

LOCAL = True

app = Flask(__name__)
socketio = SocketIO(app)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

@app.route('/main_site')
def main_site():
    return render_template('content.html', kind='MAIN_SITE')

@app.route('/satellite')
def satellite():
    return render_template('content.html', kind='SATELLITE')

@socketio.on('to_server')
def handle_my_custom_event(json):
    print('received json: ' + str(json))
    emit('to_client', json, broadcast=True)

if LOCAL and __name__ == "__main__":
    socketio.run(app, debug=True)

# To deploy: set LOCAL=False, then:
# gunicorn --worker-class eventlet -w 1 main:app
