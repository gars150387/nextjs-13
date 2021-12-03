import React from "react"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { Navbar, NavDropdown, Nav, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export const NavBarMain = ()=>{
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#">G.A.R.S</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="">About Me</Nav.Link>
      <Nav.Link href="">Certifications</Nav.Link>
      <NavDropdown title="Projects" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#">Resume</Nav.Link>
      <Nav.Link eventKey={2} href="#">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}