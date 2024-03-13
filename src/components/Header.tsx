import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Mosque</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Button variant="outline-success">Search</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
