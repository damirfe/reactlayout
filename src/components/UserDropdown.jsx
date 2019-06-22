import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserDropdown = ({ data }) => {

    return (
        <div className="user-dropdown">
            {data.map(item => {
                return (<div key={item.iconName} onClick={item.action} className="dropdown-item">
                    <FontAwesomeIcon
                        icon={[`${item.iconGroup}`, `${item.iconName}`]} />
                    <p>{item.text}</p>
                </div>)
            })}
        </div>
    )
}

export default UserDropdown
