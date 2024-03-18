import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src="/assets/logo_03.png" width="60" height="60" className="d-inline-block align-top" alt="Mosque logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link" href="#action2">
                Prayer Times
              </Nav.Link>
              <Nav.Link className="nav-link" href="/school">
                School
              </Nav.Link>
              <Nav.Link className="nav-link" href="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="nav-link" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Button className="header-btn">Donate</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
