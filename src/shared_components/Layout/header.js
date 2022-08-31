import React, { useEffect } from "react";
import Navbar from "./mini_components/navbar";
import Navigation from "./Navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import Example from "../../Pages/Nav";
function Header() {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up-right" className="heade ">
      
      <Example/>
      
      
      {/* <Navigation />
      <Navbar /> */}
    </div>
  );
}

export default Header;
