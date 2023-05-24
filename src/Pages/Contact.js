import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faPhone,faEnvelope,faHeart, } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      <h1>
        <section className="contact spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact__map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                    height={390}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="contact__widget">
                  <div className="contact__widget__item">
                    <div className="contact__widget__icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <h5>Address</h5>
                    <p>509 Myrtle Ave, Brooklyn, NY 11205, USA</p>
                  </div>
                  <div className="contact__widget__item">
                    <div className="contact__widget__icon">
                    <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <h5>PhoNe</h5>
                    <p>+1 718-783-1936 +1 718-783-1966</p>
                  </div>
                  <div className="contact__widget__item">
                    <div className="contact__widget__icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <h5>Email</h5>
                    <p>Makeup.artist@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <div className="contact__form">
                  <h2>Get in touch</h2>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Name*" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Phone*" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Email*" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Message" defaultValue={""} />
                        <button type="submit" className="site-btn">
                          Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </h1>
    </div>
  );
};

export default Contact;
