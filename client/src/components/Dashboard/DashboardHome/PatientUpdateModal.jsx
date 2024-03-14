import axios from "axios";
import toast from "react-hot-toast";

const PatientUpdateModal = ({ id, patient }) => {
  const handlePatientUpdate = async(e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value
    const age =form.age.value
    const weight = form.weight.value
    const gender =form.gender.value
    const diagnosis = form.diagnosis.value
    const bloodPressure = form.bloodPressure.value

    const updatedPatient = {name, age, weight, gender, diagnosis, bloodPressure}
 
    const res = await axios.patch(`http://localhost:5000/patients/${id}`, updatedPatient)
    if(res?.data?.modifiedCount>0){
      toast.success("Patient Data Updated")
    }
    
  };
  return (
    <dialog id={`modal` + id} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="text-center text-xl font-bold">Update Patient's Data</h2>
        <form onSubmit={handlePatientUpdate} className="max-w-5xl flex flex-col items-center mx-auto shadow-2xl bg-slate-50 p-4 rounded-xl space-y-3">
          {/* name and age */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                defaultValue={patient?.name}
                placeholder="Name"
                name="name"
                className="input input-bordered input-primary w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Age</span>
              </div>
              <input
                type="text"
                placeholder="Age"
                defaultValue={patient?.age}
                name="age"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>

          {/* weight and blood pressure */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Weight</span>
              </div>
              <input
                type="text"
                placeholder="Weight"
                defaultValue={patient?.weight}
                name="weight"
                className="input input-bordered input-primary w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <select
                name="gender"
                defaultValue={patient?.gender}
                className="select select-primary w-full"
              >
                <option value="default" disabled>
                  Select your gender?
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>

          {/* diagnosis and prescription file */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full pb-8">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Diagnosis</span>
              </div>
              <textarea
                name="diagnosis"
                defaultValue={patient?.diagnosis}
                className="input input-bordered input-primary w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Blood Pressure</span>
              </div>
              <input
                type="text"
                name="bloodPressure"
                defaultValue={patient?.bloodPressure}
                placeholder="Blood Pressure"
                className="input input-bordered input-primary w-full"
              />
            </label>
          </div>

          <button
            type="submit"
            className=" btn text-[#7488d1] btn-block bg-slate-300  hover:bg-[#90A1DC] hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </dialog>
  );
};
export default PatientUpdateModal;
