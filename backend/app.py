import os
import _api
import _util

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
data = {'prompt': "",'response': "",}

@app.route('/api', methods=['POST'])
def get_variable():
    prompt = request.form.get('prompt')
    data['prompt'] = _util.decode(prompt)
    return _api.get_from_openAI(data)

if __name__ == '__main__':
    print('Running API')
    app.run(host="localhost", port=8000)
    