import React from "react";

const Teams = () => {
  const teamMembers = [
    {
      name: "Prince Nishad",
      role: "Founder & CEO | Full stack Developer",
      img: "https://i.postimg.cc/DyyBDZcR/IMG-20241201-092150.jpg",
    },
    {
      name: "Mithlesh Kumar",
      role: "Co-founder | Frontend Developer",
      img: "https://i.postimg.cc/vBr0Rxkw/1733024407640.jpg",
    },
  ];
  return (
    <section className=" y-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mt-14 text-transparent bg-clip-text bg-gradient-to-r dark:from-cyan-300 dark:to-cyan-600 from-indigo-200 to-indigo-900">
          OUR CREATIVE TEAM
        </h2>

        {/* Team Section */}
        <div className="w-full h-auto flex justify-center items-center flex-wrap my-14">
          {/* Team Member 1 */}
          <div className="max-sm:w-auto mx-auto flex gap-4 md:gap-16  justify-center items-center flex-wrap">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-b w-72 max-sm:w-full bg-slate-900 ext-center p-4 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                {/* Profile Image */}

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-auto rounded-lg mx-auto"
                />

                {/* Name */}
                <h3 className="text-white font-bold text-lg mt-4">
                  {member.name}
                </h3>
                {/* Role */}
                <p className="text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
