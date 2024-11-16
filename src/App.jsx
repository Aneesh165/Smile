import React from "react";
import Navbar from "./Componenets/Navbar";
import Landing from "./Componenets/Landing";
import Aboutus from "./Componenets/Aboutus";
import Services from "./Componenets/Services";
import Gallery from "./Componenets/Gallery";

const App = () => {
  return <div>
    <Navbar/>
    <Landing/>
    <Aboutus/>
    <Services/>
    <Gallery/>
  </div>;
};

export default App;
