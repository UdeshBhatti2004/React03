import React from 'react';

function HeaderPart() {
  return (
    <div className="main-div h-screen w-full overflow-hidden box-border">
      <div className="image-div bg-[url('/images/Homeloansimg.png')] bg-cover bg-center h-full w-full">
        <div className="content flex flex-col justify-center items-start h-full">
          
          <div className="heading mt-48 px-4 sm:px-12">
            <h1 className="text-white roboto-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl  mx-10">
              Bring Your Aspirations To Life,
            </h1>
            <h1 className="text-[rgb(0,173,239)] roboto-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 mx-10">
              With A Quick Loan.
            </h1>
          </div>

          
          <div className="paragraph px-4 sm:px-12">
            <p className="text-white text-lg sm:text-2xl md:text-3xl mt-8 max-w-[600px] mx-10">
              Welcome to Manba Finance, where you can find a loan solution
              customized for your needs.
            </p>
          </div>

       
          <div className="button px-4 sm:px-12 mt-4 mb-36 mx-10">
            <button className="bg-white p-2 w-[150px] text-[rgb(0,173,239)] rounded-2xl mt-10 tracking-wider text-sm sm:text-md md:text-lg font-medium">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPart;
