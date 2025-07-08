# SpotTransfer

## Overview

A tool to transfer Spotify playlists to YouTube Music.

## Star History

<a href="https://www.star-history.com/#Pushan2005/SpotTransfer&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Pushan2005/SpotTransfer&type=Date" />
 </picture>
</a>

## Usage

Follow the instructions at https://spot-transfer.vercel.app

### Self Host

1. Clone the repository
2. Navigate to the `backend` directory in the terminal
    ```bash
    cd backend/
    ```
3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Create an `.env` file in the `backend` directory and add the following: (you can get the client id and secret from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/))
    ```env
    SPOTIPY_CLIENT_ID=your_spotify_client_id
    SPOTIPY_CLIENT_SECRET=your_spotify_client_secret
    FRONTEND_URL=http://localhost:5173
    ```
5. Create an `.env` file in the `frontend` directory and add the following:
    ```env
    VITE_API_URL=http://localhost:8080
    ```
6. Navigate to the `frontend` directory in the terminal and run the following to install dependencies:
    ```bash
    npm install
    ```
