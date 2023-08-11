import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import BMWX5 from "../../../assets/images/bmw-x5.png";
import BannerImg1 from "../../../assets/images/banner/banner-1.jpg";
import BannerImg2 from "../../../assets/images/banner/banner-2.jpg";
import v1 from "../../../assets/images/product/v1.png"
import v2 from "../../../assets/images/product/v2.png"
import v3 from "../../../assets/images/product/v3.png"

import MamanDesign from "../../../assets/images/maman.png"
import Styles from "../../../assets/images/styles.png"
import Woman from "../../../assets/images/tof.png"
import El from "../../../assets/images/ell.png"

import "./ADpage.scss";

function ADpage({ whichCarousel, ADText, listProduit }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const RoomActivity = [
    {
      img: "/assets/png/r1.png",
      yearExp: "15",
    },
    {
      img: "/assets/png/r2.png",
      yearExp: "10",
    },
    {
      img: "/assets/png/r3.png",
      yearExp: "5",
    },
    {
      img: "/assets/png/r3.png",
      yearExp: "5",
    }
  ]


  const MYCarousel = () => {
    const cNum = parseInt(whichCarousel);
    if (cNum === 1) {
      return (
        <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          <div>
            <img src={BannerImg1} alt="banner img1" />
          </div>
          <div>
            <img src={BannerImg2} alt="banner img2" />
          </div>
        </Carousel>
      )
    } else if (cNum === 2) {
      return (
        <Carousel className="slider2" responsive={responsive} showDots={false} autoPlay={true} infinite={true}>
          <>
            <div className="home-ad-section">
              <div className="circle">
                <div className="circle2"></div>
              </div>
              <div className="d-flex align-items-center">
                <div className="ad-title-block">
                  <h1>{ADText}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sapiente, eveniet, sed. Neque, dolor cum
                    delectus quasi nisi harum
                  </p>
                  <button> Buy now </button>
                </div>
              </div>
              <div className="banner d-flex align-items-center justify-content-center">
                <div className="d-flex align-items-center ">
                  <img src={BMWX5} />
                </div>
              </div>
            </div>
          </>
        </Carousel>
      );
    } else if (cNum === 3) {
      return (
        <Carousel className="slider2" responsive={responsive} autoPlay={true} showDots={true} infinite={true}>
          <>
            <div className="home-ad-section home-ad2">
              <div className="circle">
                <div className="circle2"></div>
              </div>
              <div className="banner img d-flex align-items-center justify-content-center">
                <div className="text-center d-flex align-items-center">
                  <img src="/assets/png/camion.png" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="ad-title-block">
                  <h1>{ADText}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing, elit. Sapiente, eveniet, sed. Neque, dolor cum
                    delectus quasi nisi harum
                  </p>
                  <button> Buy your car </button>
                </div>
              </div>
             
            </div>
          </>
        </Carousel>
      );
    } else if (cNum === 4) {
      return (
        <Carousel className="slider4" responsive={responsive} autoPlay={true} autoPlaySpeed={5000} showDots={true} infinite={true}>
          <div className="left">
            <div>
              <h3> SPRING/SUMMER </h3>
              <h3> FASHION </h3>
              <p> The New Stores <br /> Up to 80% Off </p>
              <button> Shop Now </button>
              <div className="circle">
                <img src="/assets/png/loginImg.png" />
              </div>
            </div>
          </div>
          <div className="left">
            <div>
              <h3> SPRING/SUMMER </h3>
              <h3> FASHION </h3>
              <p> The New Stores <br /> Up to 80% Off </p>
              <button> Shop Now </button>
              <div className="circle">
                <img src="/assets/png/loginImg.png" />
              </div>
            </div>
          </div>

        </Carousel >
      );
    } else if (cNum === 5) {
      return (
        <Carousel className="slider5" responsive={responsive} autoPlay={true} autoPlaySpeed={10000} showDots={false} infinite={true}>
          <div className="bodyss">
            {
              listProduit.map((list, index) => {
                return (
                  <div key={index} className="img_div">
                    <div>
                      <img src={list.img} />
                    </div>
                    <h3 id="name"> {list.names} </h3>
                    <p>
                      {list.desc}
                    </p>
                    <span> Gravida viverra  </span>
                  </div>
                )
              })
            }
          </div>
        </Carousel >
      );
    } else if (cNum == 6) {
      return (
        <Carousel className="slider6" responsive={responsive} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          <div>
            <img src={v3} />
          </div>
          <div>
            <img src={v1} />
          </div>
          <div>
            <img src={v2} />
          </div>
        </Carousel>
      )
    } else if (cNum == 7) {
      return (
        <Carousel className="slider7" responsive={responsive} showDots={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          <div className="blocb2">
            <div className="ellipse"></div>
            <div className="left">
              <img src={MamanDesign} />
              <img src={Styles} />
              <button> Shop Now </button>
            </div>
            <div className="right">
              <img src={El} alt="" />
              <img src={Woman} alt="" />
            </div>
          </div>
          <div className="blocb2">
            <div className="ellipse"></div>
            <div className="left">
              <img src={MamanDesign} />
              <img src={Styles} />
              <button> Shop Now </button>
            </div>
            <div className="right">
              <img src={El} alt="" />
              <img src={Woman} alt="" />
            </div>
          </div>
        </Carousel>
      )
    }
  };
  return (
    <>
      <MYCarousel />
    </>
  );
}

export default ADpage;
