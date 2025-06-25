import { useState } from "react";
import { FaArchive, FaFolder, FaStar } from "react-icons/fa";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("active");
  return (
    <div className=" mt-4 flex items-center font-inter text-sm ">
      <button
        className={`text-white flex py-2 px-2 rounded-lg  hover:text-white ${
          activeTab === "active" ? "bg-black py-2 px-2" : ""
        }`}
        onClick={() => setActiveTab("active")}
      >
        <FaFolder className="inline-block mr-2 text-gray-500 " fontSize={18} />
        Active
      </button>
      <button
        className={`text-white flex py-2 px-2 rounded-lg  ${
          activeTab === "favorite" ? "bg-black" : ""
        }`}
        onClick={() => setActiveTab("favorite")}
      >
        <FaStar className="inline-block mr-2 text-gray-500  " fontSize={18} />
        Favorite
      </button>
      <button
        className={`text-white flex py-2 px-2 rounded-lg ${
          activeTab === "archived" ? "bg-black" : ""
        }`}
        onClick={() => setActiveTab("archived")}
      >
        <FaArchive className="inline-block mr-2 text-gray-500 " fontSize={18} />
        Archived
      </button>

    </div>
  );
};

export default Tabs;
