import React from "react";
import { Link } from "react-router";
import appErrorIcon from "../../assets/App-Error.png";

const AppNotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-20 px-4 sm:px-6 md:px-8 text-center">
      <div className="mb-6">
        <img
          src={appErrorIcon}
          alt="404 Error"
          className="w-40 sm:w-56 md:w-72 lg:w-96 mx-auto"
        />
      </div>
      <h1 className="inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#001931] mb-2">
        OOPS!! APP NOT FOUND
      </h1>
      <p className="inter font-normal text-sm sm:text-base md:text-lg lg:text-xl text-[#627382] mb-6 max-w-xl">
        The app you are requesting is not found on our system. Please try
        another app.
      </p>
      <Link
        to="/"
        className="btn inter font-semibold text-sm sm:text-[16px] px-5 sm:px-8 py-2 sm:py-3 text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md hover:opacity-90 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default AppNotFoundPage;
