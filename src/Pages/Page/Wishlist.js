import React from "react";
import Breandrum from "../../Components/Breandrum";
import wishlist from "../Page/image/wishlist-breadcrumb.jpg.webp";
import wishlist_1 from '..//Page/image/wishlist-1.jpg.webp'
import wishlist_2 from '..//Page/image/wishlist-2.jpg.webp'
import wishlist_3 from '..//Page/image/wishlist-3.jpg.webp'
import wishlist_4 from '..//Page/image/wishlist-4.jpg.webp'
const Wishlist = () => {
  return (
    <div>
      <Breandrum name={"Wishlist"} image={wishlist} />

      {/* ............................wishlist................................... */}

      <section className="wishlist spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wishlist__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Unit price</th>
                      <th>Stock</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="wishlist__item">
                        <div className="wishlist__item__pic">
                          <img src={wishlist_1} alt="" />
                        </div>
                        <div className="wishlist__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                        </div>
                      </td>
                      <td className="wishlist__price">$21.00</td>
                      <td className="wishlist__stock">In stock</td>
                      <td className="wishlist__btn">
                        <a href="#">Add To Cart</a>
                      </td>
                      <td className="wishlist__close">
                        <i className="fa fa-close" />
                      </td>
                    </tr>
                    <tr>
                      <td className="wishlist__item">
                        <div className="wishlist__item__pic">
                          <img src={wishlist_2} alt="" />
                        </div>
                        <div className="wishlist__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                        </div>
                      </td>
                      <td className="wishlist__price">$21.00</td>
                      <td className="wishlist__stock">In stock</td>
                      <td className="wishlist__btn">
                        <a href="#">Add To Cart</a>
                      </td>
                      <td className="wishlist__close">
                        <i className="fa fa-close" />
                      </td>
                    </tr>
                    <tr>
                      <td className="wishlist__item">
                        <div className="wishlist__item__pic">
                          <img src={wishlist_3} alt="" />
                        </div>
                        <div className="wishlist__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                        </div>
                      </td>
                      <td className="wishlist__price">$21.00</td>
                      <td className="wishlist__stock">In stock</td>
                      <td className="wishlist__btn">
                        <a href="#">Add To Cart</a>
                      </td>
                      <td className="wishlist__close">
                        <i className="fa fa-close" />
                      </td>
                    </tr>
                    <tr>
                      <td className="wishlist__item">
                        <div className="wishlist__item__pic">
                          <img src={wishlist_4} alt="" />
                        </div>
                        <div className="wishlist__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                        </div>
                      </td>
                      <td className="wishlist__price">$21.00</td>
                      <td className="wishlist__stock">In stock</td>
                      <td className="wishlist__btn">
                        <a href="#">Add To Cart</a>
                      </td>
                      <td className="wishlist__close">
                        <i className="fa fa-close" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
