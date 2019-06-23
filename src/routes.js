import React from 'react'

const Dashboard = React.lazy(() => import("./lib/containers/Dashboard.jsx"))
const Gebruikers = React.lazy(() => import("./lib/containers/Gebruikers.jsx"))

const routes = [
    { path: '/dashboard', name: "Dashboard", component: Dashboard, exact: true },
    { path: '/gebruikers', name: "Gebruikers", component: Gebruikers, exact: true }
]

export default routes;