import React, { useState } from "react"

import Logo from "./images/logo.svg"
import Bars from "./images/icon-hamburger.svg"
import Close from "./images/icon-close.svg"
import BgDesktop from "./images/bg-intro-desktop.svg"
import PhoneMockups from "./images/image-mockups.png"
import './App.css';
 
import Button from "./components/js/Button"
import Ul from "./components/js/Ul"

function App() {
    const [BarVisible, setBarVisible] = useState(true) 
    const [CloseVisible, setCloseVisible] = useState(false) 

    const changeVisibility = () => {
      setBarVisible(prevBar => !prevBar )
      setCloseVisible(prevClose => !prevClose)
    }

  const barClass = BarVisible ? "" : "not-visible"
  const closeClass = CloseVisible ? "" : "not-visible"

  return (
    <div className="container">
      <div className="nav-container-holder">
        <div className={`mobile-nav-list-container ${closeClass}`}>
          <div className="mobile-nav-list-div">
            <ul>
              <div className="mobile-nav-actual-list"><Ul name="Home"/></div>
              <div className="mobile-nav-actual-list"><Ul name="About"/></div>
              <div className="mobile-nav-actual-list"><Ul name="Contact"/></div>
              <div className="mobile-nav-actual-list"><Ul name="Blog"/></div>
              <div className="mobile-nav-actual-list"><Ul name="Careers"/></div>
            </ul>
          </div>
        </div>

        <div className="navigation-container">

          <div className="easybank-logo">
            <img src={Logo} alt="Easy Logo" />
          </div>

          <div className="nav-list-container">
            <div className="nav-list-div">
              <div className="nav-list-div-holder">
                <ul>
                  <div className="nav-actual-list"><Ul name="Home" /></div>
                  <div className="nav-actual-list"><Ul name="About" /></div>
                  <div className="nav-actual-list"><Ul name="Contact" /></div>
                  <div className="nav-actual-list"><Ul name="Blog" /></div>
                  <div className="nav-actual-list"><Ul name="Careers" /></div>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="nav-desktop-button">
            <Button />
          </div>

          <div className={`nav-phone-button ${barClass}`} onClick={changeVisibility}>
            <img className={"nav-phone-bars"} src={Bars} alt="Bars" />
          </div>
          <div className={`nav-phone-button ${closeClass}`} onClick={changeVisibility}>
            <img className={`nav-phone-close`} src={Close} alt="Close" />
          </div>
        </div>
      </div>
      <div className="top-content-container">

        <div className="top-content">
          <div className="phone-mockups">
            <img src={PhoneMockups} alt="Phone Mockups" />
          </div>
          <div className="creative-gradient">
            <img src={BgDesktop} alt="BG Desktop" />
          </div>
        </div>

        <div className="request-invite-container">
          <div className="request-invite-title title">Next Generation Digital Banking</div>
          <div className="request-invite-content paragraph">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,budgeting, investing, and much more.</div>
          <div className="request-invite-button">
            <Button />
          </div>
        </div>

      </div>

      <div className="why-chose-easybank-container">
        <div className="why-chose-easybank-title title">Why choose Easybank ?</div>
        <div className="why-chose-easybank-content paragraph">We leverage Open banking to turn your bank account into a financial hub. Control your finances like never before.</div>
      </div>
    </div>
  )
}

export default App;
