import React from 'react'
import './Footer.css'
import {AiOutlinePlayCircle, AiFillStepForward, AiFillStepBackward} from 'react-icons/ai'
import {FiRepeat} from 'react-icons/fi'
import {BiShuffle, BiVolumeMute} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img 
                    className="album-cover"
                    src="https://pbs.twimg.com/profile_images/1218209106491793408/ZZ7zbeWL.jpg" 
                    alt=""
                />
                <div className="song-info">
                    <h4>Eminem</h4>
                    <p>Lose Yourself</p>
                </div>

            </div>
            <div className="footer-center">
                <BiShuffle className="footer-icons-green"/>
                <AiFillStepBackward className="footer-icons"/>
                <AiOutlinePlayCircle className="footer-icons footer-icons-play"/>
                <AiFillStepForward className="footer-icons"/>
                <FiRepeat className="footer-icons-green"/>
            </div>
            <div className="footer-right">
                <MdPlaylistAdd/>
                <BiVolumeMute/>
                <input type="range" min="1" max="100" className="slider"/>
            </div>
        </div>
    )
}

export default Footer
