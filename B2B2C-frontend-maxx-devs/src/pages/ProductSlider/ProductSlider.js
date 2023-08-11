import React from "react";
import "./ProductSlider.scss";
import "../../components/ContentGroupProd/ContentGroupProd.scss";
import CommentsImg from "../../assets/images/comments.png";
import AwardImg from "../../assets/images/award.png";
import ProductImg2 from "../../assets/images/product/product-2.jpg";

import Slider from "react-slick";

function ProductSlider({ title }) {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const product = [
    { img: ProductImg2 },
    { img: ProductImg2 },
    { img: ProductImg2 },
    { img: ProductImg2 }
  ]
  /* 
    {product.map(list => {
      return (
        <center>
          <div className="prods" id="prods">
            <div>
              <a href="/">
                <img src={list.img} alt="" />
              </a>
            </div>
            <h4>  {list.desc}  </h4>
            <p>
              <b> {list.price_variant} <span> / Piece </span> </b>
              <b> {list.price_variant} <span> / Piece </span> </b>
            </p>
          </div>
        </center>
      )
    })} */
  return (
    <div className="product-slider-section white-background-section p-3">
      <h3>{title}</h3>
      <div className="ml-4 mr-4">
        <Slider {...settings}>
          {product.map((list) => {
            return (

              <center>
                <div className="">
                  <img src={list.img} className="product-slider-img" />

                </div>
              </center>
            )
          })}

          <center>
            <div className="product-slider-card">
              <img src={ProductImg2} className="product-slider-img" />

            </div>
          </center>

        </Slider>
      </div>
    </div>
  );
}

export default ProductSlider;
