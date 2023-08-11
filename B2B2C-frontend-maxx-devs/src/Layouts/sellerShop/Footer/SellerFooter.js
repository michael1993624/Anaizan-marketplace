import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import FacebookImg from "../../../assets/images/facebook.png";
import InstarImg from "../../../assets/images/insta.png";
import YoutubeImg from "../../../assets/images/tube.png";
import TwitterImg from "../../../assets/images/twitter.png";
import googlePlayImg from "../../../assets/images/google-play-badge.png";

import "./Footer.scss";

function SellerFooter() {
  return (
    <div className="seller-footer-wrapper">
      <div className="white-background">
        <div className="w-50 mr-auto ml-auto pt-5">
          <div className="text-center">
            <h2>Stay connected</h2>
            <h3>Sign up for helpful tips on building an Anaizan business</h3>
          </div>
          <div className="d-flex justify-content-center">
            <Input className="footer-input-seller" placeholder="Your Email" />
            <Button className="ml-3 blue-background border-radius-46">Subscriber</Button>
          </div>
        </div>
      </div>

      <div className="seller-footer-body-section mt-4">
        <p className="footer-string-color text-center pt-5">
          Trade Alert: Delivering the latest product trends and industry straight to your inbox
        </p>
        <div className="footer-menu mt-5">
          <div className="home-container">
            <div className="row mb-5">
              <div className="col-md-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <p className="font-weight-bold">Pour les entreprises</p>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <p className="font-weight-bold">Pour les entreprises</p>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <p className="font-weight-bold">Pour les entreprises</p>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex justify-content-center">
                  <div>
                    <p className="font-weight-bold">Pour les entreprises</p>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                    <span>reative Cloud abonnement Équipe</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div className="footer-menu">
          <div className="home-container d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <span className="font-weight-bold mr-3">Download:</span>
              <img src={googlePlayImg} style={{ width: "115px" }} />
            </div>
            <div className="d-flex align-items-center">
              <span>Follow Us:</span>
              <div className="social-icon-wrapper">
                <a href="https://www.facebook.com/">
                  <img src={FacebookImg} />
                </a>
                <a href="https://www.instagram.com/" target="_black">
                  <img src={InstarImg} />
                </a>
                <a href="https://www.yutube.com/" target="_black">
                  <img src={YoutubeImg} />
                </a>
                <a href="https://www.twitter.com/" target="_black">
                  <img src={TwitterImg} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">@2021 Anaizan. All rights reserved</div>
      </div>
    </div>
  );
}

export default SellerFooter;
