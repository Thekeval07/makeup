import React from "react";
import checkout from '../Page/image/checkout-breadcrumb.jpg.webp'
import Breandrum from "../../Components/Breandrum";


const CheckOut = () => {
  return (
    <div>
      <Breandrum name={'Chakout'} image={checkout} />
      

      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form action="#">
              <div className="row">
                <div className="col-lg-8">
                  <div className="checkout__form__top">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <h5>Contact information</h5>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <h6>
                          Already have an account? <a href="#">Login</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="input__top">
                    <input
                      type="text"
                      placeholder="Email or mobile phone number"
                    />
                    <label htmlFor="kp">
                      Keep me up to dateon news and exclusive offers
                      <input type="checkbox" id="kp" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="checkout__address">
                    <h5>Shipping address</h5>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input__item">
                          <p>
                            First name<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input__item">
                          <p>
                            Last name<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input__item">
                          <p>
                            Contact<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                        <div className="input__item double__input">
                          <p>
                            Address<span>*</span>
                          </p>
                          <input type="text" placeholder="Steet address" />
                          <input
                            type="text"
                            placeholder="Apartment, suite, unite ect ( optinal )"
                          />
                        </div>
                        <div className="input__item">
                          <p>
                            Town/City<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                        <div className="input__item">
                          <p>
                            Country/State<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                        <div className="input__item">
                          <p>
                            Postcode/Zip<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                        <div className="input__item">
                          <p>
                            Oder note<span>*</span>
                          </p>
                          <input
                            type="text"
                            placeholder="Note about your order, e.g, special noe for delivery"
                          />
                        </div>
                        <label htmlFor="sv">
                          Save this infomation for next time
                          <input type="checkbox" id="sv" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="checkout__proceed">
                    <div className="checkout__proceed__title">
                      <h5>Your order</h5>
                    </div>
                    <div className="checkout__proceed__coupon">
                      <p>Enter coupon code. It will be applied at checkout.</p>
                      <div className="coupon__input">
                        <input type="text" placeholder="Your code here" />
                        <button type="submit">APPLY</button>
                      </div>
                    </div>
                    <div className="checkout__proceed__product">
                      <h5>Products</h5>
                      <ul>
                        <li>
                          1x Succulent gym <span>$21.0</span>
                        </li>
                        <li>
                          1x The affogato <span>$32.0</span>
                        </li>
                        <li>
                          1x The dublin <span>$26.0</span>
                        </li>
                        <li>
                          1x The green thumb <span>$12.0</span>
                        </li>
                      </ul>
                    </div>
                    <ul className="checkout__proceed__total">
                      <li>
                        Subtotal <span>$91.0</span>
                      </li>
                      <li>
                        Total <span>$91.0</span>
                      </li>
                    </ul>
                    <div className="checkout__proceed__widget">
                      <label htmlFor="cp">
                        Cheque payment
                        <input type="checkbox" id="cp" />
                        <span className="checkmark" />
                      </label>
                      <label htmlFor="paypal">
                        PayPal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <button type="submit" className="proceed__btn">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
