import React from "react";
import { Link } from "react-router-dom";

import { ArrowChevroIcon } from "../../assets/icons/ArrowChevroIcon";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./PopularCategory.scss";

function PopularCategory({ cateTitle, popularCates }) {
  // console.log("aaz",popularCates)


  const popularSettingsProducts = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  const handleClickProduct = () => {
    window.location.href = "/product/detail";
  };

  return (
    <>
      <div className="d-flex align-items-baseline">
        <h3>{cateTitle}</h3>
        <div className="d-flex align-items-center ml-5">
          <Link  to = {{pathname :"/allCategories"}}>
            <span className="mr-2 font-weight-bold">See all </span>
            <ArrowChevroIcon />
          </Link>
        </div>
      </div>

      <Slider {...popularSettingsProducts}>
        {popularCates.map(({ id, img, name }) => {
          return (
            <div className="cate-item" key={id}>
              <center>
                <img src={img} alt={`popularCate img${id}`} />
                <Link to={{ pathname: "/categories", state: { id, name } }}>
                  <label>{name}</label>
                </Link>
              </center>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default PopularCategory;
