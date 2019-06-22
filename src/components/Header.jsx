import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ({ navOpen, setNavOpen, navMinimaized }) => {
    return (
        <div className="header">
            <Link to={"/dashboard"} className="logo-holder">
                {navMinimaized ? (<img src="../boss_logo_small.svg" alt="logo" />) : (<img src="../boss.svg" alt="logo" />)}

            </Link>
            <div className="toggle-nav" onClick={() => setNavOpen(!navOpen)}>
                <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
            </div>
        </div>
    )
}

export default Header