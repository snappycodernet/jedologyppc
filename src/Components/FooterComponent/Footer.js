import React from "react";
import "./Footer.css";
import footerImg from "./assets/night_city.c0480e03.png";

const Footer = props => {
  return (
    <div className="footer-container">
      <img className="footer-img" src={footerImg} alt="NightSky" />
      <div>
        <p className="copyright-footer">Copyright &copy; 2019 Jedology PPC - Jedology@Outlook.com</p>
      </div>
    </div>
  );
};

export default Footer;
