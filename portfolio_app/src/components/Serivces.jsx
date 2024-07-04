import React from "react";

function Serivces() {
  return (
    <div  id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">
        Services
      </h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 ser_b_glow">HTML</h2>
        <h2 data-aos="fade-down"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 ser_b_glow">CSS</h2>
        <h2 data-aos="fade-up"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 ser_b_glow">Javascript</h2>
        <h2 data-aos="fade-down"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 ser_b_glow">React</h2>
        <h2 data-aos="fade-up"className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 ser_b_glow">Node</h2>
      </div>
    </div>
  );
}

export default Serivces;
