import React, { useState, useMemo } from "react";
import Checkbox from "../../components/CheckBox/Checkbox";
import login from "../../assets/images/Left.png";
import headerImg from "../../assets/images/logo/ANAIZAIN LOGO.png";
import Input from "../../components/Input/Input";
import { registerUser } from "../../store/reducer/register";
import { useDispatch } from "react-redux";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook2 } from 'react-icons/im';
import { RiInstagramFill } from "react-icons/ri";
import  { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import googleStore from "../../assets/images/gPlay.png"
import appStore from "../../assets/images/App.png";
// import { ReactCountryDropdown } from 'react-country-dropdown'
// import 'react-country-dropdown/dist/index.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import "./Register.scss";
function Register() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const handleSelect = value => {
    setValue(value);
    console.log(value);
  }
  // const handleSelect = (country)=>{
  //   console.log(country);
  // }
  const dispatch = useDispatch();
    return(
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
                  <h3 className="text-danger">WELCOME TO ANAIZAN</h3>
                  <p className="text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quo, veniam. Alias minus consequatur aspernatur perferendis temporibus, 
                    esse id quae ipsam at itaque amet expedita nulla sint harum iusto optio aliquam?
                  </p>
                  <img src={login} alt="login photo" />
              </div>
              <div className="login_form d-flex flex-column">
                  <div className="d-flex w-100 flex-column text-center">
                      <h4 className="fw-bold fs-4">Create Account</h4>
                      <p>For business, brand or celebrity.</p>
                  </div>
                  <div className="role">
                    <p>I am</p>
                    <button>Seller</button>
                    <button>Buyer</button>
                    <button>Both</button>
                </div>
                  <form className="d-flex w-100 p-4 flex-column">
                  <div className="d-flex flex-column justify-content-center mb-4">
                      <label for="email">
                        Name 
                      </label>
                      <Input type="text" className="input-border" />
                    </div>
                    <div className="d-flex w-100 justify-content-center mb-4 border-rounded">
                        <div className="mr-4 w-75">
                            <label for="email">
                              Country 
                            </label>
                            {/* <select className="input-border border-rounded w-100">
                              <option value="mali">mali</option>
                            </select> */}
                            <Select options={options} value={value} onChange={handleSelect} />
                            {/* <ReactCountryDropdown onSelect={handleSelect} countryCode='IN' /> */}
                        </div>
                        <div>
                            <label for="email">
                              Telephone
                            </label>
                            <Input type="telephone" className="input-border" placeholder="+223" />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center mb-4">
                      <label for="email">
                        company Name
                      </label>
                      <Input  className="input-border" />
                    </div>
                    <div className="d-flex flex-column justify-content-center mb-4">
                      <label for="email">
                        Email or phone number 
                      </label>
                      <Input type="mail" className="input-border" />
                    </div>
                    <div className="d-flex mb-3">
                      <div className="mr-1">
                        <label for="email">
                          Password
                        </label>
                        <Input type="password" className="input-border" />
                      </div>
                      <div>
                        <label for="email">
                          Confirm password
                        </label>
                        <Input type="password" className="input-border" />
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100">
                      <div className="d-flex align-items-center"><Checkbox /><p className="mt-3">Remember me</p></div>
                      <div className="d-flex align-items-center"><Checkbox /><p className="mt-3 d-flex">I agree to all the <p className="text-danger">Terms</p>&nbsp;and&nbsp;<p className="text-danger">Privacy policy</p> </p></div>  
                    </div>
                    <div className="form-footer d-flex align-items-center text-center flex-column justify-content-center">
                        <button className="btn" onClick={()=>{
                          dispatch(registerUser());
                        }}>
                          Register
                        </button>
                        <span className="d-flex mt-3">Already have an account ?<p className="ml-3"><a className="text-danger" href="/login">Log in</a></p></span>
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

export default Register;
