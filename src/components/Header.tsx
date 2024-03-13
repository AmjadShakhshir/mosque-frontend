import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="/assets/logo_03.png" width="60" height="60" className="d-inline-block align-top" alt="Mosque logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Prayer Times</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Button className="header-btn">Donate</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
