import react from "react";
import {Container, Navbar, Offcanvas, NavDropdown,Form, FormControl, Button, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavbarMain = () =>{
    return (
        <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Eco Wax</Navbar.Brand>
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
          <Nav.Link href="#action1">Eco Wax</Nav.Link>
          <Nav.Link href="#action2">Quienes Somos</Nav.Link>
          <NavDropdown title="Catalogo" id="offcanvasNavbarDropdown">
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