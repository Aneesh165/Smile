import React from "react";
import Navbar from "./Componenets/Navbar";
import Landing from "./Componenets/Landing";
import Aboutus from "./Componenets/Aboutus";
import Services from "./Componenets/Services";
import Gallery from "./Componenets/Gallery";
import Promotions from "./Componenets/Promotions";
import Blog from "./Componenets/Blog";
import Faq from "./Componenets/Faq";
import BookingCrad from "./Componenets/BookingCrad";
import Footer from "./Componenets/Footer";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
  return <div>
    <BrowserRouter>
  <Navbar />
  <section id="home">
    <Landing />
  </section>
  <section id="about">
    <Aboutus />
  </section>
  <section id="services">
    <Services />
  </section>
  <section id="gallery">
    <Gallery />
  </section>
  <section id="promotions">
    <Promotions />
  </section>
  <section id="blogs">
    <Blog />
  </section>
  <section id="faq">
    <Faq />
  </section>
  <section id="booking">
    <BookingCrad />
  </section>
  <section id="contact">
    <Footer />
  </section>
</BrowserRouter>

  </div>;
};

export default App;
