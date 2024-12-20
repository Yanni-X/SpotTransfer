from ytmusicapi import YTMusic
from spotify import get_all_tracks, get_playlist_name

ytmusic = YTMusic("browser.json")

playlist_link = "https://open.spotify.com/playlist/2SqnCGLB0l57EgNWGvWgTP"
tracks = get_all_tracks(playlist_link, "IN")
# print(tracks[0][list(tracks[0].keys())[0]])


def get_video_ids(tracks):
    video_ids = []
    for track in tracks:
        search_string = f"{track['name']} {track['artists'][0]}"
        print(search_string)
        video_id = ytmusic.search(search_string, filter="songs")[0]["videoId"]
        video_ids.append(video_id)
    return video_ids


name = get_playlist_name(playlist_link)
video_ids = get_video_ids(tracks)

ytmusic.create_playlist(name, "", "UNLISTED", video_ids)