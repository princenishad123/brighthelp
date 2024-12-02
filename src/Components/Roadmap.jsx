import React from "react";

const Roadmap = () => {
  return (
    <div class=" flex items-center justify-center flex-wrap md:gap-0 p-6">
      <div class="relative scale-75  ">
        <div class="absolute top-3 left-3 w-full  h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl rotate-[75deg] max-sm:rotate-[12deg]"></div>

        <div class="relative min-h-72 border bg-white p-6 rounded-2xl shadow-lg w-72 max-sm:w-64 ">
          <h2 class="text-center text-gray-700 text-lg font-bold">STEP</h2>
          <h1 class="text-center text-orange-500 text-4xl font-extrabold mt-1">
            01
          </h1>
          <p class="text-center text-black text-xl mt-1 font-semibold">
            Plan and Design
          </p>
          <h3 class="text-center text-gray-800 text-lg font-semibold mt-4">
            PHASE A
          </h3>
          <p class="text-center text-black text-md mt-2">
            Define Goals: Determine the website's 15purpose (e.g., personal
            portfolio, business site, blog).
          </p>
        </div>
      </div>

      {/* box 2 */}
      <div class="relativ scale-75">
        <div class="absolute top-3 left-3 w-full  h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl rotate-[75deg] max-sm:rotate-[12deg]"></div>

        <div class="relative min-h-72 border bg-white p-6 rounded-2xl shadow-lg w-72 max-sm:w-64 ">
          <h2 class="text-center text-gray-700 text-lg font-bold">STEP</h2>
          <h1 class="text-center text-indigo-500 text-4xl font-extrabold mt-1">
            02
          </h1>
          <p class="text-center text-black text-xl mt-1 font-semibold">
            Set Up the Framework
          </p>
          <h3 class="text-center text-gray-800 text-lg font-semibold mt-4">
            PHASE B
          </h3>
          <p class="text-center text-black text-md mt-2">
            Choose a Platform: Decide between cust15om coding (HTML, CSS,
            JavaScript,MERN) .
          </p>
        </div>
      </div>

      {/* box 3 */}
      <div class="relativ scale-75">
        <div class="absolute top-3 left-3 w-full  h-full bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-2xl rotate-[75deg] max-sm:rotate-[12deg]"></div>

        <div class="relative min-h-72 border bg-white p-6 rounded-2xl shadow-lg w-72 max-sm:w-64 ">
          <h2 class="text-center text-gray-700 text-lg font-bold">STEP</h2>
          <h1 class="text-center text-cyan-500 text-4xl font-extrabold mt-1">
            03
          </h1>
          <p class="text-center text-black text-2xl mt-1 font-semibold">
            Develop the Website
          </p>
          <h3 class="text-center text-gray-800 text-lg font-semibold mt-4">
            PHASE C
          </h3>
          <p class="text-center text-black text-md mt-2">
            Test Responsiveness Use responsive des15ign techniques to ensure the
            site works on all devices.
          </p>
        </div>
      </div>

      {/* box 4 */}

      <div class="relativ scale-75">
        <div class="absolute top-3 left-3 w-full  h-full bg-gradient-to-r from-red-500 to-red-800 rounded-2xl rotate-[75deg] max-sm:rotate-[12deg]"></div>

        <div class="relative min-h-72 border bg-white p-6 rounded-2xl shadow-lg w-72 max-sm:w-64 ">
          <h2 class="text-center text-gray-700 text-lg font-bold">STEP</h2>
          <h1 class="text-center text-red-500 text-4xl font-extrabold mt-1">
            05
          </h1>
          <p class="text-center text-black text-2xl mt-1 font-semibold">
            Test and Launch
          </p>
          <h3 class="text-center text-gray-800 text-lg font-semibold mt-4">
            PHASE D
          </h3>
          <p class="text-center text-black text-md mt-2">
            Go Live: Deploy the websit15e to the hosting server and monitor its
            performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
