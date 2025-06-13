import { HiPlus } from "react-icons/hi";

type DropDownProps = {
    dropdownOpen?: boolean;
    user: {
        name: string;
    } | null;
}



const DropDown = ({ dropdownOpen, user }: DropDownProps) => {
  return (
    <div>
      {dropdownOpen && (
        <div className="bg-gray-700 shadow-md w-72 h-36 rounded-md absolute top-16">
          <div className="flex items-center gap-4 p-4">
            <p className="bg-gray-300 text-white font-inter px-2 py-1 rounded">
              d
            </p>
            <div className="flex flex-col items-cnter leading-tight tracking-tighter">
              <p className="text-white font-inter text-[13px]">@{user?.name}</p>
              <p className="text-gray-400 text-[13px]">
                Your personal projects
              </p>
            </div>
          </div>
          <p className="border-b border-white w-full mb-6"></p>
          <div className="flex items-center pl-4 gap-2">
            <HiPlus
              fontSize={30}
              className="text-gray-400 p-2 border border-gray-400 rounded"
            />
            <button className="text-blue-700 font-inter underline text-[14px]">
              Create new organization...
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDown;
