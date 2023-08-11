import React from "react";
import Button from "../Button/Button";
import { LoginUserIcon } from "../../assets/icons/LoginUserIcon";
import ReCAPTCHA from "react-google-recaptcha";
import "./LoginForm.scss";

function ResetForm() {
  function onChange(value) {
    // console.log("Captcha value:", value);
  }

  return (
    <div className="login-form-wrapper">
      <div className="login-form-header">
        <h2 className="mt-3">Reset your password</h2>
      </div>
      <div className="login-form-body">
        <p>Username or Email</p>
        <div className="login-input">
          <LoginUserIcon />
          <input type="email" placeholder="Username or Email" />
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <ReCAPTCHA sitekey="6Lchh6gaAAAAANg1DjHFIMtTwSTc5fwodEcP_5vx" onChange={onChange} />
        </div>

        <div className="mt-5 pb-5 text-center">
          <Button type="button" style={{ width: "180px" }}>
            Send Reset Email
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResetForm;
