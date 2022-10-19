import React from "react";

import Cover from "../cover/Cover";
import About from "../About/About";
import Slider from "../Slider/Slider";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
};

export default HomePage;
