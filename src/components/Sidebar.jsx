import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const Sidebar = ({ open, navMinimaized, setNavMinimaized, navigation }) => {
    return (
        <aside className={(navClassGenerator(open, navMinimaized))}>
            <div className="retract-sidebar sidebar-item" onClick={() => setNavMinimaized(!navMinimaized)}>
                {navMinimaized ? (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-right']} size="lg" />)
                    : (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-left']} size="lg" />)}
            </div>
            {navigation.items.map(element => {
                return <div className="sidebar-item">
                    <FontAwesomeIcon color="#2f353" icon={['fas', `${element.icon}`]} />
                    <Link key={element.name} to={element.url}>{element.name}</Link></div>
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
