import LandingAbout from "@/components/Landing/LandingAbout";
import LandingTestimony from "@/components/Landing/LandingTestimony";
import LandingFooter from "@/components/Landing/LandingFooter";
import LandingHero from "@/components/Landing/LandingHero";
import LandingNavbar from "@/components/Landing/LandingNavbar";
import LandingTools from "@/components/Landing/LandingTools";
import PageLoader from "@/components/PageLoader/PageLoader";

const LandingPage = () => {
  return (
    <div className="h-full">
      <PageLoader />
      <LandingNavbar />
      <LandingHero />
      <LandingTools />
      <LandingTestimony />
      <LandingAbout />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
