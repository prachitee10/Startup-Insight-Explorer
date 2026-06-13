from flask import Flask, render_template, request
import requests

app = Flask(__name__)

N8N_CHATBOT_URL = "https://prachitee10.app.n8n.cloud/webhook/37030a1e-7f1a-4a38-bff2-b73a353212c4"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/ask")
def ask_ai():
    user_query = request.args.get("q", "")
    if not user_query:
        return "Please provide a question."
    try:
        response = requests.get(f"{N8N_CHATBOT_URL}?q={user_query}", timeout=30)
        return response.text
    except Exception as e:
        return f"Error connecting to AI Assistant: {str(e)}"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)