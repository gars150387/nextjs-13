import React from "react"
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"


export const NavBarMain = () => {
  return (
    <Navbar className="sticky-top" id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container sticky="top">
        <Link to="/home">
          <Navbar.Brand id="navbarTitle" href="#">G.A.R.S</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Link to="/certifications">
              <Nav.Link id="navbarOption" href="/certifications">Certifications</Nav.Link>
            </Link>
            <Link to="/resume">
              <Nav.Link id="navbarOption" href="/resume">Resume</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link id="navbarOption" eventKey={2} href="/contact">Contact</Nav.Link>
            </Link>
            <NavDropdown title="Projects" style={{fontSize: "28px"}} id="navbarOption" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/gars150387/Contact_list_Flux_API_BasedOnArticle">Contact_list_Flux_API_BasedOnArticle</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/WoodlyB/Gustavo-and-Woodly-project">Final Project</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/todo-list-in-landing-page-react-flux">To Do List</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/simple-counter-exercise-react-hook">Counter</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/traffic-light-exercise-react">Traffic Light</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-card-generated">Random Card generated</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-excuse-exercise-javascript">Random Excuse Generated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}