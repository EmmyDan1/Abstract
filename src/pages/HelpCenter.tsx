import SubHero from "../components/layout/SubHero";
import Searchbar from "../components/ui/Searchbar";
import ContentTable from "../components/layout/ContentTable";
import Navbar from "../components/layout/Navbar";
import UserMenu from "../components/layout/UserMenu";

const HelpCenter = () => {
  return (
    <section className="min-h-screen">
      <Navbar />
      <SubHero
        className=" mb-20 lg:mb-0 lg:items-center"
        text="How can we help?"
        showButtons={false}
      >
        <Searchbar
          className="w-[360px] p-4 border-[0.5px] border-black rounded-md placeholder:text-xl placeholder:font-inter focus:outline-none focus:border-blue-600 lg:w-[600px]"
          ArrowIcon={true}
        />
      </SubHero>
      <UserMenu  />
      <ContentTable />
    </section>
  );
};

export default HelpCenter;
