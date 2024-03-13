// import image
import Image from "next/image";
import LoginImg from "../../../assets/LoginImg.png";

// import icons
import { GiHealthPotion } from "react-icons/gi";
import Link from "next/link";
const Register = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 md:py-6 md:h-screen">
      <div className="flex items-center justify-center gap-10">
        {/* side banner */}
        {/* hidden for mobile view */}
        <div className="hidden md:block bg-[#90A1DC] h-[85vh] my-9 md:p-8 lg:p-16 rounded-xl">
          {/* logo tagline */}
          <div className="flex items-center gap-2">
            <GiHealthPotion size={50} />
            <div>
              <h2 className="text-2xl font-bold">eHealth</h2>
              <p className="uppercase text-white text-sm">
                Health Management system
              </p>
            </div>
          </div>
          <Image
            className="lg:w-[400px] md:mt-7"
            priority
            src={LoginImg}
            width={300}
            height={100}
            alt="login page banner"
          />
        </div>

        {/* login form */}
        <div className="flex-1 mt-5 md:mt-0">
          {/* logo tagline */}
          <div className="md:hidden flex items-center mb-12 gap-2 bg-[#90A1DC] p-2 rounded-xl">
            <GiHealthPotion size={40} />
            <div>
              <h2 className="text-xl font-bold">eHealth</h2>
              <p className="uppercase text-white text-sm">
                Health Management system
              </p>
            </div>
          </div>
          <h2 className="text-2xl text-center md:mb-6 mb-4 font-bold text-[#5b76d7] animate-pulse">
            Register Now
          </h2>
          <form>
            <div className="flex flex-col gap-5 pb-8">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-primary w-full "
              />
              <select defaultValue="default" className="select select-primary w-full">
                <option value='default' disabled>
                  Select your role?
                </option>
                <option>Doctor</option>
                <option>Nurse</option>
               
              </select>
              <input
                type="email"
                placeholder="Emaill"
                className="input input-bordered input-primary w-full "
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full "
              />
            </div>
            <button
              type="submit"
              className="btn-block btn text-[#7388d3] hover:bg-[#90A1DC] hover:text-white"
            >
              Register
            </button>
          </form>
          <div className="divider">OR</div>
          <Link href="/" className="btn-block btn text-[#7488d1]  hover:bg-[#90A1DC] hover:text-white mb-16 md:mb-10 lg:mb-0">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
