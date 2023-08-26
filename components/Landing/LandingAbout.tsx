"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriteComponent from "typewriter-effect";
import { Button } from "@/components/Shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Shadcn/card";

const aboutUs = [
  {
    name: "sonu",
    avatar: "S",
    title: "Software Engineer",
    desc: "This is the best application",
  },
  {
    name: "sonu akhtar",
    avatar: "S",
    title: "Software Engineer",
    desc: "This is the best application",
  },
  {
    name: "riyaz",
    avatar: "S",
    title: "Software Engineer",
    desc: "This is the best application",
  },
  {
    name: "riyaz",
    avatar: "S",
    title: "Software Engineer",
    desc: "This is the best application",
  },
];

export const LandingAbout = () => {
  return (
    <div className="w-full px-10 pt-5 pb-20 flex items-center justify-center bg-[#d7fe98] text-[#1e2521]">
      <div className="w-full max-w-7xl">
        <h2 className="text-center text-4xl font-light mb-10 ">About Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {aboutUs.map((item) => (
            <Card
              key={item.name}
              className="bg-[#192339] border-none rounded-full flex items-center justify-center
            h-48 w-48"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">{item.desc}</CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
