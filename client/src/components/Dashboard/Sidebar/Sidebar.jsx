// import icons
import { GiHealthPotion } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute z-50 flex flex-col w-24 items-center top-4">
          <GiHealthPotion className="" size={50} />
        </div>
        <div className=" bg-[#90A1DC] h-screen w-24  pt-4 pb-10">
          <div className="flex flex-col items-center justify-between h-full">
            {/* Sidebar routes */}
            <div className="flex flex-col items-center gap-6 mt-[75px]">
              <MdWidgets size={30} className="text-white" />
              <AiOutlineUsergroupAdd size={30} className="text-white" />
            </div>
            <MdOutlineLogout size={30} className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
