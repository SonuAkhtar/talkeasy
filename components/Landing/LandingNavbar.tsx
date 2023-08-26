"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
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
          {/* <div className="relative h-8 w-8 mr-4">
            <Image fill alt="logo" src="/talkeasy-logo.png" />
          </div> */}
          <h1 className={cn("text-2xl font-bold text-white", font.className)}>
            TalkEasy
          </h1>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? "/dashboard" : "/login"}>
            <Button variant="outline" className="rounded-fill">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
