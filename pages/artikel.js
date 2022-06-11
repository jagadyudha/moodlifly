import React from "react";
import Image from "next/image";

const Artikel = () => {
  return (
    <div className="container mx-auto justify-start px-20">
      <div className="rounded-md border border-black border-opacity-20 overflow-hidden w-72">
        <Image
          className=" w-full"
          src="/assets/images/SeparationAnxiety.jpg"
          alt="Separation "
          width={479}
          height={455}
        />
        <div className="px-6 py-4">
          <h1 className=" font-semibold text-sm mb-2 text-gray-800">
            Tak Hanya Anak, Separation Anxiety Juga Terjadi pada Orang Dewasa
          </h1>
          <p className="mt-5 text-xs text-gray-600">
            Umumnya separation anxiety akan terjadi pada anak bayi hingga usia
            tiga tahun. Fase tersebut pun wajar terjadi dalam masa pertumbuhan
            anak. Namun ternyata, fase satu inipun juga bisa terjadi pada orang
            dewasa, lho
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
