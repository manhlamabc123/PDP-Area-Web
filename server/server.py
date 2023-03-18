from flask import Flask

app = Flask(__name__)

@app.route("/index")
def hello_world():
    return {"name": ["Manh"]}

if __name__ == '__main__':
    app.run(debug=True)