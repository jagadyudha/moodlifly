import React from "react";
import Image from "next/image";
import { FaPercentage } from "react-icons/fa";
import { IoAlarmSharp, IoPauseCircleSharp } from "react-icons/io5";
import Link from "next/link";

const data = [
  {
    icon: <FaPercentage />,
    name: "Tingkat akurasi",
    desc: "Nikmati tingkat akurasi hasil diagnosamu di atas 80% ",
  },
  {
    icon: <IoAlarmSharp />,
    name: "Waktu tes",
    desc: "Memerlukan waktu kurang dari 12 menit",
  },
  {
    icon: <IoPauseCircleSharp />,
    name: "Gratis",
    desc: "Tes ganggauan kecemasan secara gratis dan efisien ",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="lg:flex flex-none md:flex-row-reverse items-center justify-center">
        <title>MOODLIFY - Beranda</title>
        <div className="flex justify-center">
          <Image
            src="/assets/images/Social.png"
            alt="Social"
            width={479}
            height={455}
          />
        </div>
        <div className="lg:mr-8 mr-0 text-center lg:text-left">
          <div className="lg:max-w-xl max-w-2xl mx-auto">
            <h1 className=" sm:text-6xl text-3xl font-bold ">
              Tes Gangguan Kecemasan Gratis, Mudah, dan Efisien
            </h1>
            <p className="my-4 text-gray-800 ">
              Moodlifly merupakan tes gangguan kecemasan gratis untuk diagnosa
              awal sebelum konsultasi ke psikolog klinis
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mt-8">
            <Link href={"/tes-kecemasan"}>
              <a>
                <button className="btn btn-primary text-white mr-4 w-36">
                  Ikuti Tes
                </button>
              </a>
            </Link>
            <Link href={"/cara-pakai"}>
              <a>
                <button className="btn btn-outline btn-primary w-36">
                  Cara Pakai
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Definisikan Dirimu Section */}
      <section className=" text-center  my-14 sm:my-20 ">
        <div className="max-w-xl  mx-auto">
          <h1 className=" text-2xl md:text-5xl font-bold  ">
            Definisikan Dirimu
          </h1>
          <p className="text-gray-500 my-4">
            Fitur khusus yang hanya dibuat untuk mendefinisikan dirimu. Dengan
            fitur kami anda dapat melakukan tes secara gratis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-9 content-center max-w-6xl mx-auto my-10 md:my-20">
          {data.map((item, index) => (
            <div
              className="border border-black border-opacity-10 py-10 rounded-lg"
              key={index}
            >
              <div className="text-2xl mx-auto flex justify-center">
                <div className="text-primary bg-secondary rounded-[25px]  p-6 justify-self-start">
                  {item.icon}
                </div>
              </div>
              <div className=" w-52 mx-auto">
                <h3 className="font-medium text-md my-5 tracking-widest">
                  {item.name.toLocaleUpperCase()}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
