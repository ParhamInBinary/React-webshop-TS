import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";



export function Navbar() {
  return (
    <NavbarBs sticky="top" className="header">
      <Container>
        <Nav className="">
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
      </Container>
    </NavbarBs>
  );
}

