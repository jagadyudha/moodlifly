import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Modal from "react-modal";

const dataLink = [
  { name: "Beranda", href: "/" },
  { name: "Tes Kecemasan", href: "/tes-kecemasan" },
  { name: "Artikel", href: "/artikel" },
  { name: "Tipe Kecemasan", href: "/tipe-kecemasan" },
];

const Navbar = () => {
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

  const [isMasuk, setisMasuk] = React.useState(false);

  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };
  return (
    <>
      {/* navbar untuk dekstop */}
      <nav
        className={`px-20 py-5 border-b border-black border-opacity-10 top-0 sticky bg-white z-10 backdrop-filter backdrop-blur-md bg-opacity-80 md:block hidden`}
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
            <button
              onClick={() => setisMasuk(true)}
              className="text-primary rounded-full border border-primary sm:px-5 sm:py-1 py-2 px-4 hover:opacity-50 transition duration-300"
            >
              Masuk
            </button>
          </div>
        </div>
      </nav>

      {/* navbar untuk mobile */}
      <nav className="md:hidden block">
        <div className="flex justify-between py-6 px-6 text-black">
          <Link href={"/"}>
            <a>
              <Image
                src="/assets/images/MOODLIFY.png"
                alt="Social"
                width={133 / 1.1}
                height={29 / 1.1}
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
            <button
              onClick={() => setisMasuk(true)}
              className="text-primary my-10 rounded-full border border-primary w-full py-3 hover:opacity-50 transition duration-300"
            >
              Masuk
            </button>
          </div>
        )}
      </nav>

      {/* LOGIN */}
      {isMasuk && (
        <>
          <Modal isOpen={true} style={customStyles}>
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
                <div className=" mt-10 font-medium flex justify-center ">
                  <label className="block">
                    <span className="text-gray-700 mb-3">Email</span>
                    <input
                      type="Email"
                      className="form-input mt-1 mb-5 block w-52 shadow-sm border border-opacity-20 rounded-md border-gray-700 p-1"
                      placeholder="Email"
                    />

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
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default Navbar;
