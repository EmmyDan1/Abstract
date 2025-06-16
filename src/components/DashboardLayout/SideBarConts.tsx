import { HiFolder, } from 'react-icons/hi';
import { FiActivity } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import UserMenu from '../layout/UserMenu';

const SidebarConts = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Jump to project..."
        className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none mb-2"
      />

      <div>
        <div className="flex items-center gap-2 mt-4 bg-blue-950 p-2 rounded-md cursor-pointer ">
          <HiFolder className="text-white" fontSize={24} />
          <p className="text-white font-inter text-[14px] ">Projects</p>
        </div>

        <div className="flex items-center gap-2 mt-4  p-2 rounded-md cursor-pointer">
          <FiActivity className="text-white" fontSize={24} />
          <p className="text-white font-inter text-[14px]">Activity</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-inter text-white text-sm">Favorite Project</p>

        <div className="flex flex-col items-center justify-center w-66 h-36 bg-gray-700 rounded-md p-2 mt-2">
          <div className="flex items-center mb-2 leading-10">
            <FaStar className="text-orange-400 " fontSize={24} />
            <FaStar className="text-yellow-400 -translate-y-3" fontSize={40} />
            <FaStar className="text-blue-500 " fontSize={24} />
          </div>
          <p className="text-center text-gray-300 font-inter ">
            Favorite Project to add them to your navigation
          </p>
          <button className=" text-blue-700 font-inter text-sm rounded-md mt-2">
            View Projects
          </button>
        </div>
      </div>
      <div>
        <UserMenu />
      </div>
    </div>
  );
};
export default SidebarConts;