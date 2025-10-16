import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl text-center mb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="card w-full sm:w-80 text-white text-center">
            <div className="card-body">
              <p className="inter font-normal text-lg sm:text-xl">
                Total Downloads
              </p>
              <h2 className="inter font-bold text-5xl sm:text-6xl md:text-7xl my-3">
                29.6M
              </h2>
              <p className="inter font-normal text-base sm:text-lg">
                21% more than last month
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-80 text-white text-center">
            <div className="card-body">
              <p className="inter font-normal text-lg sm:text-xl">
                Total Reviews
              </p>
              <h2 className="inter font-bold text-5xl sm:text-6xl md:text-7xl my-3">
                906k
              </h2>
              <p className="inter font-normal text-base sm:text-lg">
                46% more than last month
              </p>
            </div>
          </div>
          <div className="card w-full sm:w-80 text-white text-center">
            <div className="card-body">
              <p className="inter font-normal text-lg sm:text-xl">
                Active Apps
              </p>
              <h2 className="inter font-bold text-5xl sm:text-6xl md:text-7xl my-3">
                132+
              </h2>
              <p className="inter font-normal text-base sm:text-lg">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
