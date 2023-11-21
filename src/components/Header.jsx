import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from './assets/images/logo.png'
function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 mx-auto gap-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Service</Nav.Link>
              <Nav.Link href="#action3">Blog</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Project</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Project Detail</NavDropdown.Item>
                <NavDropdown.Item href="#action7">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action8">404 Page</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action9">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button className='btn-one'>Hire Me</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
