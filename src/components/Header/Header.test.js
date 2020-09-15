import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './'

test('Header renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Router history=''>
      <Header />
    </Router>
  ), div)
})
