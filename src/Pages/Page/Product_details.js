import React from "react";
import product_big_1 from '../Page/image/product-big-1.jpg.webp'
import product_big_2 from '../Page/image/product-big-2.jpg.webp'
import product_big_3 from '../Page/image/product-big-3.jpg.webp'
import product_big_4 from '../Page/image/product-big-4.jpg.webp'

const Product_details = (props) => {
  return (
    <div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    src={product_big_1}
                    alt=""
                    className="product__details__big__pic"
                  />
                </div>
                <div className="product__details__thumb">
                  <div
                    className="pt__item"
                    data-imgbigurl="img/product/details/product-big-2.jpg"
                  >
                    <img src={product_big_2} alt="" />
                  </div>
                  <div
                    className="pt__item active"
                    data-imgbigurl="img/product/details/product-big-1.jpg"
                  >
                    <img src={product_big_1} alt="" />
                  </div>
                  <div
                    className="pt__item"
                    data-imgbigurl="img/product/details/product-big-3.jpg"
                  >
                    <img src={product_big_3} alt="" />
                  </div>
                  <div
                    className="pt__item"
                    data-imgbigurl="img/product/details/product-big-4.jpg"
                  >
                    <img src={product_big_4} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <div className="product__details__text__title">
                  <h4>Earth &amp; Ocean eyeshadow palette</h4>
                  <div className="price">$210.0</div>
                  <ul>
                    <li>
                      <div className="rating">
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                    </li>
                    <li>
                      <span>03 reviews</span>
                    </li>
                    <li>
                      <span>Write a review</span>
                    </li>
                  </ul>
                </div>
                <div className="product__details__info">
                  <ul>
                    <li>
                      Categories: <span>Shoes</span>
                    </li>
                    <li>
                      Product code: <span>P.S 001</span>
                    </li>
                    <li>
                      Reward points: <span>30</span>
                    </li>
                    <li>
                      Availability: <span>In Stock</span>
                    </li>
                  </ul>
                  <div className="product__details__info__color">
                    <h6>Color:</h6>
                    <div className="product__details__info__color__items">
                      <div className="pc__item">
                        <input type="radio" id="pc-1" />
                        <label htmlFor="pc-1" className="active" />
                      </div>
                      <div className="pc__item">
                        <input type="radio" id="pc-2" />
                        <label htmlFor="pc-2" className="color-2" />
                      </div>
                      <div className="pc__item">
                        <input type="radio" id="pc-3" />
                        <label htmlFor="pc-3" className="color-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product__details__widget">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="icon_minus-06 dec qtybtn" />
                      <input type="text" defaultValue={1} />
                      <span className="icon_plus inc qtybtn" />
                    </div>
                  </div>
                  <a href="#" className="pd__cart">
                    ADD TO CART
                  </a>
                  <a href="#" className="heart__btn">
                    <img src="img/icon/heart.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product__details__desc__tab">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Shipping &amp; Returns
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      Reviews ( 03 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <p>
                      Operational change management inside of workflows to
                      establish a framework. Taking seamless key performance
                      indicators offline to maximise the long tail. Keeping your
                      eye on the ball while performing a deep dive on the
                      start-up mentality to derive convergence on cross-platform
                      integration.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <p>
                      Operational change management inside of workflows to
                      establish a framework. Taking seamless key performance
                      indicators offline to maximise the long tail. Keeping your
                      eye on the ball while performing a deep dive on the
                      start-up mentality to derive convergence.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <p>
                      Operational change management inside of workflows to
                      establish a framework. Taking seamless key performance
                      indicators offline to maximise the long tail. Keeping your
                      eye on the ball while performing a deep dive on the to
                      derive convergence on cross-platform integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="related__products">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="section-title">
                  <span>Related Products</span>
                  <h2>Related products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="product__slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1140px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 3705,
                    }}
                  >
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-2.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-2.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-3.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-3.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-4.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-4.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-4.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-4.jpg")',
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
                    <div className="owl-item active">
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-1.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-1.jpg")',
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
                              backgroundImage:
                                'url("img/product/product-2.jpg")',
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
                              backgroundImage:
                                'url("img/product/product-3.jpg")',
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
                              backgroundImage:
                                'url("img/product/product-4.jpg")',
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
                    <div className="owl-item" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-4.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-4.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-1.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-1.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-2.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-2.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-3.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-3.jpg")',
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
                    <div className="owl-item cloned" >
                      <div className="col-lg-3">
                        <div className="product__item">
                          <div
                            className="product__item__pic set-bg"
                            data-setbg="img/product/product-4.jpg"
                            style={{
                              backgroundImage:
                                'url("img/product/product-4.jpg")',
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
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="fa fa-angle-left">
                      <i />
                    </i>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-angle-right">
                      <i />
                    </i>
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product_details;
