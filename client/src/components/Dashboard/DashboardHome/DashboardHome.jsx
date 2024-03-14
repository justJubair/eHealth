"use client";
import Image from "next/image";
// import icons
import { FaUserNurse } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaFile } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


// authenticate related imports
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PatientUpdateModal from "./PatientUpdateModal";
import axios from "axios";
import Swal from "sweetalert2";

const DashboardHome = ({ patients }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [user] = useAuthState(auth);

  const router = useRouter();

  const handleDeletePatient = async(_id)=>{
   
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
         axios.delete(`http://localhost:5000/patients/${_id}`).then((res)=>{
          if(res?.data?.deletedCount>0){
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Patient has been deleted.",
              icon: "success"
            });
          }
         })
          
         
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Patient is safe",
            icon: "error"
          });
        }
      });
      
    
    
  }
 

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    router.push("/");
  }
  return (
    <div className="mt-16 lg:mt-0">
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
        <p className="text-gray-600 font-medium text-sm">{user?.email}</p>
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
          <IoSearchOutline
            className="absolute top-3 text-purple-600 right-2"
            size={25}
          />
        </div>

        <select
          defaultValue="default"
          className="select select-primary w-full max-w-xs"
        >
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
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>13-03-2024</td>
              <td className="flex items-center gap-3">
                <FaRegEdit size={20} className="text-green-600" />
                <RiDeleteBin6Line size={22} className="text-red-600" />
                <FaFile size={20} className="text-yellow-600" />
              </td>
            </tr> */}
            {patients?.map((patient, index) => (
              <tr key={patient?._id}>
                <th>{index+1}</th>
                <td>{patient?._id}</td>
                <td>{patient?.name}</td>
                <td>{patient?.createdAt}</td>
                <td className="flex items-center gap-3">
                  <FaRegEdit onClick={()=>document.getElementById("modal"+patient?._id).showModal()} size={20} className="text-green-600 hover:cursor-pointer" />
                  <PatientUpdateModal id={patient?._id} patient={patient}/>
                  <RiDeleteBin6Line onClick={()=> handleDeletePatient(patient?._id)} size={22} className="text-red-600 hover:cursor-pointer" />
                  <FaFile size={20} className="text-yellow-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DashboardHome;
