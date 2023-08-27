"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/Shadcn/button";

export const LandingFooter = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="w-full px-10 p-10 flex items-center justify-center text-white">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-center">
          <Link href={isSignedIn ? "/dashboard" : "/register"}>
            <Button
              variant="secondary"
              className="md:text-lg p-4 md:p-6 rounded-full"
            >
              Start for free
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-4 m-10 text-white text-lg">
          <i className="fa-brands fa-linkedin-in cursor-pointer transition ease hover:scale-125" />
          <i className="fa-brands fa-twitter cursor-pointer transition ease hover:scale-125" />
          <i className="fa-brands fa-facebook-f cursor-pointer transition ease hover:scale-125" />
          <i className="fa-brands fa-instagram cursor-pointer transition ease hover:scale-125" />
        </div>
        <div className="flex flex-col items-center justify-between text-sm md:flex-row gap-2">
          <span>TalkEasy</span>
          <span className="text-xs">
            &#169; 2023 TalkEasy | All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};
