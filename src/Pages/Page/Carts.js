
import React, { useState} from 'react';
import cart from "../Page/image/cart-breadcrumb.jpg";
import cart_1 from "../Page/image/cart-1.jpg.webp";
import cart_2 from "../Page/image/cart-2.jpg.webp";
import cart_3 from "../Page/image/cart-3.jpg.webp";
import cart_4 from "../Page/image/cart-4.jpg.webp";
import Breandrum from "../../Components/Breandrum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMinus,faPlus,faXmark ,FaFacebookF } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Carts = () => {

  let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<100)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>1)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
 
  return (
    <div>
      <Breandrum name={"Shopping Cart"} image={cart}/>
    
      {/* cart */}

      <section className="cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src={cart_1} alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                          <span>$23.0</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="icon_minus-06 dec qtybtn" onClick={decNum}><FontAwesomeIcon icon={faMinus} /></span>
                            <input type="text"  value={num} onChange={handleChange} />
                            <span className="icon_plus inc qtybtn" onClick={incNum  } ><FontAwesomeIcon icon={faPlus} /></span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$18.0</td>
                      <td className="cart__close">
                        <i className="fa fa-close" ><FontAwesomeIcon icon={faXmark} /></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src={cart_2} alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                          <span>$8.0</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="icon_minus-06 dec qtybtn" onClick={decNum}><FontAwesomeIcon icon={faMinus} /></span>
                            <input type="text"  value={num} onChange={handleChange} />
                            <span className="icon_plus inc qtybtn" onClick={incNum  } ><FontAwesomeIcon icon={faPlus} /></span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$24.0</td>
                      <td className="cart__close">
                        <i className="fa fa-close" ><FontAwesomeIcon icon={faXmark} /></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src={cart_3} alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                          <span>$35.0</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="icon_minus-06 dec qtybtn" onClick={decNum}><FontAwesomeIcon icon={faMinus} /></span>
                            <input type="text"  value={num} onChange={handleChange} />
                            <span className="icon_plus inc qtybtn" onClick={incNum  } ><FontAwesomeIcon icon={faPlus} /></span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$210.0</td>
                      <td className="cart__close">
                        <i className="fa fa-close" ><FontAwesomeIcon icon={faXmark} /></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart__item">
                        <div className="cart__item__pic">
                          <img src={cart_4} alt="" />
                        </div>
                        <div className="cart__item__text">
                          <h6>Earth &amp; Ocean eyeshadow palette</h6>
                          <span>$17.0</span>
                        </div>
                      </td>
                      <td className="cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <span className="icon_minus-06 dec qtybtn" onClick={decNum}><FontAwesomeIcon icon={faMinus} /></span>
                            <input type="text"  value={num} onChange={handleChange} />
                            <span className="icon_plus inc qtybtn" onClick={incNum  } ><FontAwesomeIcon icon={faPlus} /></span>
                          </div>
                        </div>
                      </td>
                      <td className="cart__price">$32.0</td>
                      <td className="cart__close">
                        <i className="fa fa-close" ><FontAwesomeIcon icon={faXmark} /></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart__btn">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="cart__btn__continue">
                      <a href="#">Continue shopping</a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-7">
                    <div className="cart__btn__right">
                      <a href="#">Clear shopping cart</a>
                      <a href="#">Update cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__coupon">
                <p>Enter coupon code. It will be applied at checkout.</p>
                <form action="#">
                  <input type="text" placeholder="Your code here" />
                  <button type="submit">APPLY</button>
                </form>
              </div>
              <div className="cart__total">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal <span>$284.00</span>
                  </li>
                  <li>
                    Total <span>$284.00</span>
                  </li>
                </ul>
                <Link href="/cart">PROCEED TO CHECKOUT</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carts;
