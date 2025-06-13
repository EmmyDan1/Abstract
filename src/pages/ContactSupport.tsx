import SubHero from "../components/layout/SubHero";
import ContentCard from "../components/layout/ContentCard";
import Navbar from "../components/layout/Navbar";
import SupportContentSection from "../components/support/SupportContentSection";
import SupportTabList from "../components/support/SupportTabList";

const ContactSupport = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <SubHero text="" className="h-[200px] lg:h-[260px] " showButtons={true} />
      <div className="flex flex-col  lg:max-w-[1350px] mx-auto px-4 lg:flex-row lg:w-full  ">
        <div className="pt-20 flex-1 p-3 w-full lg:max-w-[800px]">
          <ContentCard text="Support hours are Monday-Friday 05:00-18:00 Pacific Time. We observe all U.S. holidays." ClassName="" />
          <div className="flex font-inter text-[20px] mt-6">
            <p>Unable to Sign in? </p>
            <button className="underline ml-1"> Reach Us Here</button>
          </div>

          <div className="flex-1 space-y-12 mb-40" id="support-content">
            <SupportContentSection />
          </div>
        </div>

        <aside className="hidden lg:block mt-16 w-full lg:max-w-[400px] ml-16">
          <div className="sticky top-40">
            <SupportTabList />
          </div>
        </aside>
      </div>
    </section>
  );
};
export default ContactSupport;
