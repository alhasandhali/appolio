import React from "react";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import githubIcon from "../../assets/github-icon.png";

const Navbar = () => {
  const location = useLocation();

  const liBase =
    "relative font-bold text-lg transition-all duration-500 rounded-none bg-clip-text text-transparent [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]";

  const liDefault = "bg-gradient-to-r from-black to-black";

  const liHover =
    "hover:bg-gradient-to-r hover:from-[#9F62F2] hover:to-[#632EE3] hover:after:scale-x-100";

  const liUnderline =
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-[#9F62F2] after:to-[#632EE3] after:transition-transform after:duration-500";

  const liActive =
    "!bg-gradient-to-r !from-[#9F62F2] !to-[#632EE3] after:scale-x-100";

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
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/all-apps">Apps</Link>
              </li>
              <li className="">
                <Link to="/installed-app-list">Installation</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img className="h-10" src={logo} alt="logo" />
            <span className="ml-1 inter font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Appolio
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal inter font-medium text-[16px]">
            <li>
              <Link
                to="/"
                className={`${liBase} ${liDefault} ${liUnderline} ${liHover} ${
                  location.pathname === "/" ? liActive : ""
                } mr-3`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-apps"
                className={`${liBase} ${liDefault} ${liUnderline} ${liHover} ${
                  location.pathname === "/all-apps" ? liActive : ""
                } mr-3`}
              >
                Apps
              </Link>
            </li>
            <li>
              <Link
                to="/installed-app-list"
                className={`${liBase} ${liDefault} ${liUnderline} ${liHover} ${
                  location.pathname === "/installed-app-list" ? liActive : ""
                }`}
              >
                Installation
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/alhasandhali"
            target="_blank"
            className="btn inter font-semibold text-[16px] text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <img src={githubIcon} alt="github" />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
