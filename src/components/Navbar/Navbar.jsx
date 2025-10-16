import React from "react";

const Navbar = () => {
  const liHoverEffect =
    "font-bold text-lg bg-gradient-to-r from-black to-black bg-clip-text text-transparent transition-all duration-500 hover:from-[#9F62F2] hover:to-[#632EE3] border";
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-10/12 m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className={liHoverEffect}>
                <a>Home</a>
              </li>
              <li className={liHoverEffect}>
                <a>App</a>
              </li>
              <li className={liHoverEffect}>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="h-10" src="/src/assets/logo.png" alt="logo" />
            <span className="inter font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Appolio
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 inter font-medium text-[16px]">
            <li className={liHoverEffect}>
              <a>Home</a>
            </li>
            <li className={liHoverEffect}>
              <a>App</a>
            </li>
            <li className={liHoverEffect}>
              <a>Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn inter font-semibold text-[16px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <img src="/src/assets/github-icon.png" alt="" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
