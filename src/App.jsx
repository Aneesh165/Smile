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

const App = () => {
  return <div>
    <Navbar/>
    <Landing/>
    <Aboutus/>
    <Services/>
    <Gallery/>
    <Promotions/>
    <Blog/>
    <Faq/>
    <BookingCrad/>
    <Footer/>
  </div>;
};

export default App;
