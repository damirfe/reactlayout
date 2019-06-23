import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

var loading = function loading() {
  return React.createElement("div", null, "Loading...");
};

var Main = function Main(_ref) {
  var routes = _ref.routes;
  return React.createElement("div", {
    className: "main"
  }, React.createElement(Suspense, {
    fallback: loading()
  }, React.createElement(Switch, null, routes.map(function (route, id) {
    return route.component ? React.createElement(Route, {
      key: id,
      path: route.path,
      exact: route.exact,
      name: route.name,
      render: function render(props) {
        return React.createElement(route.component, props);
      }
    }) : null;
  }))));
};

export default Main;