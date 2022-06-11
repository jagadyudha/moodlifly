import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className=" bg-white border-black border max-w-xl  mx-auto rounded-lg">
      <div className=" flex justify-between mt-5 ml-5 mr-5">
        <Image
          src="/assets/images/MOODLIFY.png"
          alt="Social"
          width={133 / 1.2}
          height={29 / 1.2}
          objectFit="contain"
        />
        <IoCloseOutline className=" text-2xl" />
      </div>

      <h2 className=" text-center font-bold mt-10 text-3xl text-gray-800">
        Selamat Datang
      </h2>
      <p className="  text-center text-gray-700 mt-2">
        Silahkan melakukan login
      </p>
      <div className=" mt-10 font-medium flex justify-center ">
        <label className="block">
          <span className="text-gray-700 mb-3">Username</span>
          <input
            type="username"
            className="form-input mt-1 mb-5 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1"
            placeholder="enter your name"
          />

          <span className="text-gray-700 mb-3">Password</span>
          <input
            type="username"
            className="form-input mt-1 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1 "
            placeholder="*************"
          />
        </label>
      </div>
      <div className=" flex justify-center mt-8 mb-20">
        <button className=" bg-primary rounded-md text-white  w-24 p-1 mr-3 hover:opacity-80 transition-all duration-300">
          Login
        </button>
        <button className="bg-white rounded-md text-primary border border-primary w-24 p-1 mr-3 hover:opacity-80 transition-all duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
