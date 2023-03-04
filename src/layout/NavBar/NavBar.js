import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaSearch } from "react-icons/fa";
const NavBar = () => {
  return (
    <>
      <div className="bg-main shadow-md top-0 sticky z-20 ">
        <div className="container   mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
         {/* logo */}
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          {/* search form */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-submain w-12 flex-colo h-12 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Movies Name from here"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/* menus */}
          
        </div>
      </div>
    </>
  );
};

export default NavBar;
