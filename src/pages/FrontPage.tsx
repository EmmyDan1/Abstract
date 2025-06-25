import { Hero } from "../components/Hero";
import CompanyGrid from "../components/layout/CompanyGrid";
import StoryGrid from "../components/layout/StoryGrid";
import PricingBar from "../components/layout/PricingBar";

const FrontPage = () => {
  return (
    <section>
      <Hero />
      <CompanyGrid />
      <StoryGrid />
      <PricingBar />
    </section>
  );
};

export default FrontPage;
