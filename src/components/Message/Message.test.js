import React from 'react'
import ReactDOM from 'react-dom'

import Message from './'

test('Message renders without crashing ', () => {
  const div = document.createElement('div')

  const message = {
    title: 'Titulo',
    body: 'Body',
    variant: 'danger'
  }

  ReactDOM.render((
    <Message message={message} close={() => {}} />
  ), div)
})
