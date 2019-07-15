import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import "../style/style.scss";

library.add(fas)

const Layout = ({ navigation, headerData, routes }) => {
    const [navOpen, setNavOpen] = useState(true);
    const [navMinimaized, setNavMinimaized] = useState(false);
    return (
        <div className="container">
            <Header navOpen={navOpen} setNavOpen={setNavOpen} navMinimaized={navMinimaized} headerData={headerData} />
            <div className="main-holder">
                <Sidebar open={navOpen} navMinimaized={navMinimaized} setNavMinimaized={setNavMinimaized} navigation={navigation} />
                <Main routes={routes} />
            </div>
        </div>
    )
}

export default Layout
