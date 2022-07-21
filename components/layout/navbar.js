import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { supabase } from "@/lib/supabase";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { useAuth } from "context/auth";

const dataLink = [
  { name: "Beranda", href: "/" },
  { name: "Tes Kecemasan", href: "/tes-kecemasan" },
  { name: "Artikel", href: "/artikel" },
  { name: "Tipe Kecemasan", href: "/tipe-kecemasan" },
];

const Navbar = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [isMasuk, setisMasuk] = React.useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (form) => {
    try {
      const { error } = await supabase.auth.signIn(form);
      if (error) {
        throw error;
      } else {
        setisMasuk(false);
        setIsOpen(false);
        toast.success("Berhasil Masuk");
      }
    } catch (error) {
      toast.error(error.error_description || error.message);
    }
  };

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isOpen ? "hidden" : "auto";

    if (isOpen) {
      window.addEventListener("scroll", (e) => {
        e.preventDefault();
      });
    }
  }, [isOpen]);

  React.useEffect(() => {
    // handle login modal when user navigate to tipe kecemasan without login

    if (router.pathname === "/tes-kecemasan" && !user) {
      setisMasuk(true);
    }
  }, []);

  return (
    <>
      {/* navbar untuk dekstop */}
      <nav
        className={`px-20 py-5 border-b border-black border-opacity-10 top-0 sticky bg-white z-10 backdrop-filter backdrop-blur-md bg-opacity-80 lg:block hidden`}
      >
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <a>
              <Image
                src="/assets/images/MOODLIFY.png"
                alt="Social"
                width={133}
                height={29}
                objectFit="contain"
              />
            </a>
          </Link>
          <div className="space-x-8 font-medium">
            {dataLink.map((item, index) => (
              <Link key={index} href={item.href}>
                <a className=" hover:text-primary">{item.name}</a>
              </Link>
            ))}
            {user ? (
              <Link href="/profil">
                <button className="btn btn-primary text-white">Profil</button>
              </Link>
            ) : (
              <button
                onClick={() => setisMasuk(true)}
                className="btn btn-primary text-white"
              >
                Masuk
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* navbar untuk mobile */}
      <nav
        className={`${
          isOpen ? "bg-opacity-100" : "bg-opacity-90"
        } lg:hidden block sticky top-0 z-10 backdrop-filter backdrop-blur-sm bg-white`}
      >
        <div className="flex justify-between py-4 px-6 text-black">
          <Link href={"/"}>
            <a>
              <Image
                src="/assets/images/MOODLIFY.png"
                alt="Social"
                width={133 / 1.2}
                height={29 / 1.2}
                objectFit="contain"
              />
            </a>
          </Link>
          <button
            className="rounded-md p-[5px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseOutline className={`text-2xl`} />
            ) : (
              <IoMenuOutline className="text-2xl" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="container absolute z-20 h-screen bg-white px-8">
            {dataLink.map((item, index) => (
              <Link key={index} href={item.href}>
                <a>
                  <motion.div
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                      pageInitial: { opacity: 0, x: "-100%" },
                      pageAnimate: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.2 * index, ease: "easeInOut" }}
                    className={`border-b border-black border-opacity-10 py-5 text-gray-800 `}
                  >
                    {item.name}
                  </motion.div>
                </a>
              </Link>
            ))}
            {user ? (
              <Link href="/profil">
                <button className="btn btn-primary text-white w-full my-10">
                  Profil
                </button>
              </Link>
            ) : (
              <button
                onClick={() => setisMasuk(true)}
                className="btn btn-primary text-white w-full my-10"
              >
                Masuk
              </button>
            )}
          </div>
        )}
      </nav>

      {/* LOGIN */}
      <>
        <div class={`modal  ${isMasuk && "modal-open"}`}>
          <div class="modal-box relative">
            <button
              onClick={() => setisMasuk(false)}
              for="my-modal-3"
              class="btn-ghost border-none text-gray-800 btn-sm btn-circle absolute right-5 top-5"
            >
              ✕
            </button>

            <Image
              src="/assets/images/MOODLIFY.png"
              alt="Social"
              width={133 / 1.2}
              height={29 / 1.2}
              objectFit="contain"
            />

            <form
              onSubmit={(e) => {
                handleLogin(form);
                e.preventDefault();
              }}
              className="my-10 space-y-4"
            >
              <div>
                <span className="label-text">Alamat Email</span>
                <input
                  type="email"
                  placeholder="tutut@gmail.com"
                  className="input input-bordered w-full"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <span className="label-text">Password</span>
                <input
                  type="password"
                  placeholder="**********"
                  className="input input-bordered w-full"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary text-white w-full"
                >
                  Login
                </button>
                <span className="my-4 block">
                  Belum memiliki akun? {` `}
                  <Link href={"/register"}>
                    <a className="text-primary">Daftar</a>
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
        {/* <Modal isOpen={true} style={customStyles}>
            <div className="w-screen mx-auto h-screen grid place-items-center">
              <div className="bg-white mx-5 sm:mx-auto border-black border border-opacity-20 rounded-lg m-5 sm:w-1/3 w-[90%]">
                <div className="flex justify-between mt-5 ml-5 mr-5">
                  <Image
                    src="/assets/images/MOODLIFY.png"
                    alt="Social"
                    width={133 / 1.2}
                    height={29 / 1.2}
                    objectFit="contain"
                  />
                  <button onClick={() => setisMasuk(false)}>
                    <IoCloseOutline className=" text-2xl" />
                  </button>
                </div>
                <h2 className=" text-center font-bold mt-10 text-2xl text-gray-800">
                  Selamat Datang
                </h2>
                <p className="  text-center text-gray-700 mt-2">
                  Masukkan email dan password anda
                </p>

                <form
                  onSubmit={(e) => {
                    handleLogin(form);
                    e.preventDefault();
                  }}
                  className=" max-w-xs mx-auto items-center  "
                >
                  <div className=" mb-5 mt-5">
                    <span className="text-gray-700 font-semibold mb-3">
                      Email
                    </span>
                    <div className=" mt-2 ">
                      <input
                        type="email"
                        placeholder="Masukkan email"
                        className="input w-full shadow-sm border border-opacity-20"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className=" mb-5">
                    <span className="text-gray-700 font-semibold mb-3">
                      Password
                    </span>
                    <div className=" mt-2 ">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input w-full shadow-sm border border-opacity-20"
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="max-w-xs mx-auto grid grid-cols-2 mb-16 gap-x-4">
                    <button
                      type="submit"
                      className="btn btn-primary text-white w-full"
                    >
                      Login
                    </button>
                    <Link href={"/register"}>
                      <a>
                        <button className="btn btn-outline btn-primary w-full">
                          Registrasi
                        </button>
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </Modal> */}
      </>
    </>
  );
};

export default Navbar;
