import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import {AiFillPlayCircle, AiOutlineHeart} from 'react-icons/ai'
import {BsThreeDots} from 'react-icons/bs'
import SongRow from './SongRow'

function Body({spotify}) {
    const [{discover_weekly}] = useDataLayerValue();
    console.log(discover_weekly);
    return (
        <div className="body">
            <Header/>
            <div className="body-info">
                <img
                    src={discover_weekly?.images[0].url}
                    alt={discover_weekly?.name}
                />
                <div className="body-info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discovery Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <AiFillPlayCircle className="play-icons"/>
                    <AiOutlineHeart className="play-icons"/>
                    <BsThreeDots className="play-icons"/>
                </div>
                {discover_weekly?.tracks.items.map((item)=>{
                    return <SongRow track={item.track}/>
                })}
            </div>
        </div>
    )
}

export default Body
