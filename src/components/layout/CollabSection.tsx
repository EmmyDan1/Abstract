import img5 from "../../assets/Images/icons8-time-50.png";
import img6 from "../../assets/Images/icons8-growth-64.png";
import img7 from "../../assets/Images/icons8-synchronize-50.png";

const CollabSection = () => {
  return (
    <div className="container mx-auto px-4 lg:px-14 py-40 lg:py-48 ">
      <div>
        <h2 className="lg:hidden  text-5xl font-semibold  lg:w-[850px] lg:text-[80px] font-serif lg:font-medium">
          Design collaboration shouldn't be extra work
        </h2>
        <div className="hidden lg:block">
          <p className="border-[0.5px] border-[#b3b8ee]"></p>
          <h2 className="text-5xl font-semibold  lg:w-[850px] lg:text-[80px] font-serif lg:font-medium">
            Design collaboration
          </h2>
          <p className="border-[0.5px] border-[#b3b8ee] -translate-y-3"></p>
          <h2 className="text-5xl font-semibold lg:w-[850px] lg:text-[80px] font-serif lg:font-medium">
            shouldn't be extra work
          </h2>
          <p className="border-[0.5px] border-[#b3b8ee]"></p>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-6">
        <div className="flex flex-col mb-6 ">
          <img src={img5} alt="" className="w-14 h-14 mb-4" />
          <h2 className="text-2xl font-semibold font-poppins mb-2">
            Less files. More flow.
          </h2>
          <p className=" font-poppins text-[16px]">
            No more digging through Dropbox and Google Drive. Always know where
            to find “the latest,” so you can stay in your design flow.
          </p>
        </div>
        <div className="flex flex-col mb-6">
          <img src={img6} alt="" className="w-14 h-14 mb-4" />
          <h2 className="text-2xl font-semibold font-poppins mb-2">
            Design together, in real time.
          </h2>
          <p className=" font-poppins text-[16px]">
            Explore and iterate in the same file at the same time, without
            losing the original. Simply create a branch, do your thing, then
            merge your changes when ready.
          </p>
        </div>
        <div className="flex flex-col">
          <img src={img7} alt="" className="w-14 h-14 mb-4" />
          <h2 className="text-2xl font-semibold font-poppins mb-2">
            Iterate with context.
          </h2>
          <p className=" font-poppins text-[16px]">
            Know who made changes, when, and why. Compare changes side by side,
            resolve design conflicts, and merge work with precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollabSection;
