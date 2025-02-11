import React from "react";
import { Link } from "react-router-dom";
import { About, Home, Work, Navbar, Tech, StarsCanvas } from "../components";

const Landing = () => {
  return (
    <div className="relative z-0 top-0 bg-primary">
      <div className="h-screen bg-cover bg-no-repeat bg-center">
        <Navbar />
        <div className="h-screen relative z-0">
          <Home />
          <StarsCanvas />
        </div>
      </div>
      <div className="relative z-0">
        <About />
        <StarsCanvas />
      </div>
      <div className="h-auto bg-cover bg-no-repeat bg-center">
        <div className="relative z-0">
          <Work />
          <StarsCanvas />
        </div>
      </div>

      {/* <div className=' h-auto bg-cover bg-no-repeat bg-center'>
                <div className='relative z-0 h-auto'>
                    <Tech />
                    <StarsCanvas />
                </div>
            </div> */}

      <div className="absolute bottom-0 right-0 h-auto bg-cover bg-no-repeat bg-center">
        <Link to="/credit">
          <p className="text-slate-700 text-[14px] pl-1 tracking-wider pr-3">
            credits
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
