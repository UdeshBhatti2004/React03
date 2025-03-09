
import React from "react";

function Cash() {
  return (
    <div className="main h-auto w-full mt-32">
      <div
        className="background-image bg-cover bg-center flex items-center justify-center flex-col xl:flex-row gap-8"
        style={{ backgroundImage: "url('/images/cashloanimg.png')" }}
      >
      
        <div className="parts flex flex-col gap-8 items-center xl:items-start xl:flex-row w-full p-4 px-6 sm:px-12 md:px-24 lg:px-[100px]">
        
          <div className="image-container h-auto sm:h-[550px] md:h-[600px] sm:w-[600px] md:w-[650px] lg:h-[600px] lg:w-[680px] xl:h-[550px] w-full xl:w-[550px] bg-white rounded-[50px] shadow-lg flex items-center justify-center">
            <img
              src="/images/cashloanleftimg.png"
              alt="Cash Loan"
              className="h-[97%] w-[97%] object-cover rounded-[50px]"
            />
          </div>

          <div className="content w-full xl:w-[50%] flex flex-col items-center xl:items-start">

            <h1 className="text-white text-3xl sm:text-4xl xl:text-5xl roboto-medium w-full xl:w-[500px] mt-4 text-center xl:text-left">
              Do you need a small cash loan?
            </h1>

            <h2 className="text-2xl sm:text-3xl text-[rgb(0,173,239)] mt-5 w-full xl:w-[500px] text-center xl:text-left">
              We’ll provide you with anything between ₹1,00,000 and ₹50L!
            </h2>

            <p className="text-white text-base sm:text-lg xl:text-xl w-full xl:w-[585px] mt-6 xl:mt-10 text-center xl:text-left">
              If you're facing an unexpected financial expense, such as a
              medical emergency, car repair, or home repair, you may be
              considering taking out a small cash loan. Small cash loans are
              typically unsecured loans, which means you don't need to put up
              any collateral to get them. They can be a good option for people
              with less-than-perfect credit or who need money quickly.
            </p>

            <div className="button flex justify-center items-center mt-10 mx-auto sm:mx-[150px] lg:mx-[190px]">
              <div className="box bg-blue-400 h-[68px] w-[187px] rounded-xl">
                <button className="bg-white p-4 w-[180px] text-[rgb(0,173,239)] rounded-xl mx-1 mt-1 tracking-wider text-xl font-medium">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cash;











