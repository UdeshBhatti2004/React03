import React from 'react';

function ContactForm() {
  return (
    <>
      <div className="main h-auto  p-6 lg:p-14 w-full flex items-center justify-center">
        <div className="contact-div bg-white p-6 lg:p-10 shadow-lg rounded-md w-full max-w-6xl">
          
          <h1 className="text-3xl lg:text-5xl roboto-light text-[rgb(0,181,243)] mb-4 mt-6 lg:mt-10">
            Get in Touch
          </h1>


          <p className="text-black roboto-thin text-base lg:text-lg mb-6">
            Please contact us or send us an email.
          </p>

         
          <form className="space-y-6">
            
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-[rgb(52,152,219)] p-2 w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border-b border-[rgb(52,152,219)] p-2 w-full focus:outline-none"
              />
            </div>

            
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="border-b border-[rgb(52,152,219)] p-2 w-full focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your City"
                className="border-b border-[rgb(52,152,219)] p-2 w-full focus:outline-none"
              />
            </div>

            
            <div>
              <label htmlFor="loan" className="block text-gray-700 mb-2">
                Select Your Loan Option
              </label>
              <select
                id="loan"
                className="border-b border-[rgb(52,152,219)] p-2 w-full focus:outline-none"
              >
                <option value="home">Home Loan</option>
                <option value="personal">Personal Loan</option>
                <option value="gold">Gold Loan</option>
                <option value="business">Business Loan</option>
              </select>
            </div>

            
            <div>
              <textarea
                placeholder="Your Message"
                className="border-b border-[rgb(52,152,219)] p-2 w-full h-32 focus:outline-none"
              />
            </div>

            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
