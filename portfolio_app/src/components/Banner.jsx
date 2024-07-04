import React, { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import image from "../assets/gojo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function () {
    useEffect(()=>{
      AOS.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750,
      })
    },[])
  return (
    <div  className="lg:px-56 px-0 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center  ">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[55px] font-semibold mb-8 leading-normal uppercase">
          Welcome To <span className=" text-fuchsia-500">My Website</span>
        </h1>
        <p data-aos="fade-left">Hello, I'm [Your Name], a passionate [Your Profession, e.g., web developer, graphic designer, writer] with a knack for [your specific skills or specialties</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2 ">
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FaInstagram className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                <FiTwitter className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up"
        src={image}
        width={200}
        height={200}
        className="rounded-full border-2 p-1 border-fuchsia-500 img_glow"
        ima
        alt=""
      />
    </div>
  );
}
