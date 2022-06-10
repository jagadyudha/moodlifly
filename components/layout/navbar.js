import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { motion } from "framer-motion";

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
  return (
    <>
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
            <Link href={"/login"}>
              <a>
                <button className="text-primary rounded-full border border-primary sm:px-5 sm:py-1 py-2 px-4 hover:opacity-50 transition duration-300">
                  Masuk
                </button>
              </a>
            </Link>
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
            <Link href={"/login"}>
              <a>
                <button className="text-primary my-10 rounded-full border border-primary w-full py-3 hover:opacity-50 transition duration-300">
                  Masuk
                </button>
              </a>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
