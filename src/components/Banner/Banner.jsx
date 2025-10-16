import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="text-center pt-16 md:pt-24">
        <h1 className="inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#001931] leading-tight">
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden md:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="my-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            target="_blank"
            to="https://play.google.com/store/"
            className="btn inter font-semibold text-base md:text-[16px] flex items-center gap-2"
          >
            <img
              src="/src/assets/play-store-icon.png"
              alt="Play Store"
              className="w-5 h-5"
            />
            Google Play
          </Link>

          <Link
            to="https://www.apple.com/app-store/"
            target="_blank"
            className="btn inter font-semibold text-base md:text-[16px] flex items-center gap-2"
          >
            <img
              src="/src/assets/app-store-icon.png"
              alt="App Store"
              className="w-5 h-5"
            />
            App Store
          </Link>
        </div>
        <div className="mt-10">
          <img
            className="m-auto w-full max-w-[700px] px-4"
            src="/src/assets/hero.png"
            alt="Hero illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
