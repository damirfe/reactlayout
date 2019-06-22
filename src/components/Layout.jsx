import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Layout = ({ navigation }) => {
    const [navOpen, setNavOpen] = useState(true);
    const [navMinimaized, setNavMinimaized] = useState(false);
    return (
        <div className="container">
            <Header navOpen={navOpen} setNavOpen={setNavOpen} navMinimaized={navMinimaized} />
            <div className="main-holder">
                <Sidebar open={navOpen} navMinimaized={navMinimaized} setNavMinimaized={setNavMinimaized} navigation={navigation} />
                <Main />
            </div>
        </div>
    )
}

export default Layout
