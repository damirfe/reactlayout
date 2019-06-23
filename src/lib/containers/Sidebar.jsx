import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationButton from '../components/Buttons/NavigationButton';
import NavigationDropdown from '../components/Buttons/NavigationDropdown';

const Sidebar = ({ open, navMinimaized, setNavMinimaized, navigation }) => {
    return (

        <aside className={(navClassGenerator(open, navMinimaized))}>
            <div className="retract-sidebar" onClick={() => setNavMinimaized(!navMinimaized)}>
                {navMinimaized ? (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-right']} size="lg" />)
                    : (<FontAwesomeIcon color="#fff" icon={['fas', 'angle-left']} size="lg" />)}
            </div>
            {navigation.items.map(element => {
                return element.children ?
                    <NavigationDropdown key={element.name} element={element} navMinimaized={navMinimaized} />
                    : <NavigationButton key={element.name}  element={element} navMinimaized={navMinimaized} />
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
