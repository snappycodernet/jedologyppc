import React from "react";
import "./Testimonials.css";

const Testimonials = props => {
  return (
    <div className="testimonials-container" data-aos="zoom-in">
      <div className="testimonials-header">
        <h1 className="section-title">TESTIMONIALS</h1>
      </div>
      <div className="testimonial-section">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="testimonial">
              <blockquote className="blockquote">
                <i className="far fa-comment" />
                <p>Joanna is a valuable asset. She's a dedicated professional who I'm glad to have the pleasure of working with.</p>
                <footer className="blockquote-footer">Martin S.</footer>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="testimonial">
              <blockquote className="blockquote">
                <i className="far fa-comment" />
                <p>If you need anything Google related done, Joanna is your gal. She's smart, driven, and always knows the right questions to ask.</p>
                <footer className="blockquote-footer">Susan C.</footer>
              </blockquote>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="testimonial">
              <blockquote className="blockquote">
                <i className="far fa-comment" />
                <p>
                  I love how easy Joanna is to work with. If I have a question or an idea, she's always available. She knows the ins and outs of
                  advertising on Google.
                </p>
                <footer className="blockquote-footer">Ian T.</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
