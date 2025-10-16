import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router";
import erroPageImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 m-auto py-10 sm:py-20 text-center">
        <div className="flex justify-center">
          <img
            src={erroPageImg}
            alt="404 Error"
            className="w-48 sm:w-64 md:w-80 lg:w-96 mx-auto"
          />
        </div>

        <h1 className="inter font-semibold text-3xl sm:text-4xl md:text-5xl text-[#001931] mt-4">
          Oops, page not found!
        </h1>

        <p className="inter font-normal text-base sm:text-lg md:text-xl text-[#627382] mb-4 mt-2">
          The page you are looking for is not available.
        </p>

        <Link
          to="/"
          className="btn inter font-semibold text-sm sm:text-[16px] px-6 py-3 sm:px-8 sm:py-3 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md hover:opacity-90 transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
