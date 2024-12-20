from ytmusicapi import YTMusic
from spotify import get_all_tracks, get_playlist_name

ytmusic = YTMusic("browser.json")

playlist_link = "https://open.spotify.com/playlist/2OFALaBheaMBhD8KBalULN?si=Rj8XF6xaS02iSUXmzS6bnA"
tracks = get_all_tracks(playlist_link, "IN")
name = get_playlist_name(playlist_link)

ytm_playlist_id = ytmusic.create_playlist("test2", "test description")