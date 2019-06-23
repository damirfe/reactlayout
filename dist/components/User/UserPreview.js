import React from 'react';
import UserDropdown from "./UserDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var UserPreview = function UserPreview(_ref) {
  var avatar = _ref.avatar,
      username = _ref.username,
      data = _ref.data;
  // const [isOpen, setisOpen] = useState(false);
  return React.createElement("div", {
    className: "row dropdown-container"
  }, React.createElement("div", {
    className: "avatar-container"
  }, React.createElement("img", {
    className: "avatar",
    src: avatar,
    alt: "Avatar for " + username
  }), React.createElement("p", {
    className: "username"
  }, username), React.createElement(FontAwesomeIcon, {
    icon: ['fas', 'caret-down']
  })), React.createElement(UserDropdown, {
    data: data
  }));
};

export default UserPreview;