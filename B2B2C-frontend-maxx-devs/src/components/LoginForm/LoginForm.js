import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Checkbox from "../CheckBox/Checkbox";

// import { LoginUserIcon } from "../../assets/icons/LoginUserIcon";
// import { LoginPwdIcon } from "../../assets/icons/LoginPwdIcon";
// import { SecretEyeIcon } from "../../assets/icons/SecretEyeIcon";

import "./LoginForm.scss";

function LoginForm() {
  return (
    <div className="login-form-wrapper">
      <div className="login-form-header">
        <h2 className="mt-3">Login and start bolting</h2>
      </div>
      <div className="login-form-body">
        <div className="login-input">
          {/* <LoginUserIcon /> */}
          <input type="text" placeholder="Username or Email" />
        </div>
        <div className="login-input">
          {/* <LoginPwdIcon /> */}
          <input type="password" placeholder="Password" />
          {/* <SecretEyeIcon /> */}
        </div>

        <div className="mt-3">
          <div className="d-inline">
            <Checkbox />
            <span className="checkbox-span">Keep me logged in</span>
          </div>
          <div className="forgot-pwd-block d-inline" onClick={() => (window.location.href = "/client/reset")}>
            <p className="text-decoration-underline float-right color-light-blue">Forget Password?</p>
          </div>
        </div>

        <div className="mt-5 pb-4 text-center">
          <Button type="button" style={{ width: "216px" }} onClick={() => (window.location.href = "/client/myTasks")}>
            Login to your account
          </Button>
        </div>
      </div>

      <div className="login-form-footer">
        <div className="line-center-text pt-5">
          <p>
            <span className="line-center font-size-bold-20">New to Bolter?</span>
          </p>
        </div>

        <div className="d-flex justify-content-center pb-4">
          <Button type="button" className="background-light">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
