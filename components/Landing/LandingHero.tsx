"use client";

import TypewriteComponent from "typewriter-effect";

export const LandingHero = () => {
  return (
    <div className="w-full text-white font-bold py-36 text-center flex items-center justify-center">
      <div className="w-full max-w-7xl flex items-center justify-center flex-col gap-4">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>The AI tool for</h1>
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriteComponent
            options={{
              strings: ["Conversation", "Code", "Images", "Music", "Videos"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Explore the power of Artifical Intelligence
        </div>

        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          *No credit card required
        </div>
      </div>
    </div>
  );
};
