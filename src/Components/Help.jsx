import React from 'react';

function Help() {
  return (
    <>
      <div className="main  h-auto w-full py-10">
       
        <div className="headings">
  <div className="main-heading">
    <h1 className="text-[rgb(0,173,239)] text-3xl sm:text-4xl md:text-4xl lg:text-5xl roboto-light pl-10 lg:pl-36 py-10">
      We are here to help you
    </h1>
  </div>
  <div className="sub-heading">
    <h1 className="roboto-thin text-md sm:text-lg md:text-lg lg:text-xl pl-10 lg:pl-36">
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
    </h1>
    <h1 className="roboto-thin text-md sm:text-lg md:text-lg lg:text-xl pl-10 lg:pl-36">
      Injected humour and the like.
    </h1>
  </div>
</div>

        <div className="cards mt-16 flex flex-col lg:flex-row xl:flex-row items-center justify-center gap-10 px-10 lg:px-36">
        
          <div className="card bg-white shadow-lg rounded-md p-6 flex-1 min-w-[300px]  md:w-[600px] lg:w-[500px] h-72 text-center flex flex-col items-center">
            <div className="image h-16 w-16 object-contain mt-10">
              <img src="./images/office-building 1(2).jpg" alt="Branch Office" />
            </div>
            <div className="heading">
              <h1 className="roboto-light text-2xl mt-5 text-ellipsis overflow-hidden whitespace-nowrap">
                BRANCH OFFICE
              </h1>
            </div>
            <div className="para">
              <p className="roboto-medium mt-5 max-w-[400px] mx-auto overflow-hidden text-ellipsis whitespace-nowrap">
                312, super diamond market, surat
              </p>
            </div>
          </div>

          <div className="card bg-white shadow-lg rounded-md p-6 flex-1 min-w-[300px]  md:w-[600px] lg:w-[500px] h-72 text-center flex flex-col items-center">
            <div className="image h-16 w-16 object-contain mt-10">
              <img src="./images/old-typical-phone 1.jpg" alt="Phone" />
            </div>
            <div className="heading">
              <h1 className="roboto-light text-2xl mt-5">CALL US AT</h1>
            </div>
            <div className="para">
              <p className="roboto-medium mt-5">+91 22 6212 5000</p>
            </div>
          </div>


          <div className="card bg-white shadow-lg rounded-md p-6 flex-1 min-w-[300px] md:w-[600px] lg:w-[500px] h-72 text-center flex flex-col items-center">
            <div className="image h-16 w-16 object-contain mt-10">
              <img src="./images/email 2.jpg" alt="Email" />
            </div>
            <div className="heading">
              <h1 className="roboto-light text-2xl mt-5">EMAIL ADDRESS</h1>
            </div>
            <div className="para">
              <p className="roboto-medium mt-5">Manbafinaserve@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
