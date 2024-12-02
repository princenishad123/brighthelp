import React, { useContext } from "react";
import MyContext from "../context/contextConfig";
import Cards from "../Components/Cards";
import { FaHeadset } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { LiaIndustrySolid } from "react-icons/lia";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import StausBusinesses from "../Components/StausBusinesses";
import HelpBusines from "../Components/HelpBusines";
import Teams from "../Components/Teams";
import About from "../Components/About";
import AccordianComponent from "../Components/AccordianComponent";
import Roadmap from "../Components/Roadmap";

const Home = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div>
      {/* Hero sections */}
      <section
        id="hero"
        className="w-full min-h-[85vh] flex justify-center items-center max-md:flex-col px-16 max-sm:px-3 max-sm:pt-12"
      >
        <div className="w-1/2 max-md:w-full">
          <h1 className="text-7xl font-bold content-center my-4 max-xl:text-5xl max-md:text-center">
            Fast Way to grow your Bussiness <br className="max-md:hidden" />{" "}
            with us
          </h1>
          <p className="max-md:text-center md:text-xl">
            We are a creative web agency dedicated to crafting stunning,
            user-friendly, and results-driven websites. Whether you're a small
            business, a startup, or an established brand, we specialize in
            bringing your vision to life with custom solutions tailored to your
            needs.
          </p>
          <div className="max-md:w-full h-auto max-md:flex justify-center">
            <button className="bg-indigo-600 px-4 py-2 my-4 rounded-full text-white">
              Connect on WhatsApp
            </button>
          </div>
        </div>
        <div className="w-1/2 content-center max-md:w-full">
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/business-growth-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--revenue-profit-finance-activities-pack-people-illustrations-3738726.png?f=webp"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us">
        <h1 className="pt-16 pb-8 text-4xl font-bold text-center">Why us ?</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <Cards
            title={"Affortable Price"}
            descriptions={
              "We provide websites to all startups at very affordable prices."
            }
            icons={
              <GiTakeMyMoney className="text-purple-500 dark:text-yellow-300 text-5xl" />
            }
            iconsColor={"bg-yellow-300"}
          />
          <Cards
            title={"Personal Connection"}
            descriptions={
              "We Build a Personal Connection with All Startup Owners"
            }
            icons={
              <MdOutlineConnectWithoutContact className="text-purple-500 dark:text-purple-300 text-5xl" />
            }
            iconsColor={"bg-purple-300"}
          />
          <Cards
            title={"Industry Standard"}
            descriptions={"We ensure our work meets industry standards."}
            icons={
              <LiaIndustrySolid className="text-black  dark:text-white text-5xl" />
            }
            iconsColor={"dark:bg-slate-50 bg-black"}
          />

          <Cards
            title={"100% Trusted"}
            descriptions={
              "We give 100% trust to our clients and their startups."
            }
            icons={
              <VscWorkspaceTrusted className="text-purple-500 dark:text-cyan-300 text-4xl" />
            }
            iconsColor={"bg-cyan-300"}
          />
        </div>
      </section>

      <section className="my-16">
        <div className="flex items-center justify-center flex-wrap gap-x-16 gap-y-16">
          <StausBusinesses value={"100+"} description={"Happy Client"} />
          <StausBusinesses value={"150+"} description={"Website Build"} />
          <StausBusinesses
            value={"2.50x"}
            description={"Your Startup Growth"}
          />
        </div>
      </section>

      {/* help your own business */}
      <section id="services">
        <h1 className="pt-12  text-4xl font-bold text-center">Our Services</h1>

        <HelpBusines />
      </section>

      {/* road map section */}
      <section id="roadmap" className="w-full px-4 sm:px-16 mx-auto pt-14">
        <h1 className="pb-16 pt-8 text-4xl font-bold text-center">
          Our Roadmap
        </h1>

        <Roadmap />
      </section>

      {/* team  */}
      <section>
        <Teams />
      </section>

      {/* about our bright help */}
      <section id="about" className="pt-16">
        <About />
      </section>

      {/* Accordian  Component */}
      <section className=" max-sm:w-full mx-auto">
        <h1 className="text-4xl font-bold text-center my-12">
          Asked Questions
        </h1>

        <div className="w-[60%] mx-auto max-sm:w-full">
          <AccordianComponent />
        </div>
      </section>
    </div>
  );
};

export default Home;
