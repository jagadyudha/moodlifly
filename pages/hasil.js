import React from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

const Hasil = () => {
  return (
    <div className=" bg-white border-black border max-w-xl  mx-auto rounded-lg">
      <div className=" flex justify-between mt-5 ml-5 mr-5">
        <Image
          src="/assets/images/MOODLIFY.png"
          alt="Social"
          width={133 / 1.2}
          height={29 / 1.2}
          objectFit="contain"
        />
        <IoCloseOutline className=" text-2xl" />
      </div>
      <p className=" text-xl text-gray-800 text-center mt-8 font-semibold">
        Hi Tutut Anjarsari
      </p>
      <div className=" flex justify-center mt-6">
        <Image
          src="/assets/images/Social.png"
          alt="Social"
          width={479 / 3}
          height={455 / 3}
        />
      </div>
      <div className=" text-center  text-gray-800">
        <p className="  mt-6 "> Anda teridentifikasi gangguan : </p>
        <p className=" mt-2  mb-16"> Mutisme Selektif </p>
      </div>
    </div>
  );
};

export default Hasil;
