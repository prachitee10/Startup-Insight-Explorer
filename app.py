from flask import Flask, render_template, request
import requests

app = Flask(__name__, template_folder='.')
N8N_URL = "https://prachitee10.app.n8n.cloud/webhook/37030a1e-7f1a-4a38-bff2-b73a353212c4"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask", methods=['POST'])
def ask_ai():
    query = request.json.get('q')
    try:
        # Sedha POST request
        res = requests.post(N8N_URL, json={"query": query}, timeout=30)
        return res.text
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
