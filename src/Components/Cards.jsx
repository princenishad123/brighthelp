import React from "react";
const Cards = ({ icons, iconsColor, title, descriptions }) => {
  return (
    <div>
      <div className="max-w-64 border dark:border-cyan-700 hover:scale-105 transition-all cursor-pointer h-64 p-6 bg-white dark:bg-transparent backdrop-blur-md shadow-lg rounded-lg">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16  bg-purple-100 dark:bg-transparent  rounded-full">
          {icons}
        </div>

        {/* Title */}
        <h2 className="mt-4 text-xl font-semibold ">{title}</h2>

        {/* Divider */}
        <div
          className={`w-12 h-1 blur-sm dark:text-slate-800 my-2 ${iconsColor} rounded`}
        ></div>

        {/* Description */}
        <p className="mt-2 ">{descriptions}</p>
      </div>
    </div>
  );
};

export default Cards;
