import Image from "next/image";
// import icons
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div>
      {/* avatar */}
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="w-12 rounded-full object-cover">
            <Image
              width={100}
              height={100}
              alt="user avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <p className="text-gray-600 font-medium text-sm">Hey, Chandler Bing</p>
      </div>

      {/* nurse and patients stats */}
      <div className="flex items-center gap-4 mt-8">
        {/* nurses */}
        <div className="bg-purple-400 text-white flex items-center gap-4 rounded-xl max-w-44 justify-center p-4">
          <FaUserNurse size={40} />
          <div className="text-center">
            <h3 className="text-xl font-bold">Nurses</h3>
            <h3 className="text-xl font-bold">5</h3>
          </div>
        </div>
        {/* Doctors */}
        <div className="bg-purple-500 text-white flex items-center gap-4 rounded-xl max-w-44 justify-center p-4">
          <FaUserDoctor size={40} />
          <div className="text-center">
            <h3 className="text-xl font-bold">Doctors</h3>
            <h3 className="text-xl font-bold">2</h3>
          </div>
        </div>
        {/* Patients */}
        <div className="bg-purple-600 text-white flex items-center gap-4 rounded-xl max-w-44 justify-center p-4">
          <FaUser size={40} />
          <div className="text-center">
            <h3 className="text-xl font-bold">Patients</h3>
            <h3 className="text-xl font-bold">10</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
