import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand style={{ lineHeight: '40px' }} href='#'>
          <img
            alt=''
            src={logo}
            height='40'
            width='40'
            className='d-inline-block align-top mr-2'
          />
          Code-Challenge
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/home'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/drivers'>Conductores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
