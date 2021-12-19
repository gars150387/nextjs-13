import React from "react";
import {Container, Navbar, Offcanvas, NavDropdown,Form, FormControl, Button, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {FaShoppingCart, FaTruck} from 'react-icons/fa'
import {SiCashapp} from 'react-icons/si'


export const NavbarMain = () =>{
    return (
        <Navbar id="navBarMain" style={{backgroundColor: "#282c34"}} expand={false}>
  <Container fluid>
    <Link to="/inicio">
    <Navbar.Brand style={{color: "white", position: "relative", left: "340px", fontSize: "60px", fontFamily: "comics san"}}>Eco Wax</Navbar.Brand>
    </Link>
    <Navbar.Toggle style={{backgroundColor: "white", fontSize: "25px", position: "relative", right: "20px"}} aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        {/* <Offcanvas.Title id="offcanvasNavbarLabel">Eco Wax</Offcanvas.Title> */}
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav id="navbarOptions" className="justify-content-end flex-grow-1 pe-3">
          <Link to="/catalogo">
          <Nav.Link href="/catalogo">Catalogo</Nav.Link>
          </Link>
          <Link to="/inicio">
          <Nav.Link >Metodos de Envios <FaTruck /> </Nav.Link>
          </Link>
          <Link to="/inicio">
          <Nav.Link >Metodos de Pagos <SiCashapp /> </Nav.Link>
          </Link>
          <Link to="/inicio">
          <Nav.Link >Tus Compras <FaShoppingCart/> </Nav.Link>
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