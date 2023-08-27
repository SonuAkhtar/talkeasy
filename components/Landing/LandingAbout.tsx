"use client";

import Image from "next/image";
import { Button } from "@/components/Shadcn/button";
import "./landingAbout.css";

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
            <div className="relative w-full px-2 p-2 flex items-center justify-center text-white">
              <div className="image_wrapper relative overflow-hidden rounded-2xl h-80 w-60 border border-slate-300">
                <Image
                  fill
                  alt="card-image"
                  className="origin-left transition-all duration-1000"
                  src={item.image}
                />

                <div className="card_body text-[#f6f5fa] absolute top-0 left-0 h-full w-full transition-all duration-1000">
                  <div className="number text-4xl font-thin absolute left-4 transition-all duration-1000">
                    {item.number}
                  </div>
                  <div className="name text-2xl absolute transition-all duration-1000">
                    {item.name}
                  </div>
                  <div className="profile text-xs font-light absolute transition-all duration-1000">
                    {item.profile}
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full know_btn text-black absolute left-4 transition-all duration-1000"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
