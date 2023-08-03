import base64

with open('large_code_file.js', 'rb') as file:
    content = file.read()
    base64_content = base64.b64encode(content).decode('utf-8')
