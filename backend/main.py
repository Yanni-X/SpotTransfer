from flask import Flask, request

from ytm import create_ytm_playlist

app = Flask(__name__)

@app.route('/create', methods=['POST'])
def create_playlist():
    data = request.get_json()
    playlist_link = data.get('playlist_link')
    auth_headers = data.get('auth_headers')
    
    try:
        create_ytm_playlist(playlist_link, auth_headers)
        return {"message": "Playlist created successfully!"}, 200
    except Exception as e:
        return {"message": str(e)}, 500

if __name__ == '__main__':
    app.run(port=8080)