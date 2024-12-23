import { usePlaylist } from "@/context/playlist-context";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";

export default function InputFields() {
    const [authHeaders, setAuthHeaders] = useState("");

    const { playlistUrl, setPlaylistUrl } = usePlaylist();
    const [isValidUrl, setIsValidUrl] = useState(true);

    const validateUrl = (url: string) => {
        const pattern = /^(?:https?:\/\/)?open\.spotify\.com\/playlist\/.+/;
        return pattern.test(url);
    };

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value;
        setPlaylistUrl(url);
        setIsValidUrl(validateUrl(url) || url === "");
    };

    async function clonePlaylist() {
        const body = {
            playlist_link: playlistUrl,
            auth_headers: authHeaders,
        };

        const res = await fetch(`${import.meta.env.VITE_API_URL}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        if (res.ok) {
            console.log(data);
        } else {
            console.error(data);
        }
    }

    return (
        <>
            <div className="w-full flex items-center justify-around">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <div className="space-y-1">
                        <h1 className="text-lg font-semibold">
                            Paste headers here
                        </h1>
                        <p className="text-sm text-gray-500"></p>
                    </div>
                    <Textarea
                        placeholder="Paste your headers here"
                        value={authHeaders}
                        onChange={(e) => setAuthHeaders(e.target.value)}
                        id="auth-headers"
                        className="w-[40vw] h-[50vh]"
                    />
                </div>
                <div className="flex flex-col gap-3 items-start justify-center">
                    <div className="space-y-1">
                        <h1 className="text-lg font-semibold">
                            Paste Spotify playlist URL here
                        </h1>
                        <div className="flex items-center gap-2">
                            <FaExclamationCircle />
                            <p className="text-sm text-gray-500">
                                Make sure the playlist is public
                            </p>
                        </div>
                    </div>
                    <Input
                        placeholder="Paste your playlist URL here"
                        value={playlistUrl}
                        onChange={handleUrlChange}
                        id="playlist-name"
                        className={`w-full ${
                            !isValidUrl ? "border-red-500" : ""
                        }`}
                    />
                    {!isValidUrl && (
                        <p className="text-red-500 text-sm">
                            Please enter a valid Spotify playlist URL
                        </p>
                    )}
                    <Button
                        disabled={
                            !isValidUrl ||
                            !authHeaders ||
                            playlistUrl.trim() === ""
                        }
                        className="w-full"
                        onClick={clonePlaylist}
                    >
                        Clone Playlist
                    </Button>
                </div>
            </div>
        </>
    );
}
