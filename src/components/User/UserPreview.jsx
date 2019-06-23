import React from 'react'
import UserDropdown from "./UserDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const UserPreview = ({ avatar, username, data }) => {
    // const [isOpen, setisOpen] = useState(false);
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
