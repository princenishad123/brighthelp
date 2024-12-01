import React from "react";

const HelpBusines = () => {
  return (
    <section className=" py-12 px-6 md:px-16 ">
      <div className="flex items-center max-xl:flex-col">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold ">
              We Are Here To Help You Build Your Business
            </h2>
            <p className=" mt-4">
              Find out all you need to know about our creativity processes. It's
              a long-established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">100+</p>
              <p className="">Total Audience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">150+</p>
              <p className="">Complete Projects</p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 text-center md:text-left">
            <button className="bg-purple-600 px-6 py-2 text-white rounded-md hover:bg-purple-700 transition">
              Explore More
            </button>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {/* Digital Marketing */}
          <div className="border dark:border-slate-500 cursor-pointer hover:scale-105 transition-all shadow-md rounded-md p-6 text-center">
            <div className="text-purple-600 text-4xl mb-4">🎯</div>
            <h3 className="font-bold text-lg ">Digital Marketing</h3>
            <p className=" mt-2">
              Find out all you need to know about our processes.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="border dark:border-slate-500 cursor-pointer hover:scale-105 transition-all shadow-md rounded-md p-6 text-center">
            <div className="text-orange-500 text-4xl mb-4">🎨</div>
            <h3 className="font-bold text-lg ">UI/UX Design</h3>
            <p className=" mt-2">
              Find out all you need to know about our processes.
            </p>
          </div>

          {/* Branding Design */}
          <div className="border dark:border-slate-500 cursor-pointer hover:scale-105 transition-all shadow-md rounded-md p-6 text-center">
            <div className="text-blue-500 text-4xl mb-4">💡</div>
            <h3 className="font-bold text-lg ">Branding Design</h3>
            <p className=" mt-2">
              Find out all you need to know about our processes.
            </p>
          </div>

          {/* Web Development */}
          <div className="border dark:border-slate-500 cursor-pointer hover:scale-105 transition-all shadow-md rounded-md p-6 text-center">
            <div className="text-pink-500 text-4xl mb-4">💻</div>
            <h3 className="font-bold text-lg ">Web Development</h3>
            <p className=" mt-2">
              Find out all you need to know about our processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpBusines;
