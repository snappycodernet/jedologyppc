import React from "react";
import Header from "../HeaderComponent/Header";
import Body from "../BodyComponent/Body";
import Booking from "../BookingComponent/Booking";
import Testimonials from "../TestimonialsComponent/Testimonials";
import Footer from "../FooterComponent/Footer";

const App = props => {
  return (
    <div>
      <Header />
      <Body />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
