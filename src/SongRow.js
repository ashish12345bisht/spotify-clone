import React from 'react'
import './SongRow.css'

function SongRow({track}) {
    return (
        <div className="song-row">
            <img
                className="songRow-album"
                src={track.album.images[0].url}
                alt={track.album.name}
            />
            <div className="songRow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artists)=>artists.name)}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
