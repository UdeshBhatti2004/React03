import React from 'react';



function Business() {
  return (
    <>
      <div className="main w-full">
  
        <div className="part-1 flex flex-col items-center justify-center px-4 py-10">
          <div className="heading">
            <h1 className="roboto-light text-2xl text-center">Business Loan</h1>
          </div>
          <div className="para roboto-light-2 mt-4 w-full sm:w-[400px] md:w-[500px]">
            <p className="text-center">
              Get Unsecured Business Loan For Business Expansion And Working Capital From 5 Lakh To 5 Cr
            </p>
          </div>
        </div>

        <div className="part-2 flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center gap-6 px-4">
   
          <div className="first flex flex-col items-center justify-center  p-6 h-auto w-full sm:w-[350px] md:w-[400px] lg:w-[300px] rounded-lg">
            <h1 className="roboto-light text-2xl text-center">Personal Loan</h1>
            <p className="roboto-light-2 mt-4 text-center text-sm">
              A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.
            </p>
          </div>


          <div className="image  flex justify-center items-center h-72 w-full sm:w-[350px] md:w-[400px] lg:w-[350px] rounded-lg">
            <img
              src="./images/serviceaboutimg.png"
              alt="Service About"
              className="h-80 w-80 object-contain"
            />
          </div>

          <div className="second flex flex-col items-center justify-center p-6 h-auto w-full sm:w-[350px] md:w-[400px] lg:w-[300px] rounded-lg">
            <h1 className="roboto-light text-2xl text-center">Gold Loan</h1>
            <p className="roboto-light-2 mt-4 text-center text-sm">
              One can pay back the loan of gold, but one dies forever in debt to those who are kind.
            </p>
          </div>
        </div>


        <div className="part-3 flex flex-col items-center justify-center py-10">
          <div className="heading">
            <h1 className="roboto-light text-2xl text-center">Home Loan</h1>
          </div>
          <div className="para roboto-light-2 mt-4 w-full sm:w-[400px] md:w-[320px]">
            <p className="text-center">
              Owning a home is the most desirable thing for all. It acts as your fiscal wealth and mental security.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
