import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, navMinimaized, setNavMinimaized, navigation }) => {
    return (

        <aside className={(navClassGenerator(open, navMinimaized))}>
            <div className="retract-sidebar sidebar-item" onClick={() => setNavMinimaized(!navMinimaized)}>
                {navMinimaized ? (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-right']} size="lg" />)
                    : (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-left']} size="lg" />)}
            </div>
            {navigation.items.map(element => {
                return <NavLink to={element.url} className="sidebar-item" key={element.name} activeClassName="active-link">
                    <FontAwesomeIcon color="#2f353" icon={['fas', `${element.icon}`]} />
                    <p>{!navMinimaized ? element.name : null}</p>
                </NavLink>
            })}

        </aside>
    )
}

export default Sidebar

function navClassGenerator(open, minimaized) {
    if (open && minimaized) {
        return "sidebar sidebar-mini";
    }
    if (!open) {
        return "hidden";
    } else {
        return "sidebar"
    }
}
