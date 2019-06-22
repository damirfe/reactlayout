import React, { useState } from 'react'
import UserDropdown from "./UserDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = [
    {
        iconGroup: "fas",
        iconName: "adjust",
        text: "action 1",
        action: () => {
            console.log("action 1");
        }
    },
    {
        iconGroup: "fas",
        iconName: "atom",
        text: "action 2",
        action: () => {
            console.log("action 2");
        }
    }
];

const UserPreview = ({ avatar, username }) => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="row dropdown-container">
            <div className="avatar-container">
                <img className="avatar" src={avatar} alt={"Avatar for " + username} />
                <p className="username">{username}</p>
                <FontAwesomeIcon
                    icon={['fas', 'caret-down']} />
            </div>
            <UserDropdown data={data} />
        </div>
    )
}

export default UserPreview
