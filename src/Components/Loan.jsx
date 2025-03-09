import React from 'react';

function Loan() {
  return (
    <div className="main bg-[rgb(241,250,254)] h-auto w-full flex justify-center items-center">
 <div className="blue-box grid grid-cols-1 md:grid-cols-1 md:w-[60%] lg:grid-cols-2 xl:grid-cols-3 xl:w-full gap-8 px-4 max-w-6xl mt-24 lg:w-[97%]">
  <div className="blue-box-1 bg-[rgb(0,173,239)] h-[470px] flex flex-col items-center shadow-lg rounded-2xl p-4">
    <div className="image mt-10">
      <img src="./images/backpersonalLoanimg.png" className="h-14 w-14 object-contain" />
    </div>
    <div className="heading">
      <h1 className="text-white roboto-light text-2xl mt-8">Personal Loan</h1>
    </div>
    <div className="paragraph text-center mt-10">
      <p className="text-white text-xl roboto-thin">
        Get Personal Loan Based On Your Credit Profile- From 1 Lakh To 15 Lakh.
      </p>
    </div>
    <div className="button px-4 sm:px-12 mt-[67px] mx-10">
      <button className="bg-white p-2 w-[200px] text-[rgb(0,173,239)] rounded-3xl tracking-wider roboto-thin">
        FIND OUT MORE
      </button>
    </div>
  </div>

  <div className="blue-box-2 bg-[rgb(0,173,239)] h-[470px] flex flex-col items-center shadow-lg rounded-2xl p-4">
    <div className="image mt-10">
      <img src="./images/backgoldLoanimg.png" className="h-14 w-14 object-contain" />
    </div>
    <div className="heading">
      <h1 className="text-white roboto-light text-2xl mt-8">Gold Loan</h1>
    </div>
    <div className="paragraph text-center mt-10">
      <p className="text-white text-xl roboto-thin">
        The most significant objective is to project gold loans as a 'Good Smart
        Option, as against being the Last Option' for seeking financial credit.
      </p>
    </div>
    <div className="button px-4 sm:px-12 mt-10 mx-10">
      <button className="bg-white p-2 w-[200px] text-[rgb(0,173,239)] rounded-3xl tracking-wider roboto-thin">
        FIND OUT MORE
      </button>
    </div>
  </div>

  <div className="blue-box-3 bg-[rgb(0,173,239)] h-[470px] flex flex-col items-center shadow-lg rounded-2xl p-4 mb-24 lg:col-span-2 lg:mx-auto lg:w-[60%] xl:col-span-1 xl:w-[98%]">
    <div className="image mt-10">
      <img src="./images/backhomeloanimg.png" className="h-14 w-14 object-contain" />
    </div>
    <div className="heading">
      <h1 className="text-white roboto-light text-2xl mt-8">Home Loan</h1>
    </div>
    <div className="paragraph text-center mt-10">
      <p className="text-white text-xl roboto-thin">
        Various insurers in India & buy insurance policy online. Get instant
        quotes & save huge on premiums.
      </p>
    </div>
    <div className="button px-4 sm:px-12 mx-10 mt-[67px]">
      <button className="bg-white p-2 w-[200px] text-[rgb(0,173,239)] rounded-3xl tracking-wider roboto-thin">
        FIND OUT MORE
      </button>
    </div>
  </div>
</div>



    </div>
  );
}

export default Loan;


