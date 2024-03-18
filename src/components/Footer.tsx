import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="d-flex py-4 my-4 border-bottom">
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-dark" href="#">
              Home
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              About
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              Services
            </a>
          </li>
          <li className="ms-3">
            <a className="link-dark" href="#">
              Contact
            </a>
          </li>
          <li className="footer-icon ms-3">
            <a className="link-dark" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="footer-icon ms-3">
            <a className="link-dark" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="footer-icon ms-3">
            <a className="link-dark" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-column justify-content-start text-muted">
        <p>&copy; 2024 Alrabita, Inc. All rights reserved.</p>
        <span className="footer-span">Developed By Amjad Shakhshir</span>
      </div>
    </footer>
  );
};

export default Footer;
