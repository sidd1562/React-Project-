import React from "react";
import image1 from '../assets/project1.png'
import image2 from '../assets/project2.png'
import image3 from '../assets/project4.png'
import image4 from '../assets/project5.png'

export default function Projects() {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center ">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Project</h1>
      <div  className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        <img data-aos="fade-up" width={300}  className="flex items-center justify-center rounded-3xl p-1  border-2 border-fuchsia-800 ser_b_glow" src={image1} alt="" />
        <img data-aos="fade-dowm" width={300} className="flex items-center justify-center rounded-3xl  p-1 border-2 border-fuchsia-800 ser_b_glow" src={image2} alt="" />
        <img data-aos="fade-up" width={300} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 ser_b_glow" src={image3} alt="" />
        <img data-aos="fade-down" width={300} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 ser_b_glow" src={image4} alt="" />
      </div>
    </div> 
  );
}
