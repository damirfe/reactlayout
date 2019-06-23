import React from 'react'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationButton = ({ element, navMinimaized }) => {
    return (
        <NavLink to={element.url} className="sidebar-item" key={element.name} activeClassName="active-link">
            {element.icon ? <FontAwesomeIcon color="#2f353" icon={['fas', `${element.icon}`]} /> : null}
            <p className={navMinimaized ? "hidden" : ""}>{element.name}</p>
        </NavLink>
    )
}

export default NavigationButton