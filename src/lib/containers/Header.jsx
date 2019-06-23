import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserPreview from '../components/User/UserPreview';


const Header = ({ navOpen, setNavOpen, navMinimaized, headerData }) => {
    return (
        <nav className="header">
            <div className="toggle-nav" onClick={() => setNavOpen(!navOpen)}>
                <FontAwesomeIcon icon={['fas', 'bars']} size="lg" />
            </div>
            <Link to={"/dashboard"} className="logo-holder">
                {navMinimaized ? (<img src={headerData.logosmall} alt="small logo" />) : (<img src={headerData.logo} alt="main-logo" />)}

            </Link>
            <UserPreview data={headerData.dropdownData} username={headerData.username} avatar={headerData.avatar} />
        </nav>
    )
}

export default Header