import { Button, Offcanvas } from "react-bootstrap";

interface CartBodyProps {
  show: boolean;
  onHide: () => void;
  clear: () => void;
}

export function CartBody({ show, onHide, clear }: CartBodyProps) {
  return (
    <>
      <Offcanvas show={show} onHide={onHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button style={{ right: "0px", width: "80px" }} onClick={clear}>
              Clear
            </Button>
          </div>
          <Button variant="primary" style={{ marginTop: "2rem" }}>
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
