import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AdminButton } from "./AdminButton";
import { CartButton } from "./CartButton";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="header shadow-lg mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Contact" as={NavLink}>
            Contact
          </Nav.Link>
        </Nav>
        <Nav.Link to="/Admin" as={NavLink}>
        <AdminButton />
        </Nav.Link>
          <CartButton />    
      </Container>
    </NavbarBs>
  );
}
