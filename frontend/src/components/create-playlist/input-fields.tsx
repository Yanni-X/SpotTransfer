import { usePlaylist } from "@/context/playlist-context";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function InputFields() {
    const [authHeaders, setAuthHeaders] = useState("");
    const [serverOnline, setServerOnline] = useState(false);
    const [isValidUrl, setIsValidUrl] = useState(true);
    const [dialogOpen, setdialogOpen] = useState(false);

    const { playlistUrl, setPlaylistUrl } = usePlaylist();

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

        setdialogOpen(true);
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
            setdialogOpen(false);
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

                <div className="flex flex-col gap-12 items-start justify-center">
                    <div className="flex flex-col w-full gap-3 items-center justify-center">
                        <div className="space-y-1 w-full">
                            <h1 className="text-lg font-semibold w-full">
                                Test Connection
                            </h1>
                            {serverOnline && (
                                <p className="text-green-500 text-sm">
                                    Connection Successful
                                </p>
                            )}
                        </div>
                        <Button
                            className="w-full"
                            onClick={async () => {
                                try {
                                    const res = await fetch(
                                        `${import.meta.env.VITE_API_URL}/`,
                                        {
                                            method: "GET",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                        }
                                    );
                                    const data = await res.json();
                                    if (res.ok) {
                                        setServerOnline(true);
                                        console.log(data);
                                    }
                                } catch (error) {
                                    alert(
                                        "Connection error. Please try again: " +
                                            error
                                    );
                                }
                            }}
                        >
                            Test Connection
                        </Button>
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
                        <AlertDialog
                            open={dialogOpen}
                            onOpenChange={setdialogOpen}
                            className="max-h-full max-w-full"
                        >
                            <AlertDialogTrigger asChild>
                                <Button
                                    disabled={
                                        !isValidUrl ||
                                        !authHeaders ||
                                        playlistUrl.trim() === "" ||
                                        !serverOnline
                                    }
                                    className="w-full"
                                    onClick={clonePlaylist}
                                >
                                    Clone Playlist
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Fetching playlist...
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This may take a few minutes
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </>
    );
}
