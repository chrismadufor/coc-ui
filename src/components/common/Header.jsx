import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

function Header() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const [showTract, setShowTract] = useState(true);
  return (
    <div className="fixed t-0 w-full z-10">
      <header className="flex justify-between items-center bg-black text-white h-16 px-side">
        <Link to="/" className="flex items-center logo">
          <img className="w-52" src={logo} alt="" />
        </Link>
        <ul className="links hidden xl:flex justify-between items-center font-semibold plus-jarkata text-sm tracking-wider">
          <li className="uppercase ml-8">Stories</li>
          <li className="uppercase ml-8">About COC</li>
          <Link to="contact">
            <li className="uppercase ml-8">Reach Us</li>
          </Link>
          <li className="uppercase ml-8">Visit Us</li>
          <li className="uppercase ml-8">Events & Programs</li>
        </ul>
        <i
          onClick={() => setOpenNav(!openNav)}
          className={`fas xl:hidden ${openNav ? "fa-times" : "fa-bars"}`}
        ></i>
      </header>
      {openNav && (
        <div className="mobile-nav">
          <ul className="bg-black text-white">
            <li className="uppercase px-side py-3 border-t border-gray-100">
              Stories
            </li>
            <li className="uppercase px-side py-3 border-t border-gray-100">
              About COC
            </li>
            <Link to="contact">
              <li className="uppercase px-side py-3 border-t border-gray-100">
                Reach Us
              </li>
            </Link>
            <li className="uppercase px-side py-3 border-t border-gray-100">
              Visit Us
            </li>
            <li className="uppercase px-side py-3 border-t border-gray-100">
              Events & Programs
            </li>
          </ul>
        </div>
      )}
      {showTract && (
        <div className="tracts bg-pry px-side text-white text-center text-xs py-2 flex items-center justify-left md:justify-center relative">
          <p className="capitalize font-semibold">
            <span className="mr-1 md:mr-3">⚡⚡</span> Download Our tract For
            The Month
            <a href="#">
              <span className="download ml-5 underline">Download</span>
            </a>
          </p>
          <i
            onClick={() => setShowTract(false)}
            className="fas fa-times absolute px-right text-base cursor-pointer"
          ></i>
        </div>
      )}
    </div>
  );
}

export default Header;
