"use client";
// import icons
import { GiHealthPotion } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

// import usestate
import { useEffect, useState } from "react";

// import usePathname
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getASingleUser } from "@/api/getASingleUser";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({})
  const [user] = useAuthState(auth);
 
  const pathname = usePathname();

  useEffect(()=>{
    const getUser = async()=>{
      const res = await getASingleUser(user?.email)
      setCurrentUser(res)
    }

    getUser()
  },[user])


  return (
    <>
      <div className="fixed lg:relative z-50">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute z-50 flex flex-col w-24 items-center top-4 hover:cursor-pointer"
        >
          <GiHealthPotion size={40} className={`${sidebarOpen ? "text-purple-700" : "text-white"} duration-200`}/>
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
                
                {currentUser?.role==="doctor" &&  <Link href="/addPatient">
                <AiOutlineUsergroupAdd
                  size={30}
                  className={
                    pathname == "/addPatient" ? "text-purple-700" : "text-white"
                  }
                />
              </Link>}
             
            </div>
            <MdOutlineLogout onClick={()=> signOut(auth)} size={30} className="text-white hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
