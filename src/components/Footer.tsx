import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Footer() {
  return (
    <footer>
      <NavbarBs className="footer shadow-lg mb-4">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/Contact" as={NavLink}>
              Contact
            </Nav.Link>
          </Nav>   
        </Container>
      </NavbarBs>
    </footer>
  );
}
