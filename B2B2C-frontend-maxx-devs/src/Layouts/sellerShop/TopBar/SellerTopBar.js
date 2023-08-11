import React, { useEffect } from "react";
import { FaChevronDown, FaFacebook, FaInstagram, FaLinkedinIn, FaSearch } from "react-icons/fa"
import { TiSocialYoutubeCircular } from "react-icons/ti"
import { AiOutlineUser } from "react-icons/ai"
import "./SellerTopBar.scss"
import "../../fragments/Header.scss"
import { Link } from "react-router-dom";
import { FirstBar } from "../../fragments/FirstBar";
import { SearchBar } from "../../fragments/SearchBar";

const SellerTopBar = () => {
  const options = [
    { value: "products", label: "Products" },
    { value: "suppliers", label: "Suppliers" },
  ];
  const handleSearchBox = (item) => {
    // console.log(item);
  };

  return (
    <>
      <FirstBar />

      <div className="header ">
        <div className="two-bar d-flex align-items-center justify-content-between">
          <Link to="/" >
            <div className="logo-section">
              <img src="/assets/svg/logoAnaizan.svg" />
            </div>
          </Link>
          <ul className="group2">
            <li>
              <a href=""> Sourcing Solution </a>
              <FaChevronDown />
            </li>
            <li>
              <a href=""> Featured Partners </a>
              <FaChevronDown />
            </li>
            <li>
              <a href="" > Help </a>
              <FaChevronDown />
            </li>
          </ul>
          <SearchBar />
          <ul className="group1">
            <li>
              <a href="/">
                <img src="/assets/svg/order.svg" />
                Order
              </a>
            </li>

            <li>
              <a href="/">
                <AiOutlineUser />
                Sign In
              </a>
            </li>
            <select name="lang" id="">
              <option selected disabled> Select </option>
              <option value="Englidh"> English </option>
              <option value="French"> French </option>
            </select>
          </ul>
        </div>
      </div>
      <div className="head_seller">
        <div className="back_img"
          style={{
            backgroundImage: "url(/assets/png/groups.png)",
            backgroundSize: "100%",
            paddingTop: "",
            backgroundPositionY: "50%",
            backgroundSize: "no-repeat"
          }}>
          <div>
            <h1> Shenzhen Feiny  Co., Ltd </h1>
            <li>
              <img src="/assets/svg/Warehouse.svg" />
              Manufacturer, Trading Company
            </li>
            <li> Main Products: Sport Dresses </li>
            <li>
              <img src="/assets/svg/verified.svg" alt="" />
              Verified &nbsp; <b> Seller </b>
            </li>
          </div>
          <div>
            <h3>
              <img src="/assets/svg/verified.svg" alt="" />
              Verified by TUV Rheinland
            </h3>
            <button> Contact Supplier </button>
            <button> Chat Now </button>
            <button> <img src="/assets/svg/follow.svg" alt="" /> Follow </button>
          </div>
        </div>
        <div className="nav_seller" >
          <nav className="nav3">
            <ul>
              <li className="link"
              >
                <a href="/seller/home" >
                  Home
                </a>
              </li>
              <li className="link">
                <a href="/seller/product">
                  Products
                </a>
              </li>
              <li className="link">
                <a href="/seller/profile">
                  Profile
                </a>
              </li>
              <li className="link">
                <a href="/seller/contact">
                  Contacts
                </a>
              </li>
              <li className="link">
                <a href="/seller/product/promotion">
                  Promotion
                </a>
              </li>
              <li className="link">
                <a href="/seller/product/feeds"> Feeds </a>
              </li>
            </ul>
          </nav>
          <form>
            <button> <FaSearch /></button>
            <input type="search" name="text" id="text" placeholder="Search in this store" />
          </form>
        </div>
      </div>
      {/* testing menu */}
    </>
  );
};

export default SellerTopBar;
