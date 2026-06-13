from flask import Flask, render_template, request
import requests

app = Flask(__name__, template_folder='.')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask", methods=['POST'])
def ask_ai():
    data = request.get_json()
    try:
        # Sedha JSON bhej rahe hain n8n ko
        res = requests.post("https://prachitee10.app.n8n.cloud/webhook/37030a1e-7f1a-4a38-bff2-b73a353212c4", 
                            json={"query": data.get("query")}, timeout=30)
        return res.text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
