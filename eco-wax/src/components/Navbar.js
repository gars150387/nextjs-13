import react from "react";
import {Container, Navbar, Offcanvas, NavDropdown,Form, FormControl, Button, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export const NavbarMain = () =>{
    return (
        <Navbar bg="light" expand={false}>
  <Container fluid>
    <Link to="/">
    <Navbar.Brand href="#">Eco Wax</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        {/* <Offcanvas.Title id="offcanvasNavbarLabel">Eco Wax</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/">
          <Nav.Link href="#action1">Eco Wax</Nav.Link>
          </Link>
          <Link to="/catalogo">
          <Nav.Link href="#action2">Catalogo</Nav.Link>
          </Link>
          <NavDropdown title="Promociones" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
}