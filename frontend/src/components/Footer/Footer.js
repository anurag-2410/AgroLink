import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="container-f">
      <div className="footer text-center">
        <div className="get-connected">
          <div className="get-connected-text">
            <span className="get-connected-span">
              Get connected with us on social networks:
            </span>
          </div>

          <div className="social-icons">
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
            <a href="/" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <div className="container">
            <div className="container-row">
              <div className="container-row-column1 ">
                <h6 className="topic">
                  <FontAwesomeIcon className="leaf" icon={faLeaf} />
                  AgroLink
                </h6>
                <p className="leaf-para">
                  Discover how AgroLink Digital Marketplace can benefit you
                  and all other food supply chain actors.
                </p>
              </div>

              <div className="container-row-column2">
                <h6 className="topic">Categories</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Farmer's Section
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Seller's Section
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Deliveryman's Section
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Common Section
                  </a>
                </p>
              </div>

              <div className="container-row-column3">
                <h6 className="topic">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Profile
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="container-row-column3">
                <h6 className="topic">Contact</h6>
                <p>
                  <FaHome className="fas fa-home me-3" /> Jaipur, Rajasthan, India
                </p>
                <p>
                  <FaEnvelope className="fas fa-envelope me-3" />
                  agrolink@gmail.com
                </p>
                <p>
                  <FaPhone className="fas fa-phone me-3" /> +91 8789563831
                </p>
                <p>
                  <FaPrint className="fas fa-print me-3" /> +91 8789563831
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Footer;
