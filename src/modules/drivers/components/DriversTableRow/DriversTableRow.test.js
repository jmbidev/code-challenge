import React from 'react'
import ReactDOM from 'react-dom'

import { drivers } from '../../../../api/mocks'
import DriversTableRow from './'

test('DriversTableRow renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <table>
      <tbody>
        <DriversTableRow index={0} driver={drivers[0]} deleteDriver={() => true} />
      </tbody>
    </table>
  ), div)
})
