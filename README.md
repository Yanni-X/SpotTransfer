# SpotTransfer

## 🚀 Overview

SpotTransfer lets you instantly migrate any Spotify playlist to YouTube Music—no manual copy-pasting needed.

## ✨ Star History

<a href="https://www.star-history.com/#Pushan2005/SpotTransfer&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date" />
 </picture>
</a>

## 🎯 Quick Start

Prerequisites:

-   Python 3.8+
-   Node.js 14+ (or pnpm)
-   Spotify Developer account (client ID & secret)

Clone and install both backend and frontend:

```bash
git clone https://github.com/Pushan2005/SpotTransfer.git
cd SpotTransfer
```

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend/
    ```
2. Install the Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Create an `.env` file and add your Spotify credentials (get these from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)):
    ```env
    SPOTIPY_CLIENT_ID=<your_spotify_client_id>
    SPOTIPY_CLIENT_SECRET=<your_spotify_client_secret>
    FRONTEND_URL=http://localhost:5173
    ```
4. Start the Flask server:
    ```bash
    python3 main.py
    ```
    Sometimes, using `python3` might not work depending on how python is configured on your system. Running `py main.py` usually works in such situations.

### Frontend Setup

1. In the `frontend` directory, create an `.env` file with the following content:
    ```env
    VITE_API_URL=http://localhost:8080
    ```
2. Install the frontend dependencies:
    ```bash
    npm install
    ```
3. Run the dev server for the frontend:
    ```bash
    npm run dev
    ```
    If you wish, you can build the app and serve it as well but the dev server works just fine for now.
4. Open your browser and go to `http://localhost:5173`.

## 🐳 Docker

If you are already familiar with docker, then self hosting SpotTransfer will become much simpler.

1. Clone the repo.
    ```bash
    git clone https://github.com/Pushan2005/SpotTransfer.git
    cd SpotTransfer
    ```
2. Create an `.env` file and add your Spotify credentials (get these from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/)):
    ```env
    SPOTIPY_CLIENT_ID=<your_spotify_client_id>
    SPOTIPY_CLIENT_SECRET=<your_spotify_client_secret>
    ```
3. Build and run both containers
    ```bash
    docker compose up -d --build
    ```
4. Open your browser and go to `http://localhost:5173`.