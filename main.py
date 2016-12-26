from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin

LOCAL = False

app = Flask(__name__)
socketio = SocketIO(app)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@socketio.on('to_server')
def handle_my_custom_event(json):
    print('received json: ' + str(json))
    emit('to_client', json, broadcast=True)

if LOCAL and __name__ == "__main__":
    socketio.run(app, debug=False)

# To deploy: set LOCAL=False, then:
# gunicorn --worker-class eventlet -w 1 main:app
