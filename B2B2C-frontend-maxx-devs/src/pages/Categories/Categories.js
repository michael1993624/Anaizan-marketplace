import React, { useEffect, useState } from "react";
import Countdown from "react-countdown"

import "./Categories.scss"

import { Timer } from "../../components/Minuteur/Minuteur";

import Slider from "react-slick";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import OnlinePersonnalisation from "./OnlinePersonnalisation/OnlinePersonnalisation";
import Showroom from "./Showroom/Showroom";
import TopProduct from "./TopProduct/TopProduct";
import CardProductLeft from "./CardProductLeft/CardProductLeft";
import ADpage from "../Home/ADPage/ADpage";
import ProdCardHome from "../../components/ProdCardHome/ProdCardHome";
import CardProd from "../ProductPoster/CardProd/CardProd";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import Woman from "../../assets/images/woman.png"

const Categorie = () => {

    const [showCat, setShowCat] = useState(0);

    /* const top product */
    const [indexBtn, setIndexBtn] = useState(0)

    /* function sort top product */
    const [listTopProduct, setListTopProduct] = useState([])

    const sortTopProduct = (index, topType) => {
        setIndexBtn(index)

        const sort = dataProductSale.filter(prod => {
            return prod.top == topType;
        })
        setListTopProduct([...sort]);
    }


    const catProd = useSelector((state) => state.myStore.CatProd2)
    const dataProductTop = useSelector((state) => state.myStore.productTopRight)
    const dataProductTop2 = useSelector((state) => state.myStore.productTop2)
    const dataProductOnline = useSelector((state) => state.myStore.ProductOnline)
    const dataDealsProduct = useSelector((state) => state.myStore.DealsProduct)
    const dataRoomActivity = useSelector((state) => state.myStore.RoomActivity)
    const dataProductSale = useSelector((state) => state.myStore.ProductSale)
    const TopProdLeft = useSelector((state) => state.myStore.TopProduct)
    const dataProduct = useSelector((state) => state.myStore.DataProducts3)

    const settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };


    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
    };


    const catProductName = [
        { icon: "./assets/png/habit.png", nameCat: "Fashion" },
        { icon: "./assets/png/phone.png", nameCat: "Phone Accessorie" },
        { icon: "./assets/png/bag.png", nameCat: "Jewely" },
        { icon: "./assets/png/arose.png", nameCat: "Home & Garden" },
        { icon: "./assets/png/fouchette.png", nameCat: "Health & Beauty" },
        { icon: "./assets/png/der.png", nameCat: "Kids & Maternity" },
        { icon: "./assets/png/habit.png", nameCat: "Fashion" },
        { icon: "./assets/png/habit.png", nameCat: "Fashion" },
        { icon: "./assets/png/phone.png", nameCat: "Phone Accessorie" },
        { icon: "./assets/png/bag.png", nameCat: "Jewely" },
        { icon: "./assets/png/arrose.png", nameCat: "Home & Garden" },
    ]

    useEffect(() => {
        sortTopProduct(0, "Rated")
        
    }, [])


    return (
        <div className="body_home">
            <section className="sectionb1">
                <HomeCategories />
                <div className="blocb2" id="blocb2">
                    <ADpage ADText={null} whichCarousel={4} />
                    <div className="right">
                        {dataProductTop.map((list, index) => {
                            return (
                                <div key={index} className="prod_b">
                                    <div>
                                        <img src={list.img} alt="" />
                                    </div>
                                    <h3> {list.label} </h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* block right product of section 1*/}
                <div className="blocb3">
                    {dataProductTop2.map((list, index) => {
                        return (
                            <div className="b1" key={index}>
                                <div className="b11">
                                    <img src={list.img} alt="" />
                                </div>
                                <div>
                                    <h3>
                                        {list.desc}
                                    </h3>
                                    <button>
                                        Shop&nbsp;Now
                                        <RiArrowRightSLine />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* section 2 */}
            <section className="sectionb2">
                <div className="cadre">
                    <div>
                        <h3> Deals of the week </h3>
                        <img src={dataDealsProduct[0].img} alt="" />
                    </div>
                    <div className="d2">
                        <b className="d22"> hurry up! offer ends in : </b>
                        <Countdown date={Date.now() + 5011200000} renderer={Timer} />
                        <h3> {dataDealsProduct[0].names}  </h3>
                        <p> <b> {dataDealsProduct[0].price} </b> <span> {dataDealsProduct[0].priceThrought} </span> </p>
                        <h5>
                            <p> Available : <span>{dataDealsProduct[0].available}</span></p>
                            <p> Sold : <span>{dataDealsProduct[0].sold}</span></p>
                        </h5>
                    </div>
                </div>
                <div className="cadre">
                    <OnlinePersonnalisation listProduit={dataProductOnline} />
                </div>
                <div className="cadre">
                    <OnlinePersonnalisation listProduit={dataProductOnline} />
                </div>
            </section>

            {/* section 3 */}
            <section className="sectionb3">
                <img src="/assets/png/imgs.png" />
                <div className="sects">
                    <span>STARTING</span>
                    <div className="d-flex align-items-end justify-content-center">
                        <b> $ 79 <sup>99</sup> </b>
                    </div>
                </div>
                <div className="im">
                    <img src={Woman} alt="" />
                </div>
            </section>

            {/* seciton 4 */}
            <section className="sectionb4">
                <Showroom listProduct={dataRoomActivity} link="/" />
            </section>

            {/* section 5 */}
            <section className="sectionb5-product" id="sectionb5">
                <div className="split-div-section">
                    <div className="div1-sale-prod">
                        <div className="circles">
                            <b> $ 20.00</b>
                        </div>
                        <div className="game">
                            <h3> Special Offer</h3>
                            <img src={dataDealsProduct[0].img} />
                        </div>
                        <div className="game_txt" id="game_txt">
                            <div>
                                <h3>
                                    {dataDealsProduct[0].names}
                                </h3>
                                <b id="price"> {dataDealsProduct[0].price} <span> {dataDealsProduct[0].priceThrought} </span></b>
                                <div className="progress_div">
                                    <div className="bar">
                                        <div style={{ width: (dataDealsProduct[0].available + "%") }}></div>
                                    </div>
                                    <span> Available :  {dataDealsProduct[0].available}</span>
                                    <span> Already Sold : {dataDealsProduct[0].sold} </span>
                                </div>
                            </div>
                            <div className="minuteur">
                                <b className="b"> hurry up! offer ends in : </b>
                                <div className="minuteur_div">
                                    <Countdown date={Date.now() + 5011200000} renderer={Timer} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-product-section">
                        <CardProductLeft listProduct={TopProdLeft} />
                    </div>
                </div>

                <div className="bloc2s">
                    <div className="headss">
                        <button className={indexBtn == 0 ? "active-btn" : "no-active-btn"}
                            onClick={() => sortTopProduct(0, "Rated")}> Top Rated </button>
                        <button className={indexBtn == 1 ? "active-btn" : "no-active-btn"}
                            onClick={() => sortTopProduct(1, "Rated")}> Top Ranked </button>
                        <button className={indexBtn == 2 ? "active-btn" : "no-active-btn"}
                            onClick={() => sortTopProduct(2, "Rated")}> Top Sales </button>
                    </div>
                    <TopProduct listProduct={listTopProduct} />
                </div>
            </section>

            {/* section 6 */}
            <div className="slide-auto">
                <ADpage whichCarousel={2} ADText="AUTOMOBILE" />
            </div>

            {/* section 7 */}
            <section className="sectionb6" id="sectionb6">
                <div className="sectb6">
                    <h3> JUST FOR YOU</h3>
                    <div className="groups">
                        <Slider {...setting} id="slide" >
                            {
                                catProductName.map((list, i) => {
                                    if (i < 7) {
                                        return (
                                            <div key={i} className={`cat ${showCat == i ? "cat-active" : "cat-no-active"}`}
                                                onClick={() => setShowCat(i)}>
                                                <img src={list.icon} alt="" />
                                                <h5> {list.nameCat} </h5>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                catProductName.map((list, i) => {
                                    if (i > 6) {
                                        return (
                                            <div key={i} className={`cat ${showCat == i ? "cat-active" : "cat-no-active"}`}
                                                onClick={() => setShowCat(i)}>
                                                <img src={list.icon} alt="" />
                                                <h5> {list.nameCat} </h5>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </Slider>
                    </div>
                </div>
                <div className="content-prod-categorie">
                    <CardProd listPorduct={dataProduct} />
                </div>
            </section>
            <ProdCardHome label="Shop by Categorie" listProd={catProd} />
        </div>
    )
}

export default Categorie