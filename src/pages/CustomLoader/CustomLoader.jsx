import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo.png";

const CustomLoader = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row justify-center items-center py-20">
      <img
        src={logoImg}
        alt="Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2"
      />
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#001931]">
        Loading{" ".repeat(dots)}
        {". ".repeat(dots).trim()}
      </p>
    </div>
  );
};

export default CustomLoader;
