"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Montserrat } from "next/font/google";
import { Button } from "@/components/Shadcn/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <h1 className={`text-2xl font-bold text-white ${font.className}`}>
            TalkEasy
          </h1>
        </Link>
        <div className="flex items-center gap-x-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="rounded-full bg-transparent text-white"
            >
              Login
            </Button>
          </Link>
          <Link href={isSignedIn ? "/dashboard" : "/login"}>
            <Button variant="outline" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
