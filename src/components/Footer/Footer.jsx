import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import googlePlay from "../../assets/play-store-icon.png";
import appStore from "../../assets/app-store-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-base-200 to-base-300 text-base-content border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center mb-3">
            <img className="h-16" src={logo} alt="logo" />
            <span className="ml-1 inter font-bold text-5xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Appolio
            </span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed text-justify">
            Discover, download, and enjoy thousands of apps built for
            productivity, gaming, and creativity — all in one place.
          </p>
          <div className="flex gap-5 mt-5">
            <a href="#">
              <Facebook size={25} className="hover:text-primary transition" />
            </a>
            <a href="#">
              <Twitter size={25} className="hover:text-primary transition" />
            </a>
            <a href="#">
              <Instagram size={25} className="hover:text-primary transition" />
            </a>
            <a href="#">
              <Linkedin size={25} className="hover:text-primary transition" />
            </a>
          </div>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Explore
          </h6>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="link link-hover hover:text-primary transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="all-apps"
                className="link link-hover hover:text-primary transition"
              >
                All Apps
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="link link-hover hover:text-primary transition"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                to="https://developer.android.com/"
                className="link link-hover hover:text-primary transition"
              >
                Developers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Company
          </h6>
          <ul className="space-y-2">
            <li>
              <a className="link link-hover hover:text-primary transition">
                About
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Careers
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover hover:text-primary transition">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="footer-title text-lg mb-4 font-semibold tracking-wide">
            Stay Updated
          </h6>
          <form className="flex flex-col space-y-3">
            <label className="text-sm text-base-content/70">
              Join our newsletter
            </label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered join-item w-full"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </form>
          <div className="flex gap-3 mt-6">
            <Link to="https://play.google.com/store/" target="_blank">
              <img
                src={googlePlay}
                alt="google-play"
                className="h-10 hover:opacity-80 transition"
              />
            </Link>
            <Link target="_blank" to="https://www.apple.com/app-store/">
              <img
                src={appStore}
                alt="app-store"
                className="h-10 hover:opacity-80 transition"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-base-300 py-6 text-center text-sm text-base-content/70">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">AppVerse</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
