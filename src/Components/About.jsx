import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-gradient-to-b 0 px-4 md:px-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-300 dark:to-cyan-600 from-black to-slate-400">
          About the Brighthelp
        </h2>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Section - Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="  rounded-lg flex items-center justify-center">
              <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">₿</span>
              </div>
              <div className="absolute top-12 left-4 w-16 h-16  rounded-lg flex items-center justify-center">
                <span className="text-xl">🛡️</span>
              </div>
              <div className="absolute bottom-10 right-10 w-12 h-12  rounded-full flex items-center justify-center">
                <span className="text-xl">🧪</span>
              </div>
              <div className="w-full h-auto rounded-lg flex items-center justify-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/gift-box-3d-icon-download-in-png-blend-fbx-gltf-file-formats--birthday-present-creativepreneur-pack-miscellaneous-icons-5655910.png?f=webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Right Section - Text */}
          <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
            <h3 className="text-6xl max-md:text-4xl max-sm:text-2xl font-extrabold max-sm:font-semibold text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-300 dark:to-cyan-600 from-slate-600 to-black">
              Create your own <span className="">STARTUP</span>
            </h3>
            <p className="mt-4 text-lg">
              We are 100% committed to taking your startup from zero to step
              hundred.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center md:justify-start gap-6">
              <div>
                <p className="text-4xl font-bold">1.5+</p>
                <p className="text-sm">Experience More Than 1 Year+</p>
              </div>
              <div>
                <p className="text-4xl font-bold">2.5x</p>
                <p className="text-sm">
                  Faster, more effective, and better performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b  py-10 px-4 md:px-20 mt-4">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Section - Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-purple-400 text-sm uppercase font-semibold mb-2">
              Sync and Track
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-300 dark:to-cyan-600 from-orange-600 to-orange-400">
              Grow Your Startup <br /> To The Next Level
            </h2>
            <p className="mt-4 text-lg">
              We help all startups in execution, legally as well as research and
              development.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-700 flex items-center justify-center rounded-full">
                  <span className="text-2xl">✂️</span>
                </div>
                <p className="text-sm">
                  And we do all this with 100% accuracy.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-700 flex items-center justify-center rounded-full">
                  <span className="text-2xl">⏱️</span>
                </div>
                <p className="text-sm">And we do all this within 1 month.</p>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0 my-4">
            <div className="relative  rounded-full flex items-center justify-center">
              <div className="absolute -top-4 right-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">NFT</span>
              </div>
              <div className="absolute top-12 left-4 w-8 h-8  rounded-full flex items-center justify-center">
                <span className="text-sm">₿</span>
              </div>
              <div className="absolute bottom-10 right-10  rounded-full"></div>
              <div className="w-72 max-sm:w-[70%] rounded-full flex items-center justify-center">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/star-struck-emoji-3d-icon-download-in-png-blend-fbx-gltf-file-formats--smile-emoticon-face-happiness-cute-pack-sign-symbols-icons-10019562.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
