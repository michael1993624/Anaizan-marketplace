import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useLocation } from "react-router-dom";
import ContentGroupProd from "../../components/ContentGroupProd/ContentGroupProd";
import FormSupplier from "../../components/FormSupplier/FormSupplier";
import { CHECKOUT, SHOPING_CARD, SUB_CATEGORIE_PAGE } from "../../settings/constants";
import InfoProd from "./InfosProd/InfosProd";

import "./ProductDetails.scss"
import { FaCheckCircle, FaPaperclip, FaRegCheckCircle } from "react-icons/fa";
import user_icon from "../../assets/svg/userr.svg"
import comment_icon from "../../assets/svg/comments.svg"
import supplier_img from "../../assets/images/profile/p_4.jpg"
import { addToCart } from "../../store/cartStore/cartSlice";

const ProductDetails = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation()
    const data = location.state?.data;

    /* tab */
    const [tabIndex, setTabIndex] = useState(0)

    /* popup */
    const [popup, isPopup] = useState(false)
    const [contactBox, isContactBox] = useState(false)

    //data array required of store
    const ProductSlide = useSelector((state) => state.myStore.ProductSlide)
    const FAQ = useSelector((state) => state.myStore.faq)
    const overview = useSelector((state) => state.myStore.overview)

    const setting = {
        showArrows: false,
        showIndicators: false,
        showStatus: false
    }

    //tab content component
    const showTab = () => {
        if (tabIndex == 0) {
            return (
                <>
                    <h2> Overview </h2>
                    <div className="inf">
                        {overview.map(({ detail, value }, index) => {
                            return (
                                <p key={index}>
                                    {detail}:
                                    <span> {value} </span>
                                </p>
                            )
                        })}

                    </div>
                    <h3> Supply Ability </h3>
                    <p>
                        Supply Ability:
                        <span> 100000 Piece/Pieces per Month </span>
                    </p>
                    <h3> Packaging & Delivery  </h3>
                    <div className="flex_p">
                        Packaging DetaiIs:
                        <div>
                            Per piece ln a polybag With 80 pieces in one
                            carton; Carton size Or as your requirements <br />

                            1 piece ln a poly bag, 40pcs in B carton,
                            carton size Packing method:l pcs in a polybaqwe can
                            do package according to your requirements With extre cost.
                            Shipping fee: We will calculate the shipping fee according to the number
                            of products you ordered. <br />

                            1 piece ln a poly bag, 40pcs in B carton,
                            carton size Guangzhou/Shengzhen/Shanghai/Hong Kong
                        </div>
                    </div>
                </>
            )
        } else if (tabIndex == 1) {
            return (
                <>
                    <div className="projet_desc">
                        <h2> Product Description </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td> Product Name </td>
                                    <td>
                                        Wholesale custom fashionable style nurse uniform lingerie
                                        With apron scrub suit strech polyester
                                    </td>
                                </tr>
                                <tr>
                                    <td> Size </td>
                                    <td> S-6XL </td>
                                </tr>
                                <tr>
                                    <td> MOQ </td>
                                    <td> No Strict MOQ </td>
                                </tr>
                                <tr>
                                    <td> Material </td>
                                    <td> Cotton/Nylon </td>
                                </tr>
                                <tr>
                                    <td> Payment </td>
                                    <td> L/C,D"/D/T,Paypal, Western Union, Bank Transfer, Moneygram </td>
                                </tr>
                                <tr>
                                    <td> Shipment </td>
                                    <td> DHL, KCS, FEDEX, TNT, UPS, Epacket </td>
                                </tr>
                                <tr>
                                    <td> Customized Service </td>
                                    <td> Label, tag, package, own design, size, color and so on </td>
                                </tr>
                                <tr>
                                    <td> Advantages of Products </td>
                                    <td>
                                        <p> 1. The Shoulder of the shape wear can be adjustable </p>
                                        <p> 2. The Shoulder of the shape wear can be adjustable</p>
                                        <p> 3. The Shoulder of the shape wear can be adjustable</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )
        } else if (tabIndex == 2) {
            return (
                <>
                    <div className="quiz">
                        <h2> FAQ </h2>
                        <hr />
                        {
                            FAQ.map(({ quiz, rep }, index) => {
                                return (
                                    <div key={index}>
                                        <h4> Q: {quiz} </h4>
                                        <p> A: {rep} </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
    }

    const active = {
        background: "white",
    }

    const no_active = {
        background: "whitesmoke",
    }

    const open_p = {
        display: "block"
    }

    const close_p = {
        display: "none"
    }

    const add = (id, title, image, price, author, size, color, quantity_max) => {
        dispatch(addToCart({id, title, image, price , author, size, color, quantity_max}))
    }

    const AddToCart = () => {
        // add to cart
        add(data.id, data.title,
            data.img, data.price, 
            data.author, data.size, 
            data.color, data.quantity_max)
        isPopup(true)
    }

    const ContinueShopping = () => {
        isPopup(false)
        Navigate(SUB_CATEGORIE_PAGE)
    }

    const OpenCart = () => {
        // close popup
        isPopup(false)
        // navigate to shopping cart page
        Navigate(SHOPING_CARD)
    }

    return (
        <div className="body_home">
            <div style={popup ? open_p : close_p}
                className="popup-add-cart">
                <div className="card-msg">
                    <FaCheckCircle />
                    <p>
                        Product add to cart successfuly!
                    </p>
                    <div>
                        <button onClick={OpenCart}> Open Cart </button>
                        <button onClick={ContinueShopping}> Continue Shopping</button>
                    </div>
                </div>
            </div>
            <section className="sectionp1 ">
                <div className="block1-details-prod">
                    <div className="div_img">
                        <Carousel {...setting} swipeScrollTolerance={2}>
                            {new Array(6).fill().map((_, index) => {
                                return (
                                    <div key={index}>
                                        <img src={data.img} />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <InfoProd />
                </div>
                <div className="block2-details-prod">
                    <div className="div1-info-details">
                        <h3> High Quality A AMI LEVEL 3 blue green Disposable steri... </h3>
                        <div className="div-child1">
                            <span> 10 Pieces </span>
                            <p>
                                <span> form <b> CFA 108 - CFA 324 </b> </span>
                                <span> Processing Time 7 days </span>
                            </p>
                        </div>
                        <div>
                            <p> Anaizan.com  Logistic </p>
                            <p>
                                Garanteed delivery by 3/2 <br />
                                (Compensation for delayed Delivery)
                            </p>
                        </div>
                        <button onClick={() => Navigate(CHECKOUT)}> Order Now </button>
                        <button onClick={() => isContactBox(true)}> 
                            <img src="/assets/svg/envelope.svg" alt="" /> Contact Supplier 
                        </button>
                        <button onClick={AddToCart}>
                            <img src="/assets/svg/Buy.svg" alt="" />
                            Add to cart
                        </button>
                    </div>

                    <div className="div2-info-details">
                        <h3>
                            Shenzhen Feiny  Co., Ltd
                            <span>Manufacture, Trading Company </span>
                        </h3>
                        <div>
                            <button onClick={() => window.location.href = "/sellerHome"}>
                                <img src={user_icon} alt="" />
                                Follow
                            </button>
                            <button>
                                <img src={comment_icon} alt="" />
                                Chat now
                            </button>
                        </div>
                        <p id="p">
                            <img src="/assets/svg/verified.svg" alt="" />
                            Verified Seller
                        </p>
                        <p id="p_link">
                            We exhibited at 24 Anaizan .comTrade Show

                        </p>
                        <p> Avg Response Time: <span>24h</span></p>
                        <p>
                            Business Type Exporter
                            Manufacturer , Online Seller , Other...
                        </p>
                    </div>
                </div>
            </section>
            <section className="sectionp2">
                <ContentGroupProd label="You may also like" listProduct={ProductSlide} />
                <div className="bloc2">
                    <div className="tabs">
                        <div className="btns_tabs">
                            <button> Product Details </button>
                            <button> Company profile </button>
                            <button> Reviews </button>
                        </div>
                        <div className="contents_tabs">
                            <div className="tabs">
                                <div className="hds">
                                    <button style={tabIndex == 0 ? active : no_active}
                                        onClick={() => setTabIndex(0)}> Overview </button>
                                    <button style={tabIndex == 1 ? active : no_active}
                                        onClick={() => setTabIndex(1)}> Product description </button>
                                    <button style={tabIndex == 2 ? active : no_active}
                                        onClick={() => setTabIndex(2)}> FAQ </ button>
                                </div>
                                <div className="body_tab">
                                    {showTab()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormSupplier />
                </div>
                <ContentGroupProd label="Recommended by supplier" listProduct={ProductSlide} />
            </section>
            <div className="div-contact-supplier border-radius-6"
                style={contactBox ? open_p:close_p }>
                <div className="block-divs">
                    <h1 className="d-flex align-items-center justify-content-between">
                        Send Inquiry
                        <span onClick={() => isContactBox(false)}>&times;</span>
                    </h1>
                    <form className="div1s">
                        <div className="div1-child1 child">
                            <p className="d-flex align-items-center">
                                To
                                <img src={supplier_img} />
                                <b> Marx geek </b>
                                <span> Max Tech</span>
                            </p>
                        </div>
                        <div className="div1-child2 child d-flex align-items-center justify-content-between">
                            <p className="d-flex align-items-center">
                                <img src={data.img} />
                                Men fitness
                            </p>
                            <p className="d-flex align-items-center">
                                <input type="text" name="" defaultValue={10} />
                                Pieces
                            </p>
                        </div>
                        <div className="div1-child3 child border-radius-6">
                            <h2> Product attribute </h2>
                            <p> You can fill is the following</p>
                            <div className="div-inputs">
                                <div>
                                    <label> Size </label>
                                    <select name="">
                                        <option value="XL"> XL </option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <label> 7 days sample order leads time </label>
                                    <select name="">
                                        <option value="XL"> XL </option>
                                    </select>
                                    <span></span>
                                </div>
                            </div>
                            <div className="div-inputs">
                                <div>
                                    <label> Material </label>
                                    <select name="">
                                        <option value="XL"> XL </option>
                                    </select>
                                    <span></span>
                                </div>
                                <div>
                                    <label> Feature </label>
                                    <select name="">
                                        <option value="XL"> XL </option>
                                    </select>
                                    <span></span>
                                </div>
                            </div>
                            <div className="div-inputs">
                                <div>
                                    <label> Color </label>
                                    <select name="">
                                        <option value="XL"> XL </option>
                                    </select>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="div1-child4 child border-radius-6">
                            <h2> Details requirements:</h2>
                            <p> Enter product details such as size, color...</p>
                            <textarea className="border-radius-6" rows={4} cols={10}></textarea>
                            <span></span>
                            <div className="child4-div d-col border-radius-6">
                                <p> Check out these questions from others buyers. Click to insert questions in the box above.</p>
                                <div className="d-flex align-items-center justify-content-between border-radius-6">
                                    <button> What is the best price can your offer ?</button>
                                    <button> What is the shipping cost ?</button>
                                    <button> Do you support customization ? </button>
                                </div>
                            </div>
                            <button className="file-attachement d-flex align-items-center">
                                <input type="file" accept="" />
                                <FaPaperclip />
                                Add attachment
                            </button>
                        </div>
                        <p className="child checkbox d-flex align-items-center">
                            <input type="checkbox" name="" />
                            <span>
                                Recommend matching suppliers if this supplier doesn't contact
                                me on Message
                            </span>
                        </p>
                        <p className="child checkbox d-flex align-items-center">
                            <input type="checkbox" name="" />
                            <span>
                                Recommend matching suppliers if this supplier doesn't contact
                                me on Message
                            </span>
                        </p>
                        <p></p>
                        <div className="btn-send d-flex align-items-center justify-content-center">
                            <button> Send Inquiry </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;