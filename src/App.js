import React from 'react'
import "./lib/style/style.scss";
import { Layout } from './lib/index.js';
import { BrowserRouter as Router } from "react-router-dom";
import nav from "./_nav";
import routes from "./routes";

const headerData = {
  username: "Damir Ivanic",
  homeLink: "/dashboard",
  dropdownData: [
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
  ],
  avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGU54ExC4_YTchKmnVahe9S7BB6tWYb_bv03VnkfD1O5MONGQK",
  logosmall: "../boss_logo_small.svg",
  logo: "../boss.svg"
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout navigation={nav} headerData={headerData} routes={routes} ><div>Hello world</div></Layout>
      </Router>
    </div>
  )
}

export default App


