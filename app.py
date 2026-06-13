from flask import Flask, render_template, request, send_from_directory
import requests
import os

app = Flask(__name__, template_folder='.', static_folder='.')

N8N_CHATBOT_URL = "https://prachitee10.app.n8n.cloud/webhook/37030a1e-7f1a-4a38-bff2-b73a353212c4"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask", methods=['POST'])
def ask_ai():
    user_query = request.form.get("q", "")
    try:
        response = requests.post(N8N_CHATBOT_URL, json={"query": user_query}, timeout=30)
        return response.text
    except Exception as e:
        return f"Error: {str(e)}"

@app.route("/script.js")
def serve_js():
    return send_from_directory(".", "script.js", mimetype='application/javascript')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
