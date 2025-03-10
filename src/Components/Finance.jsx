import React from 'react'

function Finance() {
  return (
    <>
      <div className="main h-auto w-full">
        
        <div className="image flex justify-center"> 
          <img
            src="/images/homeServiceimg.jpg"
            className="h-[40vh] sm:h-[60vh] lg:h-[100vh] w-full object-cover mt-5" 
            alt="Home Service"
          />
        </div>

        <div className="elements grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-8 lg:px-[80px] mt-12 sm:mt-16 lg:mt-24">
          
          <div className="element-1 flex flex-col items-center text-center">
            <div className="image">
              <img
                src="/images/finance 1.png"
                className="h-auto w-[120px] object-contain"
                alt="Finance Icon"
              />
            </div>
            <h1 className="text-[rgb(161,158,153)] text-4xl roboto-thin mt-5">2179</h1>
            <h1 className="text-black mt-5 roboto-extra-light text-xl w-[200px]">Successful Loan Approval</h1>
          </div>

          <div className="element-2 flex flex-col items-center text-center">
            <div className="image">
              <img
                src="/images/team 1.png"
                className="h-[120px] w-[120px] object-contain"
                alt="Finance Icon"
              />
            </div>
            <h1 className="text-[rgb(161,158,153)] text-4xl roboto-thin mt-5">99%</h1>
            <h1 className="text-black mt-5 roboto-extra-light text-xl w-[150px]">Customer Satisfection</h1>
          </div>

          <div className="element-3 flex flex-col items-center text-center">
            <div className="image">
              <img
                src="/images/verified 1.png"
                className="h-[120px] w-[120px] object-contain"
                alt="Finance Icon"
              />
            </div>
            <h1 className="text-[rgb(161,158,153)] text-4xl roboto-thin mt-5">70+</h1>
            <h1 className="text-black mt-5 roboto-extra-light text-xl w-[200px]">Bank / NBFC's</h1>
          </div>

          <div className="element-4 flex flex-col items-center text-center">
            <div className="image">
              <img
                src="/images/medal 1.png"
                className="h-[120px] w-[120px] object-contain"
                alt="Finance Icon"
              />
            </div>
            <h1 className="text-[rgb(161,158,153)] text-4xl roboto-thin mt-5">5+</h1>
            <h1 className="text-black mt-5 roboto-extra-light text-xl w-[200px]">Award Winner</h1>
          </div>
        </div> 
      </div>
    </>
  )
}

export default Finance
