import { Button } from "react-bootstrap";
import svglogonew from "/svglogonew.svg";

export function HomeLogo() {
  return (
    <Button
      style={{
        width: "4.5rem",
        height: "4.5rem",
        position: "relative",
        color: "blue",
        backgroundImage: `url(${svglogonew})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        border: "none",
      }}
      variant="outline-primary"
      // className="rounded-circle"
    ></Button>
  );
}
