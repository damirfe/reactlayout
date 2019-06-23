import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavigationButton from './NavigationButton';

const NavigationDropdown = ({ element, navMinimaized }) => {
    const dataMapping = element.children.map(child => {
        return (
            <NavigationButton key={child.name} element={child} />
        );
    });

    const [open, setOpen] = useState(false);

    const toggleOpen = e => setOpen(!open);
    return (
        <React.Fragment>
            <div className="sidebar-item" onClick={() => toggleOpen()}>
                <FontAwesomeIcon icon={[`fas`, `${element.icon}`]} />
                <p>{element.name}</p>
                {open ? (<FontAwesomeIcon icon={[`fas`, `caret-up`]} />) : (
                    <FontAwesomeIcon icon={[`fas`, `caret-down`]} />)}
            </div>
            {open ? dataMapping : null}
        </React.Fragment>
    )
}

export default NavigationDropdown
