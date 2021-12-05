import React from 'react'
import './Sidebar.css'
import {HiHome} from 'react-icons/hi'
import {HiOutlineSearch} from 'react-icons/hi'
import {BiLibrary} from 'react-icons/bi'
import SidebarOption from './SidebarOption'
import {useDataLayerValue} from './DataLayer'

function Sidebar() {
    const [{playlists},dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img 
                className="sidebar-logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                alt="spotify logo"
            />
            <SidebarOption title="Home" icon={<HiHome className="sidebarOptionIcons"/>}/>
            <SidebarOption title="Search" icon={<HiOutlineSearch className="sidebarOptionIcons"/>}/>
            <SidebarOption title="Your Library" icon={<BiLibrary className="sidebarOptionIcons"/>}/>
            
            <br/>
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map((playlist)=>{
                <SidebarOption title={playlist.name} />
            })}
        </div>
    )
}

export default Sidebar
