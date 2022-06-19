import React from "react";

const register = () => {
  return (
    <section>
      <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
          Registrasi
        </h1>
        <p className="text-gray-700">Gratis, sampai kapanpun.</p>
      </div>

      <div className=" mt-10 font-medium sm:flex flex-none justify-center">
        <label className="block sm:mr-24">
          <span className="text-gray-700 mb-3">Nama depan</span>
          <input
            type="nama"
            className="form-input mt-1 mb-5 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1"
            placeholder="masukkan nama"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 mb-3">Nama belakang</span>
          <input
            type="nama"
            className="form-input mt-1 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1 "
            placeholder="masukkan nama"
          />
        </label>
      </div>

      <div className=" mt-10 font-medium sm:flex flex-none justify-center">
        <label className="block sm:mr-24">
          <span className="text-gray-700 mb-3">Jenis kelamin</span>
          <input
            type="jenis kelamin"
            className="form-input mt-1 mb-5 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1"
            placeholder="P/L"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 mb-3">Tanggal lahir</span>
          <input
            type="tangga lahir"
            className="form-input mt-1 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1 "
            placeholder="masukkan tanggal lahir"
          />
        </label>
      </div>

      <div className=" mt-10 font-medium sm:flex flex-none justify-center">
        <label className="block sm:mr-24">
          <span className="text-gray-700 mb-3">Email</span>
          <input
            type="Email"
            className="form-input mt-1 mb-5 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1"
            placeholder="Email"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 mb-3">Password</span>
          <input
            type="Password"
            className="form-input mt-1 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1 "
            placeholder="*************"
          />
        </label>
      </div>

      <div className=" flex justify-center mt-8 mb-20">
        <button className=" bg-primary rounded-md text-white w-32 p-1 mr-3 hover:opacity-80 transition-all duration-300">
          Register
        </button>
      </div>
    </section>
  );
};

export default register;
