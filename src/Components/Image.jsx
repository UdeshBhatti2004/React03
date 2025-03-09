
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


function Image() {
  return (
    <>
      <div className="main flex">
        <div
          className="
            background-image 
            bg-[url('/images/aboutBanner.png')] 
            bg-cover 
            bg-center 
            w-full 
            h-[50vh]"
        >
          <div className="flex items-center h-full roboto-thin
             ml-6
            sm:ml-7
            md:ml-20
            xl:ml-24
           ">
          
          <Link to="/"><span className="text-4xl text-white">Home</span></Link>

            
            <MdOutlineKeyboardArrowRight 
              className="text-white h-10 w-10   " 
              title="arrow" 
            />

            <span className="text-4xl text-[rgb(0,173,239)]">About</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
