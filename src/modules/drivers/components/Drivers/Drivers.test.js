import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from '../../../../store'

import Drivers from './'

test('Drivers renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={Drivers} />
        </Switch>
      </Router>
    </Provider>
  ), div)
})
