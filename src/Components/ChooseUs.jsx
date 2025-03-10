import React from "react";

function ChooseUs() {
  return (
    <div className="main mt-12">
      <div className="background-image bg-[url('/images/HomeAbout.png')] bg-cover bg-center w-full h-auto">
        <div className="heading flex justify-center">
          <h1 className="text-white roboto-light text-4xl sm:text-5xl mt-8 text-center">
            Why Choose Us
          </h1>
        </div>

        <div className="parts grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-8 items-center mt-4 px-4 lg:px-16">
          <div className="image w-full">
            <img
              className="object-cover h-auto sm:h-[50vh] lg:h-[120vh] w-full"
              src="/images/HomeAboutimg.png"
              alt="Why Choose Us"
            />
          </div>

          <div className="content w-full text-white roboto-thin space-y-8">
            <div className="intro">
              <p>
                At Manba Finanserve, we are more than a loan services provider—
                we are your gateway to financial confidence. When you choose us,
                you're choosing a dedicated team of professionals who are
                passionate about helping you achieve your financial goals. Your
                success is our success, and we're excited to embark on this
                journey with you. We invite you to experience the Manba
                Finanserve difference—where your financial well-being is our top
                priority.
              </p>
            </div>

            <div className="feature flex items-center gap-4">
              <img
                className="h-20 w-20 object-contain"
                src="/images/aboutimg1.png"
                alt="Trusted Expertise"
              />
              <div>
                <h2 className="text-xl roboto-light">Trusted Expertise</h2>
                <p className="text-sm">
                  With decades of experience in the financial industry, we have
                  earned the trust of countless individuals and businesses.
                </p>
              </div>
            </div>

            <div className="feature flex items-center gap-4">
              <img
                className="h-20 w-20 object-contain"
                src="/images/aboutimg2.png"
                alt="Comprehensive Loan Options"
              />
              <div>
                <h2 className="text-xl roboto-light">Comprehensive Loan Options</h2>
                <p className="text-sm">
                  We offer a diverse range of loan products to meet every need,
                  including personal, gold, home, and other loans designed just
                  for you.
                </p>
              </div>
            </div>

            <div className="feature flex items-center gap-4">
              <img
                className="h-20 w-20 object-contain"
                src="/images/aboutimg3.png"
                alt="Competitive Rates"
              />
              <div>
                <h2 className="text-xl roboto-light">Competitive Rates</h2>
                <p className="text-sm">
                  We offer some of the most competitive interest rates in the
                  market, making borrowing with us cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

