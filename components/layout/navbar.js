import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const dataLink = [
  { name: "Tes Kecemasan", href: "/tes-kecemasan" },
  { name: "Tipe Kecemasan", href: "/tipe-kecemasan" },
  { name: "Relaksasi", href: "/relaksasi" },
  { name: "Login", href: "/login" },
];

const Navbar = () => {
  const router = useRouter();
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
  return (
    <>
      <nav
        className={`px-20 py-5 border-b border-black border-opacity-10 top-0 sticky bg-white z-10 backdrop-filter backdrop-blur-md bg-opacity-80 md:block hidden`}
      >
        <div className=" flex justify-between items-center">
          <Link href={"/"}>
            <a>
              <Image
                src="/assets/images/MOODLIFLY.png"
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
          </div>
        </div>
      </nav>

      <nav className="md:hidden block">
        <div className="flex justify-between py-6 px-6 text-black">
          <Link href={"/"}>
            <a>
              <Image
                src="/assets/images/MOODLIFLY.png"
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
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
