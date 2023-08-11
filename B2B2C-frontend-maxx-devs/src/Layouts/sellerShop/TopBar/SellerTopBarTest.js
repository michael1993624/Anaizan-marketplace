import React from "react";
import LogoImage from "../../../assets/images/logo.png";
import WhiteHomeIcon from "../../../assets/images/white_home.png";
import SelectEx from "../../../components/SelectEx/SelectEx";
import "./TopBar.scss";

const SellerTopBar = () => {
  const options = [
    { value: "en", label: "English" },
    { value: "cn", label: "Chinese" },
  ];
  const handleSearchBox = (item) => {
    // console.log(item);
  };
  return (
    <>
      <div className="blue-top-bar">
        <div className="top-left-description">
          <marquee>
            <span className="font-weight-bold"> BIENVENUE SUR VOTRE PLATEFORME DE COMMERCE EN LIGNE </span>
          </marquee>
        </div>
        <div className="top-right-menu">
          <span>WISHLIST</span>
          <span>PANIER</span>
          <span>MON COMPTE</span>
        </div>
      </div>

      <div className="home-container seller-top-wrapper">
        <div className="d-flex align-items-center justify-content-between">
          <div className="seller-logo-section">
            <img src={LogoImage} />
          </div>

          <div className="seller-menu-list-section">
            <div className="d-flex align-items-center">
              <div className="seller-top-home-button-block">
                <img src={WhiteHomeIcon} />
              </div>
              <div className="seller-top-menus">
                <a href="/seller/service">
                  <span>Platform</span>
                </a>
                <span>Solutions</span>
                <a href="/seller/pricing">
                  <span>Pricing</span>
                </a>
                <span>Success Stories</span>
                <span>Resources</span>
              </div>
            </div>

            <button className="seller-sign-button">Sign In</button>
          </div>

          <div className="login-menu-section">
            <a href="/login">LogIn</a>
            <SelectEx
              isBorder={false}
              name="SearchBox"
              title="English"
              list={options}
              onChange={handleSearchBox}
              styles={{
                wrapper: { width: "100%" },
                headerTitle: { color: "rgb(117, 117, 117)", fontWeight: "normal" },
                checkIcon: { display: "none" },
                listItem: { color: "#4a4a4a", fontWeight: "normal" },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerTopBar;
