import React from 'react'
import "./style/style.scss";
import Layout from './components/Layout';
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import nav from "./_nav";


library.add(fas)

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout navigation={nav} />
      </Router>
    </div>
  )
}

export default App
