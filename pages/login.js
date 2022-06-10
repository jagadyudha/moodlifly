import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="">
      <h2 className=" text-center font-bold  text-3xl text-gray-800">
        Selamat Datang
      </h2>
      <p className="  text-center text-gray-700 mt-2">
        Silahkan melakukan login
      </p>

      <div className=" max-w-xs mx-auto mt-10 bg-slate-600">
        <p className=" font-semibold mb-2">Username</p>
        <form
          className=" bg-white shadow-md rounded"
          action="submit.php"
          method="POST"
        >
          <input
            className=" bg-white shadow-md rounded"
            type="text"
            name="username"
          />
        </form>
        <p className=" font-semibold mt-4 mb-2">Password</p>
        <form action="submit.php" method="POST">
          <input type="text" name="password" />
        </form>
      </div>
    </div>
  );
};

export default Login;
