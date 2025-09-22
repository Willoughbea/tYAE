from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from browser extension

@app.route("/check", methods=["POST"])
def check_video():
    data = request.get_json()
    title = data.get("title", "")
    #url = data.get("url")
    
    # Checks if "AI" is in the title
    is_ai = "ai" in title.lower()
    
    # check sound

    # check video

    # check bot comments

    # could also check if comments say its Ai

    return jsonify({"is_ai": is_ai}) #----change to return percentage scale red to green


if __name__ == "__main__":
    app.run(port=5000)
