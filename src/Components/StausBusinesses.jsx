import React from "react";
import SlotCounter from "react-slot-counter";
const StausBusinesses = ({ value, description }) => {
  return (
    <div className="w-44 h-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-300  dark:to-cyan-600 from-black to-slate-400">
        {value}
      </h1>
      <h4 className="text-center text-md ">{description}</h4>
    </div>
  );
};

export default StausBusinesses;
