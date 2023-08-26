"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriteComponent from "typewriter-effect";
import { Button } from "@/components/Shadcn/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="w-full text-white font-bold py-36 text-center flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>The Best AI Tools for </h1>
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriteComponent
            options={{
              strings: ["one", "two", "three"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create content using AI
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/register"}>
            <Button
              variant="ghost"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Start generating for free
            </Button>
          </Link>
        </div>

        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required
        </div>
      </div>
    </div>
  );
};
