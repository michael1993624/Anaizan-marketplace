import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
// component
import ADSection from "./ADPage/ADpage";
import RequestForQuotation from "./RequestForQuotation/RequestForQuotation";
import HomeService from "./HomeService/HomeService";
import CardProductType from "../../components/CardProductType/CardProductType";
import FrameTypeProduct from "../../components/FramePub/FramePub";
import BoxCategorieImage from "../../components/BoxCategorieImage/BoxCategorieImage";
import SaleProducts from "./SaleProducts/SaleProduct";
import ProdCardHome from "../../components/ProdCardHome/ProdCardHome";
import CardSuppliers from "./CardSuppliers/CardSuppliers";
// style
import "./Home.scss";
//api
import { MAINTENANCE_MODE } from "../../utils/apis";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import { useSelector } from "react-redux"
import { InLineLoader } from "../../components/InlineLoader/InlineLoader";

import viseur from "../../assets/images/viseur.png"
import bSale2 from "../../assets/images/back2.png"
import bSale3 from "../../assets/images/back3.png"
import bSale4 from "../../assets/images/back4.png"

const Home = () => {

  const [maintenance, setMaintenance] = useState("");

  const getMaintenanceMode = async () => {
    try {
      const maintenance_mode = await axios.get(MAINTENANCE_MODE);
      console.log(maintenance_mode);
      if (maintenance_mode.maintenance_mode === "off") {
        setMaintenance("false");
      }
      else {
        setMaintenance("true");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const setting = [
    { label: "Consumer", idBtn: "btn", index: 0, back: "#76A4D8" }
  ];

  const barSectionPrime = () => {
    return (
      <>
        <div className="barPrime white-background-section">
          <h3 className=""> Prime Day Preparation Sale </h3>
          <div>
            From 10% Off
            <button className="view-more">
              view more
            </button>
          </div>
        </div>
      </>
    )
  }

  /** get product of store */
  const dataProductType = useSelector((state) => state.myStore.dataProductType);
  const dataProductGroup = useSelector((state) => state.myStore.dataProductGroup);
  const dataCardInfos = useSelector((state) => state.myStore.dataCardInfos);
  const dataCategorie = useSelector((state) => state.myStore.dataCategorie);
  const dataProduct = useSelector((state) => state.myStore.dataProduct);
  const dataListSupplier = useSelector((state) => state.myStore.dataListSupplier);
  const dataListBuyer = useSelector((state) => state.myStore.dataListBuyer);
  const dataCatProd = useSelector((state) => state.myStore.dataCatProd);
  const services = useSelector((state) => state.myStore.services);

  // start action
  useEffect(() => {
    getMaintenanceMode();
  }, []);


  return (
    <>
      <div className="body_home">
        {
          maintenance ?
            <div className="maintenance">
              <h1>This website is under maintenance !!!</h1>
            </div>
            :
            <>
              {/* first section */}
              <section className="section1-home">
                <HomeCategories />
                <div className="bloc-center-section1 border-radius-6" >
                  <ADSection whichCarousel="7" />
                </div>
                <div className="bloc-right-section1">
                  <div className="div1-b border-radius-6">
                    {
                      services.map(({ img, title, desc }, index) => {
                        return (
                          <li key={index}>
                            <img src={img} />
                            <a href="">
                              <div>
                                <h4> {title} </h4>
                                <span> {desc} </span>
                              </div>
                            </a>
                          </li>
                        )
                      })
                    }
                  </div>
                  <div className="slide-div border-radius-6" >
                    <ADSection whichCarousel="6" />
                    <h4 className="font-weight-bold gradient-letter">PROMOTION</h4>
                  </div>
                </div>
              </section>

              {/* two section */}
              <section className="border-radius-6 overflow-hidden">
                <BoxCategorieImage label="Shop by Categorie" listCategorieImage={dataCategorie} />
              </section>
              {/* three section */}
              <section className="section3-block">
                <div className="div1-bloc-section3 border-radius-6">
                  {dataCardInfos.map((list, index) => {
                    return <FrameTypeProduct key={index} icon={list.icon} label={list.label} backColor={list.backColor} backColor2={list.backColor2} />
                  })}
                  <div className="empty">
                    <img src="/assets/png/car.png" />
                  </div>
                  <div className="slider-prod">
                    <ADSection whichCarousel="6" />
                  </div>
                </div>
                <div className="div2-bloc-section3">
                  <div className="rows">
                    {dataProductGroup.map((list, index) => {
                      return <CardProductType key={index} iconPath={list.icon} ProductName={list.type}
                        linkPage={list.linkPage} listProduct={list.table1}
                        timer={list.timer} />
                    })}
                  </div>
                  <div className="row2 d-flex">
                    <CardProductType iconPath="vector3.svg" ProductName="Global Original Source"
                      linkPage="/product/shipping" listProduct={dataProductType}
                      timer={null} />

                    <CardProductType iconPath="vector3.svg" ProductName="True View"
                      linkPage="/product/shipping" listProduct={dataProductType}
                      timer={null} />
                  </div>
                </div>
              </section>

              {/* four section */}
              <section className="categories">
                <BoxCategorieImage label="New Arrivals" listCategorieImage={dataCategorie} link="/product/newArrival" />
              </section>

              {/* five section*/}
              <div className="slide-big mt-3">
                <ADSection whichCarousel="2" ADText="AUTOMOBILES" />
              </div>

              {/* six section*/}
              <section className="section6">
                {barSectionPrime()}
                <SaleProducts backImage={"url(" + viseur + ")"}
                  listProduct={dataProduct} param={setting} backColor=""
                  colors="#30ABDC" tabIndex={0} />

                <SaleProducts backImage={"url(" + bSale2 + ")"}
                  listProduct={dataProduct} param={setting} backColor=""
                  colors="#368a8d" tabIndex={4} />
              </section>

              {/* seven section */}
              <section className="">
                <RequestForQuotation />
              </section>

              {/* eight section */}
              <section>
                <SaleProducts backImage={"url(" + bSale3 + ")"}
                  listProduct={dataProduct} param={setting} backColor=""
                  colors="#6A8FAA" tabIndex={8} />
              </section>

              {/* nine section */}
              <ProdCardHome label="Shop by Categorie" listProd={dataCatProd} />

              {/* section banner */}
              <div className="slide-big mt-3">
                <ADSection whichCarousel="3" ADText="Machinery" />
              </div>

              {/* eleven section*/}
              <section className="section6 mt-3">
                {barSectionPrime()}
                <SaleProducts backImage={"url(" + bSale4 + ")"}
                  listProduct={dataProduct} param={setting} backColor=""
                  colors="#85b146" tabIndex={12} />
              </section>

              {/* twelve section */}
              <CardSuppliers listSuppliers={dataListSupplier} listBuyer={dataListBuyer} />
              <div className="">
                <HomeService />
              </div>
            </>
        }
      </div>
    </>
  );
}

export default Home;
