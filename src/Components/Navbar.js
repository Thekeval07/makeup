import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import search from '../Image/search.png.webp'


const Navbar = () => {
  const [data, setdata] = useState(false);
  const demo = () => {
    setdata(!data);
  };
  function btn_data() {
    
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>

     {data ?
     
     <div class="offcanvas-menu-overlay active">
      <div className="offcanvas-menu-wrapper active">
        <div className="offcanvas__search search-switch">
          <img
            data-cfsrc="img/icon/search.png"
            alt=""
            src="https://preview.colorlib.com/theme/makeupartist/img/icon/search.png"
          />
        </div>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img
              data-cfsrc="img/logo.png"
              alt=""
              src="https://preview.colorlib.com/theme/makeupartist/img/logo.png"
            />
          </a>
        </div>
        <div id="mobile-menu-wrap">
          <div className="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
             
              className="slicknav_btn slicknav_collapsed"
              style={{ outline: "none" }}
            >
              <span className="slicknav_menutxt">MENU</span>
              <span className="slicknav_icon">
              <FontAwesomeIcon icon={faBars} />
              </span>
            </a>
            <nav
              className="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              
            >
              <ul>
                <li className="active">
                  <Link to="/" onClick={btn_data}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" onClick={btn_data}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="services" onClick={btn_data}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="shop"  onClick={btn_data}>
                    Shop
                  </Link>
                </li>
                <li className="slicknav_collapsed slicknav_parent">
                  {/* <a
                    href="#"
                    
                    aria-haspopup="true"
                   
                    className="slicknav_item slicknav_row"
                    
                  /> */}
                  <Link href="#">Pages</Link>
                  <span className="slicknav_arrow">►</span>
                  <ul
                    className="dropdown slicknav_hidden"
                    role="menu"
                    aria-hidden="true"
                    
                  >
                    <li>
                      <Link hto="work"  onClick={btn_data}>
                        works
                      </Link>
                    </li>
                    <li>
                      <Link to="carts"  onClick={btn_data}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="checkout"  onClick={btn_data}>
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link to="wishlist"  onClick={btn_data}>
                        wishlist
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="product_details"onClick={btn_data}> Product Details </Link>
                    </li>
                    <li>
                      <Link to="blog_details" onClick={btn_data} > Blog Details </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="blog"  onClick={btn_data}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="contact"  onClick={btn_data}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="offcanvas__widget">
          <a href="#" className="primary-btn">
            Get a Quote
          </a>
        </div>
      </div> </div> : null}

      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <Link href="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 hide_mobile">
              <div className="header__opetions">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="about">About</Link>
                    </li>
                    <li>
                      <Link to="services">Services</Link>
                    </li>
                    <li>
                      <Link to="shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="works">works</Link>
                        </li>
                        <li>
                          <Link to="carts">Cart</Link>
                        </li>
                        <li>
                          <Link to="checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="wishlist">wishlist</Link>
                        </li>
                        <li>
                          <Link to="product_details">Product Details</Link>
                        </li>
                        <li>
                          <Link to="blog_details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header__option__right">
                  <div className="search__option search-switch">
                    <Link to='search'>
                        <img src={search} />
                    </Link>
                  </div>
                  <a href="#" className="primary-btn">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={demo}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
