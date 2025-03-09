import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav bg-[rgb(248,249,250)] flex justify-between items-center px-5  md:px-1 lg:px-[7vw] py-4 lg:py-6 w-full">
      
      <div className="nav-image flex items-center md:px-14 lg:px-2 xl:px-1">
        <img
          className="h-12 w-12 object-contain"
          src="/images/logo.png"
          alt="Logo"
        />
        <h1 className="text-xl text-[rgb(42,110,195)] ml-3 sm:text-xl md:text-2xl font-semibold">
          Manba Finaserve
        </h1>
      </div>

     
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        {isOpen ? (
          <div className="cursor-pointer">
            <span className="block w-8 h-[3px] bg-[rgb(42,110,195)] rotate-45 translate-y-[6px]"></span>
            <span className="block w-8 h-[3px] bg-[rgb(42,110,195)] -rotate-45"></span>
          </div>
        ) : (
          <div className="cursor-pointer flex flex-col gap-[5px]">
            <span className="block w-8 h-[3px] bg-[rgb(42,110,195)]"></span>
            <span className="block w-8 h-[3px] bg-[rgb(42,110,195)]"></span>
            <span className="block w-8 h-[3px] bg-[rgb(42,110,195)]"></span>
          </div>
        )}
      </div>

     
      <div
        className={`nav-elements flex-col sm:flex-row items-center sm:flex gap-4 sm:gap-6 md:gap-8 text-[2.5vh] sm:text-[3vh] md:text-[3.5vh] absolute sm:static bg-[rgb(248,249,250)] sm:bg-transparent top-0 left-0 right-0 sm:top-auto sm:left-auto sm:right-auto transition-transform duration-300 ease-in-out sm:translate-x-0 z-10 sm:z-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="hover:text-[rgb(42,110,195)] py-4 sm:py-0" onClick={() => setIsOpen(false)}>
          <h1 className='text-lg roboto-thin roboto'>Home</h1>
        </Link>
        <Link to="/about" className="hover:text-[rgb(42,110,195)] py-4 sm:py-0" onClick={() => setIsOpen(false)}>
          <h1 className='text-lg roboto-thin'>About Us</h1>
        </Link>
        <Link to="/services" className="hover:text-[rgb(42,110,195)] py-4 sm:py-0" onClick={() => setIsOpen(false)}>
          <h1 className='text-lg roboto-thin'>Services</h1>
        </Link>
        <Link to="/contact" className="hover:text-[rgb(42,110,195)] py-4 sm:py-0" onClick={() => setIsOpen(false)}>
          <h1 className='text-lg roboto-thin'>Contact Us</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
