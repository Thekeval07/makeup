import React from "react";
import sp_item_1 from "../Image/sp-item-1.jpg.webp";
import sp_item_2 from "../Image/sp-item-2.jpg.webp";
import sp_item_3 from "../Image/sp-item-3.jpg.webp";
import sp_item_4 from "../Image/sp-item-4.jpg.webp";
import sp_item_5 from "../Image/sp-item-5.jpg.webp";
import sp_item_6 from "../Image/sp-item-6.jpg.webp";
import sp_item_7 from "../Image/sp-item-7.jpg.webp";
import sp_item_8 from "../Image/sp-item-8.jpg.webp";
import callto_1 from "../Image/callto-text-bg.jpg.webp";
import callto_2 from "../Image/callto-quote-bg.jpg.webp";
import service from "../Image/services-breadcrumb.jpg.webp";
import Breandrum from "../Components/Breandrum";

const Services = () => {
  return (
    <div>
      {/* SERVICES */}
      <Breandrum name={'Service'} image={service} />

     

      {/* SERVICES INFO */}
      <section className="services-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-1">
              <div className="services__page__text">
                <div className="price">From $20</div>
                <h2>Daily makeup</h2>
                <p>
                  Complete makeup application, as natural or bold as you’d like
                  it. I will consult with you beforehand to make sure we are on
                  the same page.
                </p>
                <ul>
                  <li>
                    <span className="icon_check" /> Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="icon_check" /> Consectetur adipiscing elit
                  </li>
                  <li>
                    <span className="icon_check" /> Sed do eiusmod tempor
                    incididunt
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="services__page__pic">
                <div className="services__page__pic__item">
                  <img src={sp_item_1} alt="" />
                </div>
                <div className="services__page__pic__item small__item">
                  <img src={sp_item_2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-4">
              <div className="services__page__text">
                <div className="price">From $20</div>
                <h2>Wedding makeup</h2>
                <p>
                  Wedding makeup is so much more than just the day-of
                  application. I’ll be here from start to finish, answering any
                  questions you have and making sure everythings.
                </p>
                <ul>
                  <li>
                    <span className="icon_check" /> Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="icon_check" /> Consectetur adipiscing elit
                  </li>
                  <li>
                    <span className="icon_check" /> Sed do eiusmod tempor
                    incididunt
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-3">
              <div className="services__page__pic">
                <div className="services__page__pic__item small__item">
                  <img src={sp_item_3} alt="" />
                </div>
                <div className="services__page__pic__item">
                  <img src={sp_item_4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="callto">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="callto__left set-bg"
                data-setbg="img/callto-text-bg.jpg"
                style={{ backgroundImage: `url(${callto_1})` }}
              >
                <div className="callto__left__text">
                  <span>Book online for</span>
                  <h2>20% discount</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div
                className="callto__form set-bg"
                data-setbg="img/callto-quote-bg.jpg"
                style={{ backgroundImage: `url(${callto_2})` }}
              >
                <h3>Get a quote</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Number phone" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-6 nice-select">
                      <select className="nice-select">
                        <span className="current">Choose services</span>
                        <option className="option selected" value="">
                          Choose services
                        </option>
                        <option className="option" value="">
                          Beauty
                        </option>
                      </select>

                      {/* <div className="nice-select" >
                        <span className="current">Choose services</span>
                        <ul className="list">
                          <li data-value="" className="option selected">
                            Choose services
                          </li>
                          <li data-value="" className="option">
                            Beauty
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Your message" defaultValue={""} />
                      <button type="button" className="site-btn">
                        Book services
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-1">
              <div className="services__page__text">
                <div className="price">From $20</div>
                <h2>Event makeup</h2>
                <p>
                  Complete makeup application, as natural or bold as you’d like
                  it. I will consult with you beforehand to make sure we are on
                  the same page.
                </p>
                <ul>
                  <li>
                    <span className="icon_check" /> Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="icon_check" /> Consectetur adipiscing elit
                  </li>
                  <li>
                    <span className="icon_check" /> Sed do eiusmod tempor
                    incididunt
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="services__page__pic">
                <div className="services__page__pic__item">
                  <img src={sp_item_5} alt="" />
                </div>
                <div className="services__page__pic__item small__item">
                  <img src={sp_item_6} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-4">
              <div className="services__page__text">
                <div className="price">From $20</div>
                <h2>Creative makeup</h2>
                <p>
                  Wedding makeup is so much more than just the day-of
                  application. I’ll be here from start to finish, answering any
                  questions you have and making sure everythings.
                </p>
                <ul>
                  <li>
                    <span className="icon_check" /> Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span className="icon_check" /> Consectetur adipiscing elit
                  </li>
                  <li>
                    <span className="icon_check" /> Sed do eiusmod tempor
                    incididunt
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-lg-3">
              <div className="services__page__pic">
                <div className="services__page__pic__item small__item">
                  <img src={sp_item_7} alt="" />
                </div>
                <div className="services__page__pic__item">
                  <img src={sp_item_8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
