from flask import Flask, request, jsonify
from flask_cors import CORS
from googleapiclient.discovery import build

app = Flask(__name__)
CORS(app)  # allow requests from browser extension

# Initialize YouTube API
YOUTUBE_API_KEY = "YOUR_YOUTUBE_API_KEY"  # Get this from Google Cloud Console
youtube = build("youtube", "v3", developerKey=YOUTUBE_API_KEY)

@app.route("/check", methods=["POST"])
def check_video():
    data = request.get_json()
    title = data.get("title", "")
    #url = data.get("url")
    
    # Checks if "AI" is in the title
    is_ai = "ai" in title.lower()
    
    # check sound.venv

    # check video

    # check bot comments

    # could also check if comments say its Ai

    return jsonify({"is_ai": is_ai}) #----change to return percentage scale red to green


if __name__ == "__main__":
    app.run(port=5000)
