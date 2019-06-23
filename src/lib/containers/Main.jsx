import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

const loading = () => <div>Loading...</div>

const Main = ({ routes }) => {
  return (
    <div className="main">
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, id) => {
            return route.component ? (
              <Route key={id} path={route.path} exact={route.exact} name={route.name} render={props => (
                <route.component {...props} />)
              } />
            ) : (null)
          })}
        </Switch>
      </Suspense>
    </div>
  )
}

export default Main
