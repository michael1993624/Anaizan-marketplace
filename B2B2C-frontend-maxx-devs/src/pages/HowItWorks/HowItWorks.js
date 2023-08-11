import React from "react";
import Counting from "../../assets/images/howitworks/counting.png";
import Customer from "../../assets/images/howitworks/customer.png";
import FastTime from "../../assets/images/howitworks/fast-time.png";
import SmartPhone from "../../assets/images/howitworks/smartphone.png";
import Button from "../../components/Button/Button";

import "./HowItWorks.scss";

function HowItWorks() {
  return (
    <div className="main-gradient-background">
      <div className="howitworks-wrapper">
        <div className="d-flex justify-content-center">
          <h1 className="color-blue">How it works...</h1>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="howitworks-card-section">
              <div className="card-body">
                <img src={Counting} alt="counting" />
                <h6 className="mt-4 mb-4 font-size-bold-20">1. Select a Bolter</h6>
                <p>
                  Choose your perfect Bolter via our Book a Bolter tab - filtered by price, location, rating and
                  availability
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="howitworks-card-section">
              <div className="card-body">
                <img src={FastTime} alt="fast time" />
                <h6 className="mt-4 mb-4 font-size-bold-20">2. Wait for your Bolter to respond...</h6>
                <p>Bolters will always respond to your request as soon as they can. Just sit tight!</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="howitworks-card-section">
              <div className="card-body">
                <img src={Customer} alt="customer" />
                <h6 className="mt-4 mb-4 font-size-bold-20">3. Your task has been accepted</h6>
                <p>
                  The Bolter has now confirmed that they’ll come over to carry out your task at the time you’ve selected
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="howitworks-card-section">
              <div className="card-body">
                <img src={SmartPhone} alt="smart phone" />
                <h6 className="mt-4 mb-4 font-size-bold-20">4. Task completed!</h6>
                <p>Your task is now finished! Please remember to leave a rating and review for our other users too.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Button>Book a Bolter</Button>
          <Button className="background-light ml-3">Become a Bolter</Button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
