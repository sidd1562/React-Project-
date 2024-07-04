import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">LOGO</span>
          <p>New website</p>
        </div>
        <div>
          <h2 className="text[22px] font-semibold text-fuchsia-800 py-2 uppercase">Service</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2 ">web Desigh</li>
            <li className="my-2 ">web Developemnt</li>
            <li className="my-2 ">SEO</li>
            <li className="my-2 ">E-Commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text[22px] font-semibold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className=" text-[16px] my-4">Email: Siddharth@gmail.com </p>
          <p className=" text-[16px] my-4">Phone: +91 9564541254 </p>
        </div>
      <div>
      <h2 className="text[22px] font-semibold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
          <a  className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
            href="">  
            <AiFillGithub  />
          </a>
          <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
            href="">
         
            <FaLinkedinIn  />
          </a>
          <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
            href="">
           
            <FaInstagram  />
          </a>
          <a className="text-white hover:text-fuchsia-800  transition-all duration-150 ease-in-out"
            href="">
            
            <FiTwitter />
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
