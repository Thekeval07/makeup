import React from "react";
import shop from "../Image/shop-breadcrumb.jpg.webp";
import product_1 from '../Image/product-1.jpg.webp'
import product_2 from '../Image/product-2.jpg.webp'
import product_3 from '../Image/product-3.jpg.webp'
import product_4 from '../Image/product-4.jpg.webp'
import product_5 from '../Image/product-5.jpg.webp'
import product_6 from '../Image/product-6.jpg.webp'
import product_7 from '../Image/product-7.jpg.webp'
import product_8 from '../Image/product-8.jpg.webp'
import product_9 from '../Image/product-9.jpg.webp'
import product_10 from '../Image/product-10.jpg.webp'
import product_11 from '../Image/product-11.jpg.webp'
import product_12 from '../Image/product-12.jpg.webp'
import Breandrum from "../Components/Breandrum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHeart,faEye,faBagShopping } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  return (
    <div>
      <Breandrum name={'Shop'} image={shop} />

      

      <section className="products spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="product__widget__show">
                <p>Showing 1–9 of 14 results</p>
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="product__widget__filter">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <select className="nice-select" >
                    <span className="current">Categories</span>
                      <option className="option selected" value="">Categories</option>
                      <option className="option" value="">Beauty</option>
                      <option className="option" value="">Wedding</option>
                    </select>
                    {/* <div className="nice-select" tabIndex={0}>
                      <span className="current">Categories</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Categories
                        </li>
                        <li data-value="" className="option">
                          Beauty
                        </li>
                        <li data-value="" className="option">
                          Wedding
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                  <select className="nice-select" >
                    <span className="current">Filter by Price</span>
                      <option className="option selected" value="">Filter by Price</option>
                      <option className="option" value="">$25</option>
                      <option className="option" value="">$50</option>
                    </select>
                    {/* <div className="nice-select" tabIndex={0}>
                      <span className="current">Filter by Price</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Filter by Price
                        </li>
                        <li data-value="" className="option">
                          $25
                        </li>
                        <li data-value="" className="option">
                          $50
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                  <select className="nice-select" >
                    <span className="current">Sort by popularity</span>
                      <option className="option selected" value="">Sort by popularity</option>
                      <option className="option" value="">1-10</option>
                      <option className="option" value="">2-20</option>
                    </select>
                    {/* <div className="nice-select" tabIndex={0}>
                      <span className="current">Sort by popularity</span>
                      <ul className="list">
                        <li data-value="" className="option selected">
                          Sort by popularity
                        </li>
                        <li data-value="" className="option">
                          1-10
                        </li>
                        <li data-value="" className="option">
                          2-20
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-1.jpg"
                  style={{
                    backgroundImage: `url(${product_1})`                  
                  }}
                >
                  <div className="product__item__hover">
                   <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-2.jpg"
                  style={{
                    backgroundImage: `url(${product_2})`                  
                  }}
                >
                  <div className="product__item__hover">
                 <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-3.jpg"
                  style={{
                    backgroundImage: `url(${product_3})`                  
                  }}
                >
                  <div className="product__item__hover">
                 <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-4.jpg"
                  style={{
                    backgroundImage: `url(${product_4})`                  
                  }}
                >
                  <div className="product__item__hover">
                 <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-5.jpg"
                  style={{
                    backgroundImage: `url(${product_5})`                  
                  }}
                >
                 <div className="product__item__hover">
                 <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-6.jpg"
                  style={{
                    backgroundImage: `url(${product_6})`                  
                  }}
                >
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-7.jpg"
                  style={{
                    backgroundImage: `url(${product_7})`                  
                  }}
                >
                  <div className="product__item__hover">
                  <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-8.jpg"
                  style={{
                    backgroundImage: `url(${product_8})`                  
                  }}
                >
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-9.jpg"
                  style={{
                    backgroundImage: `url(${product_9})`                  
                  }}
                >
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-10.jpg"
                  style={{
                    backgroundImage: `url(${product_10})`                  
                  }}
                >
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-11.jpg"
                  style={{
                    backgroundImage: `url(${product_11})`                  
                  }}
                >
                  <div className="product__item__hover">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-12.jpg"
                  style={{
                    backgroundImage: `url(${product_12})`
                  }}
                >
                  <div className="product__item__hover">
                  <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-bag" ><FontAwesomeIcon icon={faBagShopping} /></i>
                        </a>{" "}
                        <span>Add to Cart</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-eye"><FontAwesomeIcon icon={faEye} /></i>
                        </a>{" "}
                        <span>Keep an eye</span>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" ><FontAwesomeIcon icon={faHeart} /></i>
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

export default Shop;
