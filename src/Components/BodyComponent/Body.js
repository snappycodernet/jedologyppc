import React from "react";
import "./Body.css";

const Body = props => {
  return (
    <div className="body-container">
      <p className="lead center bodyText">
        Reach Your Prospect At The Right Time And Right Place. With Google, you can target your ideal prospect in the exact moment they are searching
        for products or services you offer. In addition, Google provides key metrics that allows you to track the profitability of your ads.
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="bodyText bodyColumn">
            <p className="lead">
              As a <strong>Certified Google Ads Specialist</strong>, I can help you exceed your marketing goals for less and half the time. Leave the
              stress about online marketing behind and hire an expert who will simplify the process for you. <br />
              <br />
              Here is what I can do for you:
            </p>
            <ul>
              <li>Get Your High Quality Traffic</li>
              <li>Boost Your Target Audience</li>
              <li>Increase Sales & Customer Retention</li>
              <li>Provide In-Depth Reports On Your Ad's Profitability & Success </li>
              <li>Direct Personal Service. No Customer/Sales Agent To Deal With</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="bodyText bodyColumn">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0KORYq5WCXs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </div>
      <div className="btn-div">
        <a href="https://calendly.com/jedologyppc" className="book-consultation-btn" target="_blank">
          Book Consultation
        </a>
      </div>
    </div>
  );
};

export default Body;
