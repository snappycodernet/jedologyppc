import React from "react";
import "../../../src/index.css";
import "./Header.css";
import logo from "./assets/logo_lg.png";

const Header = props => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="logo-container">
          <img src={logo} id="logo" alt="Jedology PPC" />
          <h4 id="companyName">JEDOLOGY PPC</h4>
        </div>
        <div className="heading-text">
          <h1>
            Scale your business with efficient
            <br />
            and consistent advertising.
          </h1>
          <p className="sub-heading">
            Jedology PPC provides efficient and scalable advertising on Google for businesses so they can start receiving consistent results each
            month. Google is the best platform for driving sales and leads to your business. By building high quality Google Ad campaigns, Jedology
            PPC ensures your advertising is always successful and profitable.
          </p>
        </div>
      </div>
      <div className="header-div">
        <hr />
      </div>
    </div>
  );
};

export default Header;
