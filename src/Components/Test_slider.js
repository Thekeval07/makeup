import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import demo from "../Image/quote-icon.png.webp"
import ta_1 from "../Image/ta-1.png.webp"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay,Navigation } from "swiper";


const Test_slider = () => {
  return (
    <div>
      <div className="testimonial spad">
        <div className="container">
          <div className="row">
          <Swiper
             spaceBetween={30}
             pagination={{
               clickable: true,
             }}
             modules={[Pagination]}
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
      </div>

    </div>
  )
}

export default Test_slider
