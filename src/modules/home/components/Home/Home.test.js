import React from 'react'
import ReactDOM from 'react-dom'

import Home from './'

test('Home renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Home />
  ), div)
})
