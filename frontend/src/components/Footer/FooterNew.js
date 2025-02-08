import React from "react";
import "./footerNew.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";

function FooterNew() {
  return (
    <footer>
      <div class="footer-col">
        <h4>Categories</h4>
        <ul>
          <li>
            <a href="/farmer">Farmer Section</a>
          </li>
          <li>
            <a href="/seedseller">Seed Seller Section</a>
          </li>
          <li>
            <a href="/consumer">Consumer Section</a>
          </li>
          <li>
            <a href="/common">Common Section</a>
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Usefull Links</h4>
        <ul>
          <li>
            <a href="#">About Company</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Register Now</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <p>
            <FaHome className="fas fa-home me-3" /> Jaipur, Rajasthan, India
          </p>

          <p>
            <FaPhone className="fas fa-phone me-3" /> +91 8789563831
          </p>
          <p>
            <FaPrint className="fas fa-print me-3" /> +91 7970352598
          </p>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="links">
          <a href="/" className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/" className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/" className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="/" className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="/" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterNew;
