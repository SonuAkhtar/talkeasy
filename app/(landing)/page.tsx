import { LandingHero } from "@/components/Landing/LandingHero";
import { LandingNavbar } from "@/components/Landing/LandingNavbar";

import { Button } from "@/components/Shadcn/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />

      <div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
