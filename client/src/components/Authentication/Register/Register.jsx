"use client";
// import image
import Image from "next/image";
import LoginImg from "../../../assets/LoginImg.png";

// import icon
import { GiHealthPotion } from "react-icons/gi";

import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { postUser } from "@/api/postUser";

// imports for authentication
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

const Register = () => {
  // for redirecting
  const { push } = useRouter();



  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  // handle register form
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return toast.error("Password must be at least six characters");
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
    
      if (res?.user?.email) {
        const user = { name, role, email };
        const dbResponse = await postUser(user);
        if (dbResponse?.insertedId) {
          toast.success("Registered successfully");
          form.reset();
          push("/dashboard");
          setUser(user);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
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
          <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-5 pb-8">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered input-primary w-full"
                required
              />
              <select
                defaultValue="default"
                name="role"
                className="select select-primary w-full"
                required
              >
                <option value="default" disabled>
                  Select your role?
                </option>
                <option value="doctor">Doctor</option>
                <option value="nurse">Nurse</option>
              </select>
              <input
                type="email"
                placeholder="Emaill"
                name="email"
                className="input input-bordered input-primary w-full"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered input-primary w-full"
                required
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
          <Link
            href="/"
            className="btn-block btn text-[#7488d1]  hover:bg-[#90A1DC] hover:text-white mb-16 md:mb-10 lg:mb-0"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
