import React from "react";
import Image from "next/image";
import { FaPercentage } from "react-icons/fa";
import { IoAlarmSharp, IoPauseCircleSharp } from "react-icons/io5";

const data = [
  {
    icon: <FaPercentage />,
    name: "Tingkat akurasi",
    desc: "Nikmati tingkat akurasi hasil diagnosamu di atas 90% ",
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
      <section className="lg:flex flex-none md:flex-row-reverse items-center">
        <div className="flex justify-center">
          <Image
            src="/assets/images/Social.png"
            alt="Social"
            width={479}
            height={455}
          />
        </div>
        <div className="lg:mr-5 mr-0 text-center lg:text-left">
          <div className="lg:max-w-xl max-w-2xl mx-auto">
            <h1 className=" sm:text-5xl text-3xl font-bold ">
              Tes Gangguan Kecemasan Gratis, Mudah, dan Efisien
            </h1>
            <p className="my-4 text-gray-800 ">
              Moodlifly merupakan tes gangguan kecemasan gratis untuk diagnosa
              awal sebelum konsultasi ke psikolog klinis
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mt-8">
            <button className="bg-primary rounded-full text-white  py-2 sm:py-4 px-4 sm:px-8 mr-3 hover:opacity-80 transition-all duration-300">
              Memulai
            </button>
            <button className="text-primary rounded-full border border-primary sm:px-8 sm:py-4 py-2 px-4 hover:bg-primary hover:text-white transition duration-300">
              Cara Pakai
            </button>
          </div>
        </div>
      </section>

      {/* Definisikan Dirimu Section */}
      <section className=" text-center  my-14 sm:my-20">
        <div className="max-w-xl  mx-auto">
          <h1 className=" text-2xl md:text-5xl font-medium  ">
            Definisikan Dirimu
          </h1>
          <p className="text-gray-800 my-4">
            Fitur khusus yang hanya dibuat untuk mendefinisikan dirimu. Dengan
            fitur kami anda dapat melakukan tes secara gratis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-9 content-center max-w-5xl mx-auto my-10 md:my-20">
          {data.map((item, index) => (
            <div key={index}>
              <div className=" bg-secondary px-6 py-6 text-primary rounded-[25px] w-16 mx-auto ">
                {item.icon}
              </div>
              <div className=" w-52 mx-auto">
                <h3 className="font-medium text-lg mt-2">{item.name}</h3>
                <p className="text-gray-800 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
