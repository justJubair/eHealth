import Image from "next/image";
// import icons
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

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

      {/* nurse, doctor and patients stats */}
      <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-4 my-8">
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

      {/* search and filter patients */}
      <div className="flex gap-8 mb-10 items-center">
        <div className="relative max-w-xs w-full">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-primary w-full"
        />
        <IoSearchOutline className="absolute top-3 text-purple-600 right-2" size={25}/>
        </div>
       
        <select defaultValue="default" className="select select-primary w-full max-w-xs">
          <option value="default" disabled>
            Sort patients
          </option>
          <option>Newest patients</option>
          <option>Oldest patients</option>
         
        </select>
      </div>
      {/* patients data in table format */}

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Patient Id</th>
              <th>Name</th>
              <th>Visited</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>13-03-2024</td>
              <td className="flex items-center gap-3">
                <FaRegEdit size={20} className="text-green-600" />
                <RiDeleteBin6Line size={22} className="text-red-600" />
                <FaFile size={20} className="text-yellow-600" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DashboardHome;
