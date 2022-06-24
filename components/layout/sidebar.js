import React from "react";
import Link from "next/link";
import { IoBagCheckSharp, IoLogOutOutline } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaBook, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const data = [
  {
    title: "Gejala",
    icon: <IoBagCheckSharp />,
    href: "/dashboard/gejala",
  },
  {
    title: "Penyakit",
    icon: <AiFillMedicineBox />,
    href: "/dashboard/penyakit",
  },
  {
    title: "Data Training",
    icon: <FaBook />,
    href: "/dashboard/datatraining",
  },
  {
    title: "User",
    icon: <FaUserCircle />,
    href: "/dashboard/user",
  },
  {
    title: "Logout",
    icon: <IoLogOutOutline />,
    href: "/dashboard/",
  },
];

const Sidebar = ({ children }) => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-gray-100">
          <div className="w-full h-full p-5 md:p-10"> {children}</div>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className=" menu p-4 overflow-y-auto w-80 text-base-content border ">
            <div className=" flex justify-between  mb-10 mt-2 ">
              <Image
                src="/assets/images/MOODLIFY.png"
                alt="Social"
                width={133 / 1.2}
                height={29 / 1.2}
                objectFit="contain"
              />
              <IoCloseOutline className=" text-2xl " />
            </div>
            {data.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>
                  <a>
                    {item.icon}
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
