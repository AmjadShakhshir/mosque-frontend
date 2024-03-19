import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src="/assets/logo_03.png" width="60" height="60" className="d-inline-block align-top" alt="Mosque logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/prayer-times">
                Prayer Times
              </Link>
              <Link className="nav-link" to="/school">
                School
              </Link>
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav>
            <Button className="header-btn">Donate</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
