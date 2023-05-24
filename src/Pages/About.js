import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Slider from "react-slick";
import team1 from '../Image/team-1.jpg.webp'
import team2 from '../Image/team-2.jpg.webp'
import team3 from '../Image/team-3.jpg.webp'
import team4 from '../Image/team-4.jpg.webp'
import about from '../Image/about-breadcrumb.jpg.webp'
import news from '../Image/newslatter-bg.jpg.webp'
import Test_slider from "../Components/Test_slider";
import Breandrum from "../Components/Breandrum";

const About = () => {
  const Slider ={
        
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  
}
  return (
    <div>
      <Breandrum name={'About'} image={about} />

      

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

      <section className="team spad">
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-6 text-center">
        <div className="section-title">
          <span>Meet our team</span>
          <h2>Makeup Artist</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="team__slider owl-carousel owl-loaded owl-drag">
          <slider {...Slider}>       
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            // style={{
            //   transform: "translate3d(-1140px, 0px, 0px)",
            //   transition: "all 0s ease 0s",
            //   width: 3705
            // }}
          >
            <div className="owl-item cloned" >
              <div className="col-lg-3">
                <div className="team__item">
                  <div className="team__item__pic">
                    <img src={team1} alt="" />
                  </div>
                  <div className="team__item__text">
                    <h5>Olivia Rhodes</h5>
                    <span>Makeup</span>
                    <p>Solor sit amet, consectetur adipiscing elit aliqua.</p>
                    <div className="team__item__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
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
            <div className="owl-item cloned" >
              <div className="col-lg-3">
                <div className="team__item team__item__top">
                  <div className="team__item__text">
                    <h5>Laura Stephens</h5>
                    <span>Hair stylist</span>
                    <p>Solor sit amet, consectetur adipiscing elit aliqua.</p>
                    <div className="team__item__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="team__item__pic">
                    <img src={team2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" >
              <div className="col-lg-3">
                <div className="team__item">
                  <div className="team__item__pic">
                    <img src={team3} alt="" />
                  </div>
                  <div className="team__item__text">
                    <h5>Daisy Simmons</h5>
                    <span>Manager</span>
                    <p>Solor sit amet, consectetur adipiscing elit aliqua.</p>
                    <div className="team__item__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
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
            <div className="owl-item cloned" >
              <div className="col-lg-3">
                <div className="team__item team__item__top">
                  <div className="team__item__text">
                    <h5>Louise Wagner</h5>
                    <span>Photography</span>
                    <p>Solor sit amet, consectetur adipiscing elit aliqua.</p>
                    <div className="team__item__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="team__item__pic">
                    <img src={team4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        
        
          </slider>
      </div>
    </div>
  </div>
</section>

<Test_slider/>




<div
  className="newslatter set-bg"
  data-setbg="img/newslatter-bg.jpg"
  style={{ backgroundImage: `url(${news})` }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="newslatter__text">
          <h2>Subscribe to our newsletter</h2>
        </div>
      </div>
      <div className="col-lg-5 offset-lg-1">
        <div className="newslatter__form">
          <form action="#">
            <input type="text" placeholder="Email" />
            <button type="submit">Subcribe</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
