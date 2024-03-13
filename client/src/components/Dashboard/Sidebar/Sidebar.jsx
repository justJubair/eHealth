"use client";
// import icons
import { GiHealthPotion } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

// import usestate
import { useState } from "react";

// import usePathname
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();
  return (
    <>
      <div className="fixed lg:relative z-50">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute z-50 flex flex-col w-24 items-center top-4"
        >
          <GiHealthPotion size={40} className="text-purple-800"/>
        </div>
        <div
          className={`${
            sidebarOpen ? "-ml-32" : ""
          } bg-[#90A1DC] h-screen w-24  pt-4 pb-10 duration-200 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-between h-full">
            {/* Sidebar routes */}
            <div className="flex flex-col items-center gap-6 mt-[70px]">
              <Link href="/dashboard">
                <MdWidgets
                  size={30}
                  className={
                    pathname == "/dashboard" ? "text-purple-700" : "text-white"
                  }
                />
              </Link>

              <Link href="/addUser">
                <AiOutlineUsergroupAdd
                  size={30}
                  className={
                    pathname == "/addUser" ? "text-purple-700" : "text-white"
                  }
                />
              </Link>
            </div>
            <MdOutlineLogout size={30} className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
