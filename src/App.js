import React, { useState } from "react"

import Logo from "./images/logo.svg"
import Bars from "./images/icon-hamburger.svg"
import Close from "./images/icon-close.svg"
import BgDesktop from "./images/bg-intro-desktop.svg"
import PhoneMockups from "./images/image-mockups.png"
import './App.css';
 
import Button from "./components/js/Button"
import Ul from "./components/js/Ul"
import Easycard from "./components/js/Easycard"
import Article from "./components/js/Article"
import SocialIcon from "./components/js/SocialIcon"

import Api from "./images/icon-api.svg"
import Budgeting from "./images/icon-budgeting.svg"
import Onboarding from "./images/icon-onboarding.svg"
import Online from "./images/icon-online.svg"

import Confetti from "./images/image-confetti.jpg"
import Currency from "./images/image-currency.jpg"
import Plane from "./images/image-plane.jpg"
import Restaurant from "./images/image-restaurant.jpg"

import Darklogo from "./images/dark-logo.svg"

import Facebook from "./images/icon-facebook.svg"
import Youtube from "./images/icon-youtube.svg"
import Twitter from "./images/icon-twitter.svg"
import Pinterest from "./images/icon-pinterest.svg"
import Instagram from "./images/icon-instagram.svg"

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
        <div className="why-chose-easy-bank-div">
          <div className="why-chose-easybank-title title">Why choose Easybank ?</div>
          <div className="why-chose-easybank-content paragraph">We leverage Open banking to turn your bank account into a financial hub. Control your finances like never before.</div>
        </div>
      </div>

      <div className="second-portion-container">
        <div className="second-portion-div">

          <Easycard 
            source={Online} 
            title="Online Banking"
            content="Our modern web and monile applications allow you to keep track of your finances whenever you arein the world."
          />

          <Easycard 
            source={Budgeting} 
            title="Simple Budgeting"
            content="See exactly where your money goes each month. Recive notifications when you're close to hittingyour limits."
          />

          <Easycard 
            source={Onboarding} 
            title="Fast Onboarding"
            content={"We don't do branches. Open account in minutes online and start taking control of your financesright away."}
          />

          <Easycard 
            source={Api}
            title="Open API"
            content="Manage your savings, investments, pension, and much more from one account. Tracking your moneyhas never been easier."
          />
        </div>
      </div>

      <div className="latest-articles-container">
        <div className="latest-articles-head">Latest Articles</div>
        <div className="latest-articles-div">
          
          <Article 
              source={Currency}
              author="By Clarie Robinson"
              title="Recieve money in any currency with no fees"
              content="The world is getting snaller and we're becoming more mobile. So why should you be forced to only recive money in a single ..."
            />

            <Article 
              source={Restaurant}
              author="By Wilsion Huston"
              title="Treat yourself without worrying about money"
              content="Our simple budgeting feature allow you to seperteout your spendings and set realistic limits each month. That means you ..."
            />

            <Article 
              source={Plane}
              author="By Wilsion Huston"
              title="Take your Easybank card whereever you go"
              content="We want you to your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
            />

            <Article 
              source={Confetti}
              author="By Clarie Robinson"
              title="Our invite-only Beta acoounts are now live!"
              content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request and invite through the site ..."
            />
        </div>
        
      </div>

      <div className="easy-bank-footer-container">
        <div className="easy-bank-footer-div">
          <div className="easy-bank-footer-logo-container">
            <div className="easy-bank-footer-logo">
              <img src={Darklogo} alt="Dark logo"/>
            </div>
            <div className="easy-bank-footer-social-icons">
              
              <SocialIcon 
                source={Facebook}
                name="Facebook"
              />

              <SocialIcon 
                source={Youtube}
                name="Youtube"
              />

              <SocialIcon 
                source={Twitter}
                name="Twitter"
              />

              <SocialIcon 
                source={Pinterest}
                name="Pinterest"
              />

              <SocialIcon 
                source={Instagram}
                name="Instagram"
              />

            </div>
          </div>
          <div className="easy-bank-footer-first-nav-container">
            <ul className="footer-ul">
              <Ul name="About Us"/>
              <Ul name="Contact"/>
              <Ul name="Blog"/>
            </ul>
          </div>
          <div className="easy-bank-footer-last-nav-container">
            <ul className="footer-ul">
              <Ul name="Careers"/>
              <Ul name="Support"/>
              <Ul name="Privacy Policy"/>
            </ul>
          </div>
          <div className="easy-bank-footer-request-invite-container">
            <div className="easy-bank-footer-request-invite">
              <Button />
            </div>
            <div className="easy-bank-footer-copyright paragraph">
              © Easybank. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
