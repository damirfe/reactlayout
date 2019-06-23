import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationButton from './NavigationButton';

var NavigationDropdown = function NavigationDropdown(_ref) {
  var element = _ref.element,
      navMinimaized = _ref.navMinimaized;
  var dataMapping = element.children.map(function (child) {
    return React.createElement(NavigationButton, {
      key: child.name,
      element: child
    });
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen(e) {
    return setOpen(!open);
  };

  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sidebar-item",
    onClick: function onClick() {
      return toggleOpen();
    }
  }, React.createElement(FontAwesomeIcon, {
    icon: ["fas", "".concat(element.icon)]
  }), React.createElement("p", null, element.name), open ? React.createElement(FontAwesomeIcon, {
    icon: ["fas", "caret-up"]
  }) : React.createElement(FontAwesomeIcon, {
    icon: ["fas", "caret-down"]
  })), open ? dataMapping : null);
};

export default NavigationDropdown;