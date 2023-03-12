import { Button } from "react-bootstrap";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import logo1 from "./public/logo1.png"

export function HomeLogo() {
  return (
    <>
      <Button
        style={{
          width: "3rem",
          height: "3rem",
          position: "relative",
          color: "blue",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain'
      }}
      variant="outline-primary"
      className="rounded-circle"
    >
    
      </Button>
    </>
  );
}
