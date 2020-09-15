import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { drivers } from '../../../../api/mocks'
import store from '../../../../store'
import ShowDrivers from './'

test('ShowDrivers renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Provider store={store}>
      <ShowDrivers drivers={drivers} loadDrivers={() => true} />
    </Provider>
  ), div)
})
