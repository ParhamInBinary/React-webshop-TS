import { Button } from "react-bootstrap";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

export function Home() {
  return (
    <>
      <Button
        style={{
          width: "3rem",
          height: "3rem",
          position: "relative",
          color: "blue",
          backgroundImage: `url(${process.env.PUBLIC_URL}../public//Footer)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        variant="outline-primary"
        className="rounded-circle"
      ></Button>
    </>
  );
}
