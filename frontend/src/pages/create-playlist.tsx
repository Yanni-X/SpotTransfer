import { Footer } from "@/components/landing/footer";
import GetHeaders from "@/components/create-playlist/get-headers";
import { PlaylistProvider } from "@/context/playlist-context";

export default function CreatePlaylist() {
    return (
        <PlaylistProvider>
            <main className="flex w-screen flex-col items-center justify-center">
                <div className="mb-10">
                    <GetHeaders />
                </div>
                <h2 className="my-10 text-center mb-3 text-2xl font-bold mx-auto relative z-20 py-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white w-full">
                    Create Playlist
                </h2>

                <Footer />
            </main>
        </PlaylistProvider>
    );
}
