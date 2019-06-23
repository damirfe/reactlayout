import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var UserDropdown = function UserDropdown(_ref) {
  var data = _ref.data;
  return React.createElement("div", {
    className: "user-dropdown"
  }, data.map(function (item) {
    return React.createElement("div", {
      key: item.iconName,
      onClick: item.action,
      className: "dropdown-item"
    }, React.createElement(FontAwesomeIcon, {
      icon: ["".concat(item.iconGroup), "".concat(item.iconName)]
    }), React.createElement("p", null, item.text));
  }));
};

export default UserDropdown;