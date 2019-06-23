import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

var Layout = function Layout(_ref) {
  var navigation = _ref.navigation,
      headerData = _ref.headerData,
      routes = _ref.routes;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      navOpen = _useState2[0],
      setNavOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      navMinimaized = _useState4[0],
      setNavMinimaized = _useState4[1];

  return React.createElement("div", {
    className: "container"
  }, React.createElement(Header, {
    navOpen: navOpen,
    setNavOpen: setNavOpen,
    navMinimaized: navMinimaized,
    headerData: headerData
  }), React.createElement("div", {
    className: "main-holder"
  }, React.createElement(Sidebar, {
    open: navOpen,
    navMinimaized: navMinimaized,
    setNavMinimaized: setNavMinimaized,
    navigation: navigation
  }), React.createElement(Main, {
    routes: routes
  })));
};

export default Layout;