import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    nama_depan: "",
    nama_belakang: "",
    jenis_kelamin: "",
    tanggal_lahir: new Date(),
  });
  const [session, setSession] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (form) => {
    try {
      const { error } = await supabase.auth.signUp(
        {
          email: form.email,
          password: form.password,
        },
        {
          data: {
            nama_depan: form.nama_depan,
            nama_belakang: form.nama_belakang,
            jenis_kelamin: form.jenis_kelamin,
            tanggal_lahir: form.tanggal_lahir,
          },
        }
      );
      if (error) {
        throw error;
      } else {
        setSuccess(true);
      }
    } catch (error) {
      toast(error.error_description || error.message);
    }
  };

  React.useEffect(() => {
    setSession(supabase.auth.session());
  }, []);

  if (session) {
    router.push("/");
  }

  console.log(session);

  return (
    <section>
      {success && (
        <>
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">SUKSES REGISTRASI</h3>
              <p className="py-4">
                Silahkan Konfirmasi email dan jangan sampai lupa password
              </p>
              <div className="modal-action">
                <label
                  for="my-modal"
                  className="btn"
                  onClick={() => router.push("/")}
                >
                  OK
                </label>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
          Registrasi
        </h1>
        <p className="text-gray-700">Gratis, sampai kapanpun.</p>
      </div>

      <div className=" max-w-xl mx-auto items-center  ">
        <div className=" mb-5 ">
          <span className="text-gray-700 font-semibold">Nama depan</span>
          <div className=" mt-2">
            <input
              type="text"
              placeholder="Masukkan nama"
              className="input w-full shadow-sm border border-opacity-20 "
              value={form.nama_depan}
              onChange={(e) => setForm({ ...form, nama_depan: e.target.value })}
            />
          </div>
        </div>

        <div className=" mb-5">
          <span className="text-gray-700 font-semibold mb-3">
            Nama belakang
          </span>
          <div className=" mt-2 ">
            <input
              type="text"
              placeholder="Masukkan nama"
              className="input w-full  shadow-sm border border-opacity-20"
              value={form.nama_belakang}
              onChange={(e) =>
                setForm({ ...form, nama_belakang: e.target.value })
              }
            />
          </div>
        </div>

        <div className=" mb-5">
          <span className="text-gray-700 font-semibold mb-3">
            Tanggal Lahir
          </span>
          <div className=" mt-2 ">
            <DatePicker
              className="w-full shadow-sm border border-opacity-20 rounded-lg p-3"
              selected={form.tanggal_lahir}
              onChange={(date) => setForm({ ...form, tanggal_lahir: date })}
            />
          </div>
        </div>

        <div className=" mb-5">
          <span className="text-gray-700 mb-3 font-semibold">
            Jenis Kelamin
          </span>
          <div className=" mt-2 ">
            <select
              value={form.jenis_kelamin}
              onChange={(e) =>
                setForm({ ...form, jenis_kelamin: e.target.value })
              }
              className=" w-full border bg-white rounded-lg p-3 outline-none"
            >
              <option value={"perempuan"} className="py-1">
                Perempuan
              </option>
              <option value={"laki-laki"} className="py-1">
                Laki-laki
              </option>
            </select>
          </div>
        </div>

        <div className=" mb-5">
          <span className="text-gray-700 font-semibold mb-3">Email</span>
          <div className=" mt-2 ">
            <input
              type="email"
              placeholder="Masukkan email"
              className="input w-full shadow-sm border border-opacity-20"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        <div className=" mb-5">
          <span className="text-gray-700 font-semibold mb-3">Password</span>
          <div className=" mt-2 ">
            <input
              type="password"
              placeholder="*******"
              className="input w-full shadow-sm border border-opacity-20"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
        </div>

        <div className=" justify-center mt-16">
          <button
            className="btn btn-block btn-primary text-white"
            onClick={(e) => {
              e.preventDefault();
              handleRegister(form);
            }}
          >
            Registrasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
