import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope,faHeart, } from '@fortawesome/free-solid-svg-icons';


// import { faFacebookF,faTwitter } from '@fortawesome/sharp-solid-svg-icons'
import insta1 from "../Image/insta-1.jpg";
import insta2 from "../Image/insta-2.jpg";
import insta3 from "../Image/insta-3.jpg";
import insta4 from "../Image/insta-4.jpg";
import insta5 from "../Image/insta-5.jpg";
import logo from "../Image/logo.png.webp";



const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__contact">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                  <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <h5>Address</h5>
                  <p>509 Myrtle Ave, Brooklyn, NY 11205, USA</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                  <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <h5>Phone</h5>
                  <p>+1 718-783-1936 +1 718-783-1966</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__contact__item">
                  <div className="footer__contact__icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <h5>Email</h5>
                  <p>Makeup.artist@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__content">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer__logo">
                  <a href="./index.html">
                    <img src={logo} alt="" />
                  </a>
                  <h6>
                    Follow us on <a href="#">@makeupartist</a>
                  </h6>
                </div>
                <div className="footer__instagram__pic">
                  <img src={insta1} alt="" />
                  <img src={insta2} alt="" />
                  <img src={insta3} alt="" />
                  <img src={insta4} alt="" />
                  <img src={insta5} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-9 col-md-9">
                <p className="footer__copyright__text">
                  Copyright ©2023 All rights reserved | This template is made
                  with{" "}
                  <FontAwesomeIcon icon={faHeart} />{" "}
                  by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer__copyright__social">
                  <a href="#">
                  {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                  </a>
                  <a href="#">
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
