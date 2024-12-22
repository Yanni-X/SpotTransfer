from ytmusicapi import YTMusic
import ytmusicapi
from spotify import get_all_tracks, get_playlist_name


def get_video_ids(ytmusic,tracks):
    video_ids = []
    for track in tracks:
        search_string = f"{track['name']} {track['artists'][0]}"
        print(search_string)
        video_id = ytmusic.search(search_string, filter="songs")[0]["videoId"]
        video_ids.append(video_id)
    return video_ids


def create_ytm_playlist(playlist_link, headers):
    ytmusicapi.setup(filepath="header_auth.json", headers_raw=headers)
    ytmusic = YTMusic("header_auth.json")
    tracks = get_all_tracks(playlist_link, "IN")
    name = get_playlist_name(playlist_link)
    video_ids = get_video_ids(ytmusic, tracks)
    
    ytmusic.create_playlist(name, "", "UNLISTED", video_ids)

