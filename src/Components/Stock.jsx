import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function Stock() {
  return (
    <>
      <div className="main">
        <div
          className="background-image bg-[url('/images/servicebanner.png')] bg-cover bg-center w-full h-auto overflow-hidden"
        >
          <div className="flex roboto-thin ml-6 sm:ml-12 md:ml-16 lg:ml-24">
            <div className="text-div flex mt-8 md:mt-10 lg:mt-12">
             <Link to="/"><span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white">Home</span></Link>
              <MdOutlineKeyboardArrowRight
                className="text-white h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
                title="arrow"
              />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[rgb(0,173,239)]">
                Service
              </span>
            </div>
          </div>

          <div className="heading flex flex-wrap gap-2 ml-6 sm:ml-12 md:ml-16 lg:ml-24 mt-12 md:mt-16 lg:mt-24">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl roboto-light">Our</h1>
            <h1 className="text-[rgb(0,173,239)] text-3xl sm:text-4xl md:text-5xl roboto-light">Services</h1>
          </div>

          <div className="paragraph ml-6 sm:ml-12 md:ml-16 lg:ml-24 mt-6 md:mt-8 lg:mt-10">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:w-[450px] md:w-[550px] tracking-normal">
              Our dedicated customer support team is here to assist you at every stage of your loan journey. Whether you
              have questions about the application process or need advice on the right loan for your situation, we're
              just a call or message away.
            </p>
          </div>

         
          <div className="button flex pl-6 sm:pl-12 md:pl-16 lg:pl-24 mt-10 mb-28">
            <button className="bg-white p-2 w-[150px] text-[rgb(0,173,239)] rounded-3xl tracking-wider text-xs sm:text-sm md:text-md lg:text-lg font-medium">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stock;
