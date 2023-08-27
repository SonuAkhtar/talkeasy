"use client";
import Image from "next/image";
import { Button } from "@/components/Shadcn/button";
import "./aboutCard.css";

interface AboutCardProps {
  item: object;
}

const AboutCard = ({ item }: AboutCardProps) => {
  return (
    <div className="relative w-full px-2 p-2 flex items-center justify-center text-white">
      <div className="image_wrapper relative overflow-hidden rounded-2xl h-80 w-60">
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
  );
};

export default AboutCard;
