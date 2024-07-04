import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Serivces from "./components/Serivces";
import {BallTriangle} from 'react-loader-spinner'
function App() {

  const [loading,setloading] =useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3200);
  },[])
  return(
  <>
  {
    loading? 
   <div className="bg-slate-900 h-[100vh] flex justify-center items-center" >
    <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#d946ef"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
   </div>:
  
    <div className="bg-slate-900">
    <Nav />
    <Banner/>
    <About/>
    <Serivces/>
    <Projects/>
   <Contact/>
   <Footer/>
  </div>
  }
  </>)
}

export default App;
