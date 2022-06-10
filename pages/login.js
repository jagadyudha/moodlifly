import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <h2 className=" text-center font-bold  text-3xl text-gray-800">
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
      <div className=" flex justify-center mt-8">
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
