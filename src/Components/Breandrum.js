import React from 'react'
// import Background from "../Page/image/cart-breadcrumb.jpg";


const Breandrum = (props) => {
    // var sectionStyle = {
        
    //     backgroundImage: "url(" + { Background } + ")"
    //   };
      
  return (
    <div>
         <div
        className="breadcrumb-option set-bg"
        data-setbg="img/breadcrumb/cart-breadcrumb.jpg"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__text">
                <h2>{props.name}</h2>
                <div className="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <span>{props.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Breandrum