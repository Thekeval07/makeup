import React from "react";
import {  faImage,faFileLines,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import blog_1 from "../Image/blog-1.jpg.webp"
import blog_2 from "../Image/blog-2.jpg.webp"
import blog_3 from "../Image/blog-3.jpg.webp"
import blog_4 from "../Image/blog-4.jpg.webp"
import blog_5 from "../Image/blog-5.jpg.webp"
import blog_6 from "../Image/blog-6.jpg.webp"
import blog_7 from "../Image/blog-7.jpg.webp"
import blog_8 from "../Image/blog-8.jpg.webp"
import blog_9 from "../Image/blog-9.jpg.webp"
import blog from "../Image/blog-breadcrumb.jpg.webp"
import Breandrum from "../Components/Breandrum";

const Blog = () => {
  return (
    <div>

<Breandrum name={'Blog'} image={blog} />
      

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={blog_1} alt="" />
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
                  <img src={blog_2} alt="" />
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
                  <img src={blog_3} alt="" />
                </div>
                <div className="blog__item__text">
                  <a
                    href=" "
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
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src={blog_4} alt="" />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faImage} />
                  </a>
                  <h4>
                    <a href="#">
                      The urban decay favourites team cult beauty swear by
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
                  <img src={blog_5} alt="" />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faFileLines} />
                  </a>
                  <h4>
                    <a href="#">
                      Glow recipe have launched your latest go to beauty
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
                  <img src={blog_6} alt="" />
                </div>
                <div className="blog__item__text">
                  <a
                    href=" "
                    className="blog__item__cat video-popup"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                  <h4>
                    <a href="#">
                      Supersize me: The very best XL beauty products to stock
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
                  <img src={blog_7} alt="" />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faImage} />
                  </a>
                  <h4>
                    <a href="#">Why now is a great time to fall for fresh</a>
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
                  <img src={blog_8} alt="" />
                </div>
                <div className="blog__item__text">
                  <a href="#" className="blog__item__cat">
                  <FontAwesomeIcon icon={faFileLines} />
                  </a>
                  <h4>
                    <a href="#">
                      Meet the brands making major sustainable strides
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
                  <img src={blog_9} alt="" />
                </div>
                <div className="blog__item__text">
                  <a
                    href=" "
                    className="blog__item__cat video-popup"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </a>
                  <h4>
                    <a href="#">
                      Everything you need to know about cult conscious
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
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="more__btn">
                <a href="#">View more posts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
