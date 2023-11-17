import React from 'react';
import logo from "../image/logo4.png";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
function Bar() {
  return (
    <>
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img className="img-fluid" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='menu' id="basic-navbar-nav">
          <Nav className="menu-data me-auto">
            <Link className='link' exact to='/'>Home</Link>
            <Link className='link' exact to='/portfolio'>Portfolio</Link>
            <Link className='link' exact to='/skill'>Skills</Link>

            {/* <NavLink exact to="/skill">Skills</NavLink> */}
            
            <NavDropdown title="Services" id="basic-nav-dropdown" className='drop'>
              <NavDropdown.Item href="#action/3.1">Frontend Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Wordpress Devlopment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">React Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Mern Stack Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Singel Page Application</NavDropdown.Item>
            </NavDropdown>
            <Link className='link' exact to='/about'>About</Link>
            <Link className='link' exact to='/getintouch'>Get in Touch</Link>
            <Link className='link' exact to='/hireme'>Hire Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       <hr/>
    </>
  )
}

export default Bar