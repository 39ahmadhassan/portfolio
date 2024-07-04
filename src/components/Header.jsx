import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import logo from './assets/images/logo.png'
import { Link } from 'react-router-dom';
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
              className="me-auto my-2 my-lg-0 mx-auto gap-md-5"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              {/* <Nav.Link as={Link} to='service'>Service</Nav.Link> */}
              <NavDropdown title="Service" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='service'>Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='servicedetail'>Service Detail</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='blog'>Blog</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to='about'>About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='project'>Project</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='projectdetail'>Project Detail</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='faq'>FAQ</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='four'>404 Page</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='contact'>Contact</Nav.Link>
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
