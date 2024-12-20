from spotify import get_all_tracks

playlist_link = "https://open.spotify.com/playlist/2OFALaBheaMBhD8KBalULN?si=Rj8XF6xaS02iSUXmzS6bnA"
tracks = get_all_tracks(playlist_link, "IN")

print(len(tracks))
print(tracks[0])
print(tracks[-1])