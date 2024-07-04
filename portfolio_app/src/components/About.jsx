import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import image from "../assets/about-2.jpg";
function About() {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div
      id="About"
      className="lg:px-56 px-0 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center  ">
      <img
        data-aos="fade-down"
        src={image}
        width={200}
        height={200}
        className=" border-2 p-1 border-fuchsia-500 img_glow"
        ima
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[55px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About Me
        </h1>
        <p data-aos="fade-left">
        I've had the opportunity to work on diverse projects that have honed my skills and expanded my expertise. My journey in [your field] has been 
        </p>
        <div className="flex mt-8 gap-2">
          <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden  ">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
