import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var NavigationButton = function NavigationButton(_ref) {
  var element = _ref.element,
      navMinimaized = _ref.navMinimaized;
  return React.createElement(NavLink, {
    to: element.url,
    className: "sidebar-item",
    key: element.name,
    activeClassName: "active-link"
  }, element.icon ? React.createElement(FontAwesomeIcon, {
    color: "#2f353",
    icon: ['fas', "".concat(element.icon)]
  }) : null, React.createElement("p", {
    className: navMinimaized ? "hidden" : ""
  }, element.name));
};

export default NavigationButton;