import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Test from './pages/Test'
import Error404 from './pages/Error404'

export const PATH = {
  TEST: '/test',
}

function Routes() {
  return (
      <div>
        <Switch>
          <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>
          <Route path={PATH.TEST} render={() => <Test/>}/>
          <Route render={() => <Error404/>}/>
        </Switch>
      </div>
  )
}

export default Routes
