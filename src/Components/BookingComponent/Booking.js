import React from "react";
import "./Booking.css";

function getStarted() {
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSc5UlG5Dkk-Mx4XcFbeU54fU1HPbClTd1-3ZzB4HfjVvfchhw/viewform", "_blank");
}

const Booking = props => {
  return (
    <div className="booking-container" data-aos="zoom-out">
      <div className="booking-main-header">
        <h1 className="section-title">SERVICE & PRICING</h1>
      </div>
      <div className="bodyText">
        <div className="row equal">
          <div className="col-md-4 col-sm-12">
            <div className="card h-100 text-center">
              <h5 className="card-header">SMALL BUDGET</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">One Time Setup Fee $300</li>
                <li className="list-group-item">Monthly Maintenance Fee $150</li>
              </ul>
              <button type="button" className="btn btn-outline-primary" onClick={getStarted}>
                Get Started
              </button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card h-100 text-center">
              <h5 className="card-header">MEDIUM BUDGET</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">One Time Setup Fee $450</li>
                <li className="list-group-item">Monthly Maintenance Fee $250</li>
              </ul>
              <button type="button" className="btn btn-outline-primary" onClick={getStarted}>
                Get Started
              </button>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card h-100 text-center">
              <h5 className="card-header">LARGE BUDGET</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">One Time Setup Fee $500</li>
                <li className="list-group-item">Monthly Maintenance Fee 10% of Ad Spend</li>
              </ul>
              <button type="button" className="btn btn-outline-primary" onClick={getStarted}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
