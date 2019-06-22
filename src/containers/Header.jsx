import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserPreview from '../components/UserPreview';


const Header = ({ navOpen, setNavOpen, navMinimaized }) => {
    return (
        <nav className="header">
            <Link to={"/dashboard"} className="logo-holder">
                {navMinimaized ? (<img src="../boss_logo_small.svg" alt="logo" />) : (<img src="../boss.svg" alt="logo" />)}

            </Link>
            <div className="toggle-nav" onClick={() => setNavOpen(!navOpen)}>
                <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
            </div>
            <UserPreview username="Damir Ivanic" avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU54ExC4_YTchKmnVahe9S7BB6tWYb_bv03VnkfD1O5MONGQK"/>
        </nav>
    )
}

export default Header