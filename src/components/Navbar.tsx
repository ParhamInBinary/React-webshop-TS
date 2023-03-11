import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AdminButton } from "./AdminButton";
import { CartButton } from "./CartButton";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
padding: 0px 10px;
color: black;
text-decoration:none;
font-size: 1.2rem;
transition: all 0.3s ease;
  &.active {
    color: #fff;
    text-decoration: underline 3px;
  }
`;

export function Navbar() {
  return (
    <header>
      <NavbarBs sticky="top" className="header shadow-lg mb-4">
        <Container>
          <Nav className="me-auto">
            <StyledNavLink to="/" as={NavLink}>
              Home
            </StyledNavLink>
            <StyledNavLink to="/FAQ" as={NavLink} >
              FAQ
            </StyledNavLink>
          </Nav>
          <StyledNavLink to="/Admin" as={NavLink}>
            <AdminButton />
          </StyledNavLink>
          <CartButton />
        </Container>
      </NavbarBs>
    </header>
  );
}
