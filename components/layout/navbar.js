import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const dataLink = [
  { name: "Tes Kecemasan", href: "/tes-kecemasan" },
  { name: "Tipe Kecemasan", href: "/tipe-kecemasan" },
  { name: "Relaksasi", href: "/relaksasi" },
  { name: "Login", href: "/login" },
];

const Navbar = () => {
  return (
    <nav
      className={`px-20 py-5 border-b border-black border-opacity-10 top-0 sticky bg-white z-10 backdrop-filter backdrop-blur-md bg-opacity-80`}
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
  );
};

export default Navbar;
