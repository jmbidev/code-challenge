import React from 'react'
import ReactDOM from 'react-dom'

import Background from './'

test('Background renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Background />
  ), div)
})
