import React from "react";
import SlotCounter from "react-slot-counter";
const StausBusinesses = ({ value, description }) => {
  return (
    <div className="w-44 h-auto flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center">
        <SlotCounter
          value={value}
          animateOnVisible={{
            triggerOnce: false,
            rootMargin: "0px 0px -10px 0px",
          }}
        />
      </h1>
      <h4 className="text-center text-md ">{description}</h4>
    </div>
  );
};

export default StausBusinesses;
