import React from 'react'
import detail from'../Page/image/details-hero.jpg.webp'
import blog_detail from'../Page/image/blog-details.jpg.webp'
import prev from'../Page/image/prev.jpg.webp'
import next from'../Page/image/next.jpg.webp'


const Bolg_details = () => {
  return (
    <div>
      
      <section className="blog-details">
        <div className="blog__datails__hero">
          <img src={detail} alt="" />
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__item__cat">
                  <i className="fa fa-file-text-o" />
                </div>
                <div className="blog__details__title">
                  <h2>
                    15 Makeup Artist Pro Tricks to Take Your Game to the Next
                    Level
                  </h2>
                  <ul>
                    <li>Rosie Chapman</li>
                    <li>Jun 15, 2020</li>
                    <li>128 Comments</li>
                  </ul>
                  <p>
                    The NBA is restarting its season after the league’s Board of
                    Governors approved commissioner Adam Silver’s plan with a
                    29-1 vote on Thursday. That plan deviates significantly from
                    NBA norms. All 22 remaining teams will finish the season at
                    a single site in Orlando, at Disney World, and for the first
                    time in its history, the league will have a play-in format
                    for the final postseason seeds in each conference.
                  </p>
                </div>
                <div className="blog__details__item">
                  <h5>2. Get rid of redness with eye drops</h5>
                  <p>
                    Eye drops contain ingredients that constrict the blood
                    vessels in your eyes, therefore making the redness go away.
                    This same principle applies to pimples or other redness on
                    the face as well. Just saturate a cotton swab with some
                    Visine Original Eye Drops and dab it onto the specific area.
                  </p>
                </div>
                <div className="blog__details__item">
                  <h5>
                    3. Brighten up skin with peach or apricot toned primers
                  </h5>
                  <p>
                    Peach and apricot toned primers, such as Smashbox’s Photo
                    Finish Color Correcting Foundation Primer in Apricot are
                    fantastic for brightening up dull and tired skin, especially
                    for those with darker complexions. The colored tint in the
                    primer helps correct hyper-pigmentation and is also
                    excellent for counteracting blue or purple-toned dark
                    circles.
                  </p>
                </div>
                <div className="blog__details__pic">
                  <img src={blog_detail} alt="" />
                </div>
                <div className="blog__details__item">
                  <h5>4. Powder in-between primer and foundation</h5>
                  <p>
                    One way to make sure your makeup lasts all day is to set
                    your primer with a powder before applying foundation. It
                    sounds odd (since we’ve always been told to never apply
                    liquids on top of powders), but it actually works. Apply
                    your regular face primer and dust a lightweight translucent
                    powder over top.
                  </p>
                  <p>
                    By doing this, you are locking it in, ensuring that the
                    primer won’t slide around and disturb your foundation. But
                    remember,
                  </p>
                </div>
                <div className="blog__details__widget">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="blog__details__widget__tag">
                        <span>Tag:</span>
                        <a href="#">Beauty</a>
                        <a href="#">Makeup</a>
                        <a href="#">Cosmetic</a>
                        <a href="#">Tips &amp; Tricks</a>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="blog__details__widget__social">
                        <span>Share:</span>
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
                <div className="blog__details__btns">
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="blog__details__btns__list">
                        <span>Previous</span>
                        <a href="#" className="blog__details__btns__item">
                          <div className="blog__details__btns__item__pic">
                            <img src={prev} alt="" />
                          </div>
                          <div className="blog__details__btns__item__text">
                            <h6>Why now is a great time to fall for fresh</h6>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2 col-md-6 col-sm-6">
                      <div className="blog__details__btns__list blog__details__btns__list--next">
                        <span>Up Next</span>
                        <a href="#" className="blog__details__btns__item">
                          <div className="blog__details__btns__item__pic">
                            <img src={next} alt="" />
                          </div>
                          <div className="blog__details__btns__item__text">
                            <h6>
                              Everything you need to know about cult conscious
                            </h6>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog__details__comment">
                  <h4>28 Comments</h4>
                  <div className="blog__details__comment__item">
                    <p>
                      Congratulations Erin and Chris and your entire team! An
                      achievement well-earned and much deserved! Thank you for
                      advocating
                    </p>
                    <div className="blog__details__comment__author">
                      <h5>Franklin Flower Farm</h5>
                      <ul>
                        <li>on April 20th 2020</li>
                        <li>
                          <a href="#">Reply</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__details__comment__item">
                    <p>
                      Congratulations Erin and Chris and your entire team! An
                      achievement well-earned and much deserved! Thank you for
                      advocating
                    </p>
                    <div className="blog__details__comment__author">
                      <h5>Franklin Flower Farm</h5>
                      <ul>
                        <li>on April 20th 2020</li>
                        <li>
                          <a href="#">Reply</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="blog__details__comment__item">
                    <p>
                      Congratulations Erin and Chris and your entire team! An
                      achievement well-earned and much deserved! Thank you for
                      advocating
                    </p>
                    <div className="blog__details__comment__author">
                      <h5>Franklin Flower Farm</h5>
                      <ul>
                        <li>on April 20th 2020</li>
                        <li>
                          <a href="#">Reply</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="show__all">
                    <a href="#">Show all comment</a>
                  </div>
                </div>
                <div className="blog__details__form">
                  <h4>Leave a COmment</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <input type="text" placeholder="Email" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Comment" defaultValue={""} />
                        <p>
                          For security, use of Google’s reCAPTCHA service is
                          required which is subject to the Google Privacy Policy
                          and Terms of Use. <span>I agree to these terms.</span>
                        </p>
                        <button type="submit" className="site-btn">
                          Post comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Bolg_details
