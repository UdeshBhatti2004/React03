import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {FaFacebookF,FaInstagram,FaLinkedin,FaRegCopyright,}from   "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <div className="main bg-[rgb(33,33,33)] h-auto w-full">
        <div className="logo-content flex flex-col justify-center items-center">
          <div className="image mt-20">
            <img
              className="h-[70px] w-[70px] object-contain"
              src="\images\logo.png"
            />
          </div>
          <div className="text">
            <h1 className="text-white ml-[1vw] roboto-thin text-2xl tracking-wide">
              Manba Finaserve
            </h1>
          </div>
        </div>

        <div className="line flex justify-center">
          <div className="line-div bg-gray-500 w-[1100px] h-[1px] mt-10 flex"></div>
        </div>

        
      
      
      <div className="mainpart flex flex-col lg:flex  lg:flex-row px-5 lg:px-28 gap-8">

  <div className="first w-full lg:w-[50%] p-5">
    <div className="paragraph text-white roboto-thin mt-10 lg:mt-20">
      <h1>
        With thousands of people starting up new businesses every day,
        thousands of families looking for a new mortgage, and so on, loan
        companies play a vital role in today's society...
      </h1>
    </div>

    <div className="second flex-col  mt-8 ">
     
      <div className="first-image flex items-center gap-2">
        <TfiLocationPin size={20} color="white" title="Location Icon" />
        <h1 className="text-white text-md roboto-thin tracking-wider">
          312, superdiamond market
        </h1>
      </div>

     
      <div className="second-image flex items-center gap-2 mt-4">
        <IoCallOutline size={20} color="white" title="Call Icon" />
        <h1 className="text-white text-md roboto-thin tracking-wide">
          +91 22 6212 5000
        </h1>
      </div>
    </div>
  </div>

 
  <div className="links-div flex flex-col md:flex-row lg:flex-row  w-full lg:w-[60%] justify-evenly p-5 lg:p-0">

    <div className="pages mt-10 lg:mt-20">
      <h1 className="text-white roboto-light text-2xl mb-1">Pages</h1>
      <div className="home flex items-center mx-[-6px]  mt-3">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
      <Link to="/">  <h1 className="text-white roboto-thin text-md">Home</h1></Link>
      </div>
      <div className="home flex items-center mx-[-6px]  mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
       <Link to="/about"><h1 className="text-white roboto-thin text-md">About Us</h1></Link>
      </div>
      <div className="home flex items-center mx-[-6px] mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
       <Link to="/contact"><h1 className="text-white roboto-thin text-md">Contact Us</h1></Link>
      </div>
      <div className="home flex items-center mx-[-6px] mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
      <Link to="/services"><h1 className="text-white roboto-thin text-md">Services</h1></Link>
      </div>
    </div>

    
    <div className="loan mt-10 lg:mt-20">
      <h1 className="text-white roboto-light text-2xl  mb-1">Loan</h1>
      <div className="home flex items-center mx-[-6px]  mt-3">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
        <h1 className="text-white roboto-thin text-md  ">Home Loan</h1>
      </div>
      <div className="home flex items-center mx-[-6px]  mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
        <h1 className="text-white roboto-thin text-md">Personal Loan</h1>
      </div>
      <div className="home flex items-center mx-[-6px]  mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
        <h1 className="text-white roboto-thin text-md">Gold Loan</h1>
      </div>
      <div className="home flex items-center mx-[-6px] mt-1">
        <MdOutlineKeyboardArrowRight size={20} color="white" />
        <h1 className="text-white roboto-thin text-md">Business Loan</h1>
      </div>
    </div>

    
    <div className="social-media mt-10 lg:mt-20">
      <h1 className="text-white roboto-light text-2xl mb-1">Social Media</h1>
      <div className="home flex items-center gap-1  mt-3">
        <FaFacebookF size={16} color="white" />
        <h1 className="text-white roboto-thin text-md tracking-wide">
          Facebook
        </h1>
      </div>
      <div className="home flex items-center gap-1  mt-1">
        <FaInstagram size={17} color="white" />
        <h1 className="text-white roboto-thin text-md tracking-wide">
          Instagram
        </h1>
      </div>
      <div className="home flex items-center gap-1  mt-1">
        <IoLogoTwitter size={19} color="white" />
        <h1 className="text-white roboto-thin text-md tracking-wide">
          Twitter
        </h1>
      </div>
      <div className="home flex items-center gap-1 mt-1">
        <FaLinkedin size={16} color="white" />
        <h1 className="text-white roboto-thin text-md tracking-wide">
          LinkedIn
        </h1>
      </div>
    </div>
  </div>
</div>




      <div className="main-2 bg-white w-full p-8">
        <div className="flex-div md:flex md:justify-between md:px-20 ">


          <div className="first flex  w-auto justify-center gap-2
            items-center   ">
            <div className="icon ">
              <FaRegCopyright
                size={14}
                color="black"
                title="Copyright"
                className=""
              />
            </div>
            <div className="text roboto-thin">
              <h1 className="text-sm">
                Manba Finaserve Holdings Limited
              </h1>
            </div>
          </div>
          <div className="second flex items-center justify-center mt-2 gap-2">
            <div className="icon ">
              <IoMdMail
                size={20}
                color="black"
                title="Email"
                className=""
              />
            </div>
            <div className="text roboto-thin">
              <h1 className=" text-sm ">
                manbafinaserve@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Footer;
