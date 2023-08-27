"use client";

import AboutCard from "../AboutCard/AboutCard";

const aboutDetails = [
  {
    number: "01",
    name: "Blakely",
    profile: "Software Engineer",
    link: "/blakely",
    image: "/dev_1.jpg",
  },
  {
    number: "02",
    name: "Sebestian",
    profile: "UI/UX Developer",
    link: "/sebestian",
    image: "/dev_5.jpg",
  },
  {
    number: "03",
    name: "Tabitha",
    profile: "Backend Developer",
    link: "/tabitha",
    image: "/dev_3.jpg",
  },
  {
    number: "04",
    name: "Benjamin",
    profile: "Full Stack",
    link: "/benjamin",
    image: "/dev_4.jpg",
  },
];

export const LandingAbout = () => {
  return (
    <div className="w-full px-10 pt-5 pb-20 flex items-center justify-center bg-[#d7fe98] text-[#1e2521]">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light mb-4 lg:mb-10 ">
          About Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {aboutDetails.map((item, i) => (
            <AboutCard item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
