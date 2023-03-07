import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartButton } from "./CartButton";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="header">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Products" as={NavLink}>
            Products
          </Nav.Link>
          <Nav.Link to="/Admin" as={NavLink}>
            Admin
          </Nav.Link>
          <Nav.Link to="/Contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
          <CartButton />    
      </Container>
    </NavbarBs>
  );
}
