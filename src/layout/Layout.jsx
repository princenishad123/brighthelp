import React, { useRef, useState, useEffect, useContext } from "react";
import "./layout.css";
import Navbar from "./Navbar";
import MyContext from "../context/contextConfig";

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className="w-full dark:bg-black dark:text-white h-screen overflow-hidden relative">
        <div>
          <div className="w-0 h-0 customShadow rounded-full bg-red-100 fixed top-0 right-72 max-lg:right-44 max-md:right-28 max-sm:right-5 shadow-2xl "></div>
        </div>

        <div className="fixed top-0 left-0 w-full h-screen overflow-x-hidden z-20 overflow-y-scroll scroll-smooth">
          <Navbar />

          <main className="w-full max-h-[85vh] relative">
            {children}
            {/* 
            <button className="bg-slate-900 h-10 w-10 rounded-full content-center fixed right-4 bottom-4 text-white font-bold text-2xl">
              ^
            </button> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
