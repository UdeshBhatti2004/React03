import React from 'react';

function Info() {
  return (
    <div className="main bg-white w-full flex items-center justify-center p-4">
      <div className="icons grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 mt-10">
        <div className="icon1 bg-white flex flex-col items-center p-4 ">
          <div className="icon-img w-24 h-24 flex-shrink-0">
            <img src="public/images/economy 1.png" alt="Economy" className="w-full h-full object-contain" />
          </div>
          <p className="text-center max-w-full sm:max-w-md text-base sm:text-xl roboto-thin tracking-wider mt-4">
            Embark on your loan journey, understanding the right loan type – personal for flexibility or business for
            expansion. Prepare with documentation and a strong application, focusing on credit score improvement.
          </p>
        </div>

        <div className="icon2 bg-white flex flex-col items-center p-4">
          <div className="icon-img w-24 h-24 flex-shrink-0">
            <img src="public/images/invesment 1.png" alt="Investment" className="w-full h-full object-contain" />
          </div>
          <p className="text-center max-w-full sm:max-w-md text-base sm:text-xl roboto-thin tracking-wider mt-4">
            Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations.
            Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams.
          </p>
        </div>

        <div className="icon3 bg-white flex flex-col items-center p-4 ">
          <div className="icon-img w-24 h-24 flex-shrink-0">
            <img src="public/images/agreement 1.png" alt="Agreement" className="w-full h-full object-contain" />
          </div>
          <p className="text-center max-w-full sm:max-w-md text-base sm:text-xl roboto-thin tracking-wider mt-4">
            Businesses often seek loans for expansion, whether opening new locations, boosting production, or diversifying
            products. Loans provide vital capital for growth.
          </p>
        </div>

        <div className="icon4 bg-white flex flex-col items-center p-4">
          <div className="icon-img w-24 h-24 flex-shrink-0">
            <img src="public/images/continuous 1.png" alt="Continuous" className="w-full h-full object-contain" />
          </div>
          <p className="text-center max-w-full sm:max-w-md text-base sm:text-xl roboto-thin tracking-wider mt-4">
            In today's dynamic financial landscape, gain essential insights for managing money, investments, and securing
            your financial future with our expert financial content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
