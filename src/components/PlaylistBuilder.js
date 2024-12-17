import React from "react";
import "./PlaylistBuilder.css";
import SongContainer from "../containers/SongContainer.js";

export default function PlaylistBuilder({ 
        newPlaylistName, 
        handlePlaylistNameChange, 
        newPlaylist, 
        setNewPlaylist ,
        onSubmitPlaylist
    }) {

    const playlistItems = newPlaylist.map((song, index) => (
        <li key={index}>
            <SongContainer spotifyId={song.spotifyId} songName={song.songName} album={song.album} artist={song.artist} setNewPlaylist={setNewPlaylist} plusOperator={false} />
        </li>
    ));

    return (<div className="playlistBuilder">
        <form className="playlistNameInput" onSubmit={onSubmitPlaylist}>
            <input 
                className="playlistName"
                type="text" 
                name="search" 
                placeholder="Enter Playlist Name..."
                maxLength={30}
                value={newPlaylistName}
                onChange={handlePlaylistNameChange}
            />
            <svg className="add" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
        </form>

        <ul className="playlistSongs">
            {newPlaylist.length > 0 ? playlistItems : <li>Selected songs for your new playlist will appear here. </li>}
        </ul>
    </div>);
}
