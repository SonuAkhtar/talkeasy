"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Shadcn/card";

import { landingTestimonyData } from "@/app/api/data";
import "./landingTestimony.css";

const LandingTestimony = () => {
  return (
    <div className="w-full px-10 pt-5 pb-10 md:pb-20 flex items-center justify-center shadow-md">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light pt-3 mb-10 text-white">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4">
          {landingTestimonyData.map((item, index) => (
            <Card
              key={index}
              className="relative bg-[#192339] border-none py-4 h-36 w-full md:h-48 md:w-64 flex items-center justify-center text-white"
            >
              <div className="profile_image absolute overflow-hidden rounded-full h-12 w-12">
                <Image fill alt="profile" src={item.dp} />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div className="w-full text-center md:text-left">
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm font-light">
                      {item.title}
                    </p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0 font-light text-center md:text-left ">
                  {item.desc}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingTestimony;
