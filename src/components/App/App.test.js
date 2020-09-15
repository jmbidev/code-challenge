import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import store from '../../store'
import App from '.'

test('App renders without crashing ', () => {
  const div = document.createElement('div')

  ReactDOM.render((
    <Provider store={store}>
      <App />
    </Provider>
  ), div)
})
