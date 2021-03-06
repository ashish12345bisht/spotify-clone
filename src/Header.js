import React from 'react'
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai'
import { useDataLayerValue } from './DataLayer'

function Header() {
    const [{user}] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header-left">
                <AiOutlineSearch/>
                <input
                    placeholder="Search for Artists, Songs or Albums"
                    type="text"
                />
            </div>
            <div className="header-right">
                <img className="user-image"
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
