import React from "react";
import hero from "../Image/hero-1.jpg";
import work1 from "../Image/work-1.jpg";
import work2 from "../Image/work-2.jpg";
import work3 from "../Image/work-3.jpg";
import work4 from "../Image/work-4.jpg";
import work5 from "../Image/work-5.jpg";
import work6 from "../Image/work-6.jpg";
import work7 from "../Image/work-7.jpg";
import callto_1 from "../Image/callto-text-bg.jpg.webp";
import callto_2 from "../Image/callto-quote-bg.jpg.webp";
import Test_slider from "../Components/Test_slider";
import blog1 from '../Image/blog-1.jpg.webp'
import s_bg from "../Image/s-bg.png.webp"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faImage,faFileLines,faPlay ,FaFacebookF } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
  Autoplay,
} from "swiper";
import ViewProduct from "../Components/ViewProduct";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__slider owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
          <div class="owl-stage" >
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 1000000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide >
                <div className="owl-item cloned">
                  <div
                    className="hero__items set-bg"
                    data-setbg=""
                  >
                    <div className="img_slide">
                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="owl-item cloned">
                  <div
                    className="hero__items set-bg"
                    data-setbg=""
                  >
                    <div className="img_slide">
                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
      </div>

      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <span>Make your face</span>
                  <h2>the center of attention.</h2>
                </div>
                <p>
                  My love of makeup started young while often sneaking into my
                  mother’s makeup vanity and playing with various shades of
                  lipstick, eyeshadow and blush. Makeup became a full blown
                  obsession after four years of art school where I learned to
                  master the airbrush technique.
                </p>
                <a href="#" className="primary-btn">
                  Contact us
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__pic">
                <img
                  data-cfsrc="img/about/about-pic.png"
                  alt=""
                  src="https://preview.colorlib.com/theme/makeupartist/img/about/about-pic.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="services set-bg spad"
        
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span>Best makeup services</span>
                <h2>Professional makeup</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="services__item">
                <div className="services__item__pic">
                  <img
                    data-cfsrc="img/services/services-1.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/services/services-1.jpg"
                  />
                </div>
                <div className="services__item__text">
                  <h5>Daily makeup</h5>
                  <span>From $20.0</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services__item services__item__top">
                <div className="services__item__text">
                  <h5>Wedding makeup</h5>
                  <span>From $50.0</span>
                </div>
                <div className="services__item__pic">
                  <img
                    data-cfsrc="img/services/services-2.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/services/services-2.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services__item">
                <div className="services__item__pic">
                  <img
                    data-cfsrc="img/services/services-3.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/services/services-3.jpg"
                  />
                </div>
                <div className="services__item__text">
                  <h5>Event makeup</h5>
                  <span>From $30.0</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="services__item services__item__top">
                <div className="services__item__text">
                  <h5>Creative Makeup</h5>
                  <span>From $70.0</span>
                </div>
                <div className="services__item__pic">
                  <img
                    data-cfsrc="img/services/services-4.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/services/services-4.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="testimonial spad">
        <div className="container">
          <div className="row">
          <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
            <div className="col-lg-12">

            

              <div className="testimonial__slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    
                  >
                    <SwiperSlide>
                    <div className="owl-item cloned">
                      <div className="testimonial__item">
                        <div className="testimonial__item__icon">
                          <img
                            data-cfsrc="img/testimonial/quote-icon.png"
                            alt=""
                            src={demo}
                          />
                        </div>
                        <div className="testimonial__author">
                          <div className="testimonial__author__pic">
                            <img
                              data-cfsrc="img/testimonial/ta-1.png"
                              alt=""
                              src={ta_1}
                            />
                          </div>
                          <div className="testimonial__author__text">
                            <h5>Danielle Benton</h5>
                            <span>Blogger/Client</span>
                          </div>
                        </div>
                        <p>
                          Rachel you are so amazing at what you do! Thank you so
                          much for everything! I felt so beautiful on our
                          wedding day. Not only are you superwoman with a makeup
                          brush, you are so lovely and such a delight to have
                          around the morning of the wedding!! Any bride would be
                          very lucky to have you part of her big day, I am very
                          grateful that you were part of mine
                        </p>
                      </div>
                    </div>
                    </SwiperSlide>
                   </div>
                   
                </div>
                
              <SwiperSlide>
                <div className="owl-item cloned" >
                <div className="testimonial__item">
                  <div className="testimonial__item__icon">
                    <img src={demo} alt="" />
                  </div>
                  <div className="testimonial__author">
                    <div className="testimonial__author__pic">
                      <img src={ta_1} alt="" />
                    </div>
                    <div className="testimonial__author__text">
                      <h5>Dani Alves</h5>
                      <span>Blogger/Client</span>
                    </div>
                  </div>
                  <p>
                    Rachel you are so amazing at what you do! Thank you so much
                    for everything! I felt so beautiful on our wedding day. Not
                    only are you superwoman with a makeup brush, you are so
                    lovely and such a delight to have around the morning of the
                    wedding!! Any bride would be very lucky to have you part of
                    her big day, I am very grateful that you were part of mine
                  </p>
                </div>
              </div> 
              </SwiperSlide>
                
                
              </div>
              
            </div>
            </Swiper>
          </div>
        </div>
      </div> */}

      {/* <Test_slider /> */}

      <div className="work">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="work__item large__item set-bg"
                    data-setbg="img/work/work-1.jpg"
                    style={{ backgroundImage: `url(${work1})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="work__item set-bg"
                    data-setbg="img/work/work-2.jpg"
                    style={{ backgroundImage: `url(${work2})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                  <div
                    className="work__item set-bg"
                    data-setbg="img/work/work-3.jpg"
                    style={{ backgroundImage: `url(${work3})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="work__item large__item set-bg"
                data-setbg="img/work/work-4.jpg"
                style={{ backgroundImage: `url(${work4})` }}
              >
                <div className="work__item__text">
                  <span>Latest projects</span>
                  <h6>Brown hair wave</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="work__item set-bg"
                    data-setbg="img/work/work-5.jpg"
                    style={{ backgroundImage: `url(${work5})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div
                    className="work__item set-bg"
                    data-setbg="img/work/work-6.jpg"
                    style={{ backgroundImage: `url(${work6})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div
                    className="work__item set-bg"
                    data-setbg="img/work/work-7.jpg"
                    style={{ backgroundImage: `url(${work7})` }}
                  >
                    <div className="work__item__text">
                      <span>Latest projects</span>
                      <h6>Brown hair wave</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="latest-blog spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span>makeup Artist tips</span>
                <h2>Makeup artist tips</h2>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-1.jpg"
                    alt=""
                    src={blog1}
                  />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faImage} />
                  </a>
                  <h4>
                    <a href="#">Tips From Makeup Artists You’ve Never Heard</a>
                  </h4>
                  <ul>
                    <li>
                      <span>Rosie Chapman</span>
                    </li>
                    <li>Jun 15, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-2.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/blog/blog-2.jpg"
                  />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faFileLines} />
                  </a>
                  <h4>
                    <a href="#">
                      Everything I Learned From A Professional Makeup Artist
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <span>Rosie Chapman</span>
                    </li>
                    <li>Jun 15, 2020</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-3.jpg"
                    alt=""
                    src="https://preview.colorlib.com/theme/makeupartist/img/blog/blog-3.jpg"
                  />
                </div>
                <div className="blog__item__text">
                  <a
                    href=""
                    className="blog__item__cat video-popup"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                  <h4>
                    <a href="#">
                      10 Makeup-Artist Tips That Surprised (and Delighted) Us
                    </a>
                  </h4>
                  <ul>
                    <li>
                      <span>Rosie Chapman</span>
                    </li>
                    <li>Jun 15, 2020</li>
                  </ul>
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
                    
                      <select className="nice-select" >
                      <span className="current">Choose services</span>
                        <option className="option selected" value="">Choose services</option>
                        <option className="option" value="">Beauty</option>
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


      <ViewProduct />
    </div>
  );
};

export default Home;
