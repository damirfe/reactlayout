import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserPreview from '../components/User/UserPreview';

var Header = function Header(_ref) {
  var navOpen = _ref.navOpen,
      setNavOpen = _ref.setNavOpen,
      navMinimaized = _ref.navMinimaized,
      headerData = _ref.headerData;
  return React.createElement("nav", {
    className: "header"
  }, React.createElement("div", {
    className: "toggle-nav",
    onClick: function onClick() {
      return setNavOpen(!navOpen);
    }
  }, React.createElement(FontAwesomeIcon, {
    icon: ['fas', 'bars'],
    size: "lg"
  })), React.createElement(Link, {
    to: "/dashboard",
    className: "logo-holder"
  }, navMinimaized ? React.createElement("img", {
    src: headerData.logosmall,
    alt: "small logo"
  }) : React.createElement("img", {
    src: headerData.logo,
    alt: "main-logo"
  })), React.createElement(UserPreview, {
    data: headerData.dropdownData,
    username: headerData.username,
    avatar: headerData.avatar
  }));
};

export default Header;