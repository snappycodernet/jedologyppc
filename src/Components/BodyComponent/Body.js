import React from "react";
import "./Body.css";
import chartImg from "./assets/charts-1.jpg";
import wordImg from "./assets/wordchart.png";

const Body = props => {
  return (
    <div className="body-container" data-aos="zoom-out">
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <img src={wordImg} alt="roadmap" className="bodyWordsImg" />
        </div>
        <div className="col-md-5 col-sm-12">
          <h1>
            <em>Efficient Performance</em>
          </h1>
          <p className="bodyParagraph">
            I develop clear strategic plans for Google Ads campaigns and make it easy for businesses to scale their marketing. I provide one on one
            consulting to ensure the best fit for your goals and budget.
          </p>
        </div>
      </div>
      <div className="header-div">
        <hr />
      </div>
      <div className="row chartImgRow">
        <div className="col-md-5 col-sm-12">
          <h1>
            <em>Consistent Results</em>
          </h1>
          <p className="bodyParagraph">
            Are your monthly sales or leads unpredictable? I provide high quality account management and consistent results so you can expand your
            business with ease.
          </p>
        </div>
        <div className="col-md-7 col-sm-12">
          <img src={chartImg} alt="sales" className="bodyChartImg" />
        </div>
      </div>
      <div className="header-div">
        <hr />
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1>
            <em>My Services...</em>
          </h1>
          <p>
            As a Certified Google Ads Specialist, I can help you exceed your marketing goals for less and half the time. Leave the stress about online
            marketing behind and hire an expert who will simplify the process for you.
          </p>
          <p>Here is what I can do for you:</p>
          <ul>
            <li>Grow your sales or leads with consistency</li>
            <li>Optimize your advertising strategy</li>
            <li>Increase awareness for your brand</li>
            <li>Provide detailed, customized reporting</li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 videoFrame">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0KORYq5WCXs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 btn-div">
          <a href="https://calendly.com/jedologyppc" className="book-consultation-btn" target="_blank">
            Book Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
