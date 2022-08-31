import FootMap from "./mini_components/footer_map";

import { useEffect } from "react"
import { FaApple , FaAmazon , FaGitAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
;



function Footer() {
    //useEffect
useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="foot w-full">
      {/* <h1 data-aos="zoom-out-up" className="Yozuv combi-text text-3xl font-semibold ">
        Proident in deserunt sit consectetur reprehenderit nulla
      </h1> */}
      <FootMap
     
      />

      

      {/* <p className=" combi-text text-center text-md text-black">
        IT-UNITY © 2022 Privacy & Legal Vehicle Recalls Contact Careers News
        Engage Locations
      </p>

      <div data-aos="zoom-in-right"  className="iconla   ">
      
        <a href="https://www.apple.com/store">
            <FaApple  
        className="w-10 ml-6  h-11 combi-text"
        /> 
        </a>
        <a href="https://www.amazon.com/">
            <FaAmazon

          className="w-10 ml-6 h-11 combi-text"
            />
        </a>
        <a href="https://github.com/">
            <FaGitAlt

          className="w-10 ml-6 h-11 combi-text"
            />
        </a>
       
      
      </div> */}
    </div>
  );
}

export default Footer;
