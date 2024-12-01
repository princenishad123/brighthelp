import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import MyContext from "../context/contextConfig";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Navbar = () => {
  const { theme, setTheme } = useContext(MyContext);
  const [toggle, setToggle] = useState(true);
  console.log(localStorage.getItem("theme"));
  const handleTheme = () => {
    if (theme) {
      setTheme(false);
      localStorage.setItem("theme", false);
    } else {
      setTheme(true);

      localStorage.setItem("theme", true);
    }
  };
  return (
    <nav className="customScrollBar w-full h-14 flex items-center justify-between px-4 xl:px-16 sticky top-0  z-40 backdrop-blur-md">
      <div>
        <h1 className="text-xl font-bold">BRIGHTHELP</h1>
      </div>
      <div
        onClick={() => (toggle ? null : setToggle(true))}
        className={`max-lg:w-full max-lg:h-screen max-lg:fixed max-lg:top-14  ${
          toggle ? "-left-[100%]" : "left-0"
        } max-lg:backdrop-blur-md transition-all`}
      >
        <ul className="bg-slate-100 max-lg:dark:bg-slate-900 da max-lg:w-72 max-md:w-52 max-lg:h-screen max-lg:py-4 max-lg:px-2 ">
          <li className="inline-block max-lg:block max-xl:my-4 mx-3 font-semibold">
            <NavLink
              className={
                "py-1 px-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all text-xl"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="inline-block max-lg:block max-xl:my-4 mx-3 font-semibold">
            <NavLink
              className={
                "py-1 px-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all text-xl"
              }
            >
              Services
            </NavLink>
          </li>
          <li className="inline-block max-lg:block max-xl:my-4 mx-3 font-semibold">
            <NavLink
              className={
                "py-1 px-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all text-xl"
              }
            >
              Roadmap
            </NavLink>
          </li>
          <li className="inline-block max-lg:block max-xl:my-4 mx-3 font-semibold">
            <NavLink
              className={
                "py-1 px-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all text-xl"
              }
            >
              Why us
            </NavLink>
          </li>
          <li className="inline-block max-lg:block max-xl:my-4 mx-3 font-semibold">
            <NavLink
              className={
                "py-1 px-2 hover:text-gray-600 dark:hover:text-gray-300 transition-all text-xl"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleTheme}
          className="p-2 dark:bg-transparent rounded-full dark:border dark:hover:bg-indigo-600 dark:hover:border-indigo-600 transition-all text-white bg-black font-semibold  "
        >
          {theme ? <CiDark /> : <CiLight />}
        </button>

        <button
          onClick={() => setToggle(!toggle)}
          className="text-xl lg:hidden p-2 mx-2 w-8 h-8 grid place-content-center"
        >
          {toggle ? <FaBars /> : <HiMiniXMark size={30} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
