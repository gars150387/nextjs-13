import React from "react"
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"


export const NavBarMain = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/home">
          <Navbar.Brand href="#">G.A.R.S</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/aboutMe">
              <Nav.Link href="/aboutMe">About Me</Nav.Link>
            </Link>
            <Link to="/certifications">
              <Nav.Link href="/certifications">Certifications</Nav.Link>
            </Link>
            <NavDropdown title="Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://github.com/gars150387/Contact_list_Flux_API_BasedOnArticle">Contact_list_Flux_API_BasedOnArticle</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/WoodlyB/Gustavo-and-Woodly-project">Final Project</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/todo-list-in-landing-page-react-flux">To Do List</NavDropdown.Item>              
              <NavDropdown.Item href="https://github.com/gars150387/simple-counter-exercise-react-hook">Counter</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/traffic-light-exercise-react">Traffic Light</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-card-generated">Random Card generated</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/gars150387/random-excuse-exercise-javascript">Random Excuse Generated</NavDropdown.Item>
              
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/resume">
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Link>
            <Link to="/contact">            
            <Nav.Link eventKey={2} href="/contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}