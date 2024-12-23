import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PlaylistProvider } from "@/context/playlist-context";

import "./index.css";
import App from "./pages/App.tsx";
import CreatePlaylist from "./pages/create-playlist.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PlaylistProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/create-playlist"
                        element={<CreatePlaylist />}
                    />
                </Routes>
            </BrowserRouter>
        </PlaylistProvider>
    </StrictMode>
);
