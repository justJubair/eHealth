const AddUser = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl text-center border-b-2 w-52 md:w-72 mx-auto text-[#5d78da] font-medium pb-1">
        Add New Patient
      </h2>

      <div>
        {/* add new patient form */}
        <form className="max-w-5xl flex flex-col items-center mx-auto shadow-2xl bg-slate-50 p-6 rounded-xl space-y-3 mt-6 md:mt-0 lg:mt-6">
          {/* name and age */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
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
                className="input input-bordered input-primary w-full"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Blood Pressure</span>
              </div>
              <input
                type="text"
                placeholder="Blood Pressure"
                className="input input-bordered input-primary w-full"
              />
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
              ></textarea>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Upload Prescription</span>
              </div>
              <input
                type="file"
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
export default AddUser;
