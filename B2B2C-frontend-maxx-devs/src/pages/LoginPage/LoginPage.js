import React, { useEffect, useState } from "react";
import headerImg from "../../assets/images/logo/ANAIZAIN LOGO.png";
import login from "../../assets/images/Left1.png";
import LogoIcon from "../../assets/images/logo.png";
import Checkbox from "../../components/CheckBox/Checkbox";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/reducer/login";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook2 } from 'react-icons/im';
import { RiInstagramFill } from "react-icons/ri";
import  { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import googleStore from "../../assets/images/gPlay.png"
import appStore from "../../assets/images/App.png";
import { REGISTER } from "../../settings/constants";


function LoginPage() {
      const [ username, setUsername ] = useState("");
      const [ password, setPassword ] = useState("");
      const handleUsername = (e)=>{
        setPassword(e.target.value);
      }
      const handlePassword = (e)=>{
        setUsername(e.target.value);
      }
      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(loginUser(username, password));
      }, []);
  return (
    <>
      <div className="Login">
        {/* this is the header */}
          <header className="Header">
            <img src={headerImg} alt="logo" />
            
                <select className="Select">
                  <option value="english">
                    English
                  </option>
                  <option value="french">
                    French
                  </option>
                  <option value="latin">
                    latin
                  </option>
                </select>
          </header>  
          {/* login form */}
          <div className="form_body d-flex align-items-center justify-content-between">
              <div className="d-flex w-50 flex-column pr-2">
                  <h3>WELCOME BACK</h3>
                  <p className="text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos veniam. Alias minus consequatur aspernatur perferendis temporibus, 
                    esse id quae ipsam at itaque amet expedita nulla sint harum iusto optio aliquam?
                  </p>
                  <img src={login} alt="login photo" />
              </div>
              <div className="login_form d-flex flex-column">
                  <div className="d-flex w-100 flex-column text-center">
                      <h4 className="fw-bold fs-4">Sign in</h4>
                      <p>For business, band or celebrity.</p>
                  </div>
                  <form className="d-flex w-100 p-4 flex-column">
                    <div className="d-flex flex-column justify-content-center mb-4">
                      <label for="email">
                        Email or phone number 
                      </label>
                      <Input value={username || ""} change={handleUsername} className="input-border" />
                    </div>
                    <div className="d-flex mb-3 flex-column">
                      <label for="email">
                        Password
                      </label>
                      <Input value={username || ""} change={handlePassword} className="input-border" />
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <div className="d-flex align-items-center"><Checkbox /><p className="mt-3">Remember me</p></div>
                      
                      <p className="forgot-password text-danger fw-bold">Forget password</p>
                    </div>
                    <div className="form-footer d-flex align-items-center text-center flex-column justify-content-center">
                        <button className="btn" onClick={()=>{
                          dispatch(loginUser(username, password));
                        }}>
                          LOGIN
                        </button>
                        <span className="d-flex mt-3">New to Anaizan ? <p className="ml-3">
                          <a className="text-danger" href={REGISTER}>Join free</a></p></span>
                        <div className="social">
                          <h6>OR SIGN IN WITH</h6>
                          <button className="facebook"><span className="d-flex text-center align-items-center m-1"><p><FaFacebookF /></p><p className="btn-text pt-1 ml-1">Facebook</p></span></button>
                          <button className="linkedin"><span className="d-flex text-center align-items-center m-1"><p><GrLinkedinOption /></p><p className="btn-text pt-1 ml-1">Linkedin</p></span></button>
                          <button className="google"><span className="d-flex text-center align-items-center m-1"><p><AiOutlineGoogle /></p><p className="btn-text pt-1 ml-1">Google</p></span></button>
                        </div>
                    </div>
                    
                  </form>
              </div>
          </div>
          <div className="footer">
              <div className="footer1 d-flex flex-cloumn align-items-center justify-content-between">
                  <div className="d-flex flex-column ml-5">
                      <h3>Télécharger:</h3>
                      <div className="d-flex justify-content-between">
                        <img  className="mr-2" src={googleStore} alt="playstore" />
                        <img src={appStore} alt="apple store" />
                      </div>
                  </div>
                  <div className="text-wrap">
                      <p className="text-white">
                        Anaïzan.com Español - Português - Deutsch - Français -
                        Italiano -  Nederlands -
                        tiếng Việt - Indonesian
                      </p>
                      <p className="text-white">
                        Anaizan Group | Anaizan Marketplace | Anaizancoud.com |
                        Anaizan Telecom | Anagopay | Lazada | Anaizan Security
                      </p>
                  </div>
                  <div className="d-flex flex-column ml-5">
                      <h3>Suivez nous sur:</h3>
                      <div className="social d-flex justify-content-between align-items-center border border-white rounded">
                        <p><ImFacebook2 /></p>
                        <p><RiInstagramFill /></p>
                        <p><BsLinkedin /></p>
                        <p><FaTwitterSquare /></p>
                      </div>
                  </div>
              </div>
              <div className="footer2 d-flex p-5 align-items-center justify-content-between">
              <p>
                  Copyright © 2021 Anaïzan. All rights reserved.
                </p>
                <p>

                  Privacy / Terms of use / Cookie preferences / Protect my personal data / AdChoices
                </p>
              </div>
          </div>
      </div>
    </>
  );
}

export default LoginPage;
