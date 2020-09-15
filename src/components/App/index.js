import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Background from '../Background'
import Header from '../Header'
import Footer from '../Footer'
import Drivers from '../../modules/drivers'
import Home from '../../modules/home'
import Message from '../../containers/Message'

import './styles.css'

const App = () => {
  return (
    <Router>
      <Background />
      <Header />
      <Container className='pt-4'>
        <Message />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/drivers' component={Drivers} />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
