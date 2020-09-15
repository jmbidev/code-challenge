import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { drivers } from '../../../../api/mocks'
import store from '../../../../store'
import DriversTable from './'

test('DriversTable renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Provider store={store}>
      <DriversTable drivers={drivers} />
    </Provider>
  ), div)
})
