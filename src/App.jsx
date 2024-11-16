import React from "react";
import Navbar from "./Componenets/Navbar";
import Landing from "./Componenets/Landing";
import Aboutus from "./Componenets/Aboutus";
import Services from "./Componenets/Services";
import Gallery from "./Componenets/Gallery";
import Promotions from "./Componenets/Promotions";
import Blog from "./Componenets/Blog";

const App = () => {
  return <div>
    <Navbar/>
    <Landing/>
    <Aboutus/>
    <Services/>
    <Gallery/>
    <Promotions/>
    <Blog/>
  </div>;
};

export default App;
