import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationButton from '../components/Buttons/NavigationButton';
import NavigationDropdown from '../components/Buttons/NavigationDropdown';

var Sidebar = function Sidebar(_ref) {
  var open = _ref.open,
      navMinimaized = _ref.navMinimaized,
      setNavMinimaized = _ref.setNavMinimaized,
      navigation = _ref.navigation;
  return React.createElement("aside", {
    className: navClassGenerator(open, navMinimaized)
  }, React.createElement("div", {
    className: "retract-sidebar",
    onClick: function onClick() {
      return setNavMinimaized(!navMinimaized);
    }
  }, navMinimaized ? React.createElement(FontAwesomeIcon, {
    color: "#fff",
    icon: ['fas', 'angle-right'],
    size: "lg"
  }) : React.createElement(FontAwesomeIcon, {
    color: "#fff",
    icon: ['fas', 'angle-left'],
    size: "lg"
  })), navigation.items.map(function (element) {
    return element.children ? React.createElement(NavigationDropdown, {
      key: element.name,
      element: element,
      navMinimaized: navMinimaized
    }) : React.createElement(NavigationButton, {
      key: element.name,
      element: element,
      navMinimaized: navMinimaized
    });
  }));
};

export default Sidebar;

function navClassGenerator(open, minimaized) {
  if (open && minimaized) {
    return "sidebar sidebar-mini";
  }

  if (!open) {
    return "hidden";
  } else {
    return "sidebar";
  }
}