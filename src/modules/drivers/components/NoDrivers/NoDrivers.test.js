import React from 'react'
import ReactDOM from 'react-dom'

import NoDrivers from './'

test('NoDrivers renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <NoDrivers />
  ), div)
})
