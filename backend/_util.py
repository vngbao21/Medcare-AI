import base64

def encode(data):
    return base64.b64encode(data.encode())

def decode(data):
    return base64.b64decode(data).decode()