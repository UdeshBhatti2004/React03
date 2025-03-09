import React from 'react';

function Welcome() {
  return (
    <>
      <div className="main h-auto px-4 lg:px-24">
    
        <div className="welcome-msg mt-10 lg:mt-20">
          <h1
            className="roboto-light text-xl sm:text-2xl lg:text-3xl text-[rgb(13,110,253)] tracking-wide border-b-4 border-[rgb(13,110,253)] inline-block leading-none"
          >
            WELCOME MESSAGE
          </h1>

         
          <div className="heading flex justify-center">
            <h1 className="roboto-light text-3xl sm:text-4xl lg:text-5xl text-[rgb(0,173,239)] border-b-4 border-[rgb(0,173,239)] inline-block leading-none mt-5 text-center">
              Who We Are
            </h1>
          </div>

          <div className="paragraph capitalize py-14 sm:mt-14 lg:mt-20 space-y-6 lg:space-y-8">
            <p className="roboto-light-2 text-sm sm:text-base lg:text-lg leading-relaxed lg:w-[95%]">
              Specialized financial institution that supplies credit for the purchase of consumer goods and services by purchasing the time-sales contracts of merchants or by granting small loans directly to consumers. Specialized consumer finance agencies now operate throughout western Europe, Canada, the United States, Australia, Japan, and some Latin American countries. Although they existed in the early 1900s, their greatest development came after World War II.
            </p>

            <p className="roboto-light-2 text-sm sm:text-base lg:text-lg leading-relaxed lg:w-[96%]">
              Large-sales finance companies, which operate by purchasing unpaid customer accounts at a discount from merchants and collecting payments due from consumers, were a response to the need for installment financing for the purchase of automobiles in the early 1900s. Ally Financial, for example, was established as the General Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile accounts receivable from car dealers who were themselves unable to finance time purchases. Many companies in both Europe and the United States continue to specialize in financing purchases of particular commodities and remain closely associated with specific manufacturers. Some also extend credit for wholesale purchases by retail dealers.
            </p>

            <p className="roboto-light-2 text-sm sm:text-base lg:text-lg leading-relaxed lg:w-[98%] ">
              Consumer finance or small-loan companies also arose in the 1900s. Until then the need for consumer loans had been met primarily by illegal “loan shark” activities because it was unprofitable for banks to make small loans at rates below legally set usury levels. In 1911 several states in the United States began adopting small-loan laws that authorized loans to consumers at rates above usury levels, making it financially practical to operate a consumer loan business. Today many companies engage both in the sales-finance business and in making loans directly to consumers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;

