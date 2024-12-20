import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os

from dotenv import load_dotenv
load_dotenv()

# Replace with your credentials
client_id = os.getenv('SPOTIPY_CLIENT_ID')
client_secret = os.getenv('SPOTIPY_CLIENT_SECRET')
redirect_uri = 'http://localhost:8888/callback'  # Your redirect URI

# # Initialize SpotifyOAuth
# sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=client_id,client_secret=client_secret,redirect_uri=redirect_uri,scope="user-library-read"))

# # Get a playlist's tracks (public or user-owned)
# playlist_id = 'YOUR_PLAYLIST_ID'
# results = sp.playlist_tracks(playlist_id)
# tracks = results['items']

# # Print the tracks
# for idx, track in enumerate(tracks, 1):
#     track_name = track['track']['name']
#     artist_name = track['track']['artists'][0]['name']
#     print(f"{idx}. {track_name} by {artist_name}")

print(client_id)
print(client_secret)