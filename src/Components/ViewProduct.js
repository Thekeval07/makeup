import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pro1 from '../Image/product-1.jpg.webp'
import pro2 from '../Image/product-2.jpg.webp'
import pro3 from '../Image/product-3.jpg.webp'
import pro4 from '../Image/product-4.jpg.webp'


// import required modules

const ViewProduct = () => {

    const sliderSettings ={
        
      
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear", 
    }
  return (
    <div>
      <section className="beauty-products spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="section-title">
                <span>Beauty Products</span>
                <h2>Beauty products</h2>
              </div>
            </div>
          </div>
        <Slider {...sliderSettings}> 
          <div className="row">
            <div className="product__slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" >
                  <div className="owl-item" >
                    <div className="col-lg-3">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg="img/product/product-1.jpg"
                          style={{
                            backgroundImage: `url(${pro1})`,
                          }}
                        >
                          <div className="product__item__hover">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-bag" />
                                </a>{" "}
                                <span>Add to Cart</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-eye" />
                                </a>{" "}
                                <span>Keep an eye</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart" />
                                </a>{" "}
                                <span>Love this</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__item__text">
                          <span>Palettes</span>
                          <h6>
                            <a href="#">Leather shopper bag</a>
                          </h6>
                          <div className="price">$49.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" >
                    <div className="col-lg-3">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg="img/product/product-2.jpg"
                          style={{
                            backgroundImage: `url(${pro2})`,
                          }}
                        >
                          <div className="product__item__hover">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-bag" />
                                </a>{" "}
                                <span>Add to Cart</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-eye" />
                                </a>{" "}
                                <span>Keep an eye</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart" />
                                </a>{" "}
                                <span>Love this</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__item__text">
                          <span>Palettes</span>
                          <h6>
                            <a href="#">Leather shopper bag</a>
                          </h6>
                          <div className="price">$49.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" >
                    <div className="col-lg-3">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg="img/product/product-3.jpg"
                          style={{
                            backgroundImage: `url(${pro3})`,
                          }}
                        >
                          <div className="product__item__hover">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-bag" />
                                </a>{" "}
                                <span>Add to Cart</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-eye" />
                                </a>{" "}
                                <span>Keep an eye</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart" />
                                </a>{" "}
                                <span>Love this</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__item__text">
                          <span>Palettes</span>
                          <h6>
                            <a href="#">Leather shopper bag</a>
                          </h6>
                          <div className="price">$49.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" >
                    <div className="col-lg-3">
                      <div className="product__item">
                        <div
                          className="product__item__pic set-bg"
                          data-setbg="img/product/product-4.jpg"
                          style={{
                            backgroundImage: `url(${pro4})`,
                          }}
                        >
                          <div className="product__item__hover">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fa fa-shopping-bag" />
                                </a>{" "}
                                <span>Add to Cart</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-eye" />
                                </a>{" "}
                                <span>Keep an eye</span>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fa fa-heart" />
                                </a>{" "}
                                <span>Love this</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product__item__text">
                          <span>Palettes</span>
                          <h6>
                            <a href="#">Leather shopper bag</a>
                          </h6>
                          <div className="price">$49.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                  
                  
                </div>
              </div>
              
            </div>
          </div>
                </Slider>  
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="more__btn">
                <a href="#">VIEW ALL PRODUCTS</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewProduct;
