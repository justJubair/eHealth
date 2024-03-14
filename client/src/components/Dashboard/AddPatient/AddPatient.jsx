"use client";

import axios from "axios";
import toast from "react-hot-toast";

const AddPatient = () => {
  // handle add patient form
  const handleAddPatient = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData();

    formData.append("name", form.name.value);
    formData.append("age", form.age.value);
    formData.append("weight", form.weight.value);
    formData.append("gender", form.gender.value);
    formData.append("diagnosis", form.diagnosis.value);
    formData.append("bloodPressure", form.bloodPressure.value);
    formData.append("prescription", form.prescription.files[0]);
      
    // const imageFile = { image: form.image.files[0] };

    // const newPatient = {name, age, weight, gender, diagnosis, bloodPressure}

    try {
     
      const response = await axios.post(
        "http://localhost:5000/patients",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if(response?.data?.insertedId){
        toast.success("New Patient Added")
        form.reset()
      } // Assuming the server responds with data
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center border-b-2 w-52 md:w-72 mx-auto text-[#5d78da] font-medium pb-1">
        Add New Patient
      </h2>

      <div>
        {/* add new patient form */}
        <form
          onSubmit={handleAddPatient}
          className="max-w-5xl flex flex-col items-center mx-auto shadow-2xl bg-slate-50 p-6 rounded-xl space-y-3 mt-6 md:mt-0 lg:mt-6"
        >
          {/* name and age */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
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
                defaultValue="default"
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
                placeholder="Blood Pressure"
                className="input input-bordered input-primary w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Upload Prescription</span>
              </div>
              <input
                type="file"
                name="prescription"
                required
                className="file-input file-input-bordered file-input-primary w-ful"
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
    </div>
  );
};
export default AddPatient;
