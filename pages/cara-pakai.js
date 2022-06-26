import React from "react";
import Image from "next/image";

const CaraPakai = () => {
  return (
    <section>
      <div className="text-center md:mb-20 mb-12 max-w-lg mx-auto">
        <h1 className=" font-bold sm:text-5xl text-3xl text-center my-3">
          Cara Pakai
        </h1>
        <p className="text-gray-700">
          Langkah-langkah untuk menggunakan Moodlify
        </p>
      </div>

      <div className=" max-w-xl mx-auto mb-96">
        <h2 className=" font-bold text-xl">1. Login</h2>
        <p className=" ml-6 max-w-xl my-3">
          Login terlebih dahulu agar bisa melakukan tes kecemasan . Jika tidak
          memiliki akun, silahkan registrasi terlebih dahulu dan jangan lupa
          untuk verifikasi email.
        </p>
        <div className="ml-6 max-w-xs border-2 mt-2">
          <Image
            src="/assets/images/masuk.png"
            alt="berpisah"
            width={300 * 1.2}
            height={300 * 1.2}
            objectFit="contain"
          />
        </div>

        <h2 className=" font-bold text-xl mt-10">2. Tes Kecemasan</h2>
        <p className=" ml-6 max-w-xl my-3">
          Klik tombol tes kecemasan lalu isi kuisoner sampai selesai
        </p>
        <div className="ml-6 max-w-sm border-2">
          <Image
            src="/assets/images/tes.png"
            alt="berpisah"
            width={380}
            height={180}
            objectFit="contain"
          />
        </div>

        <h2 className=" font-bold text-xl mt-10">3. Hasil</h2>
        <p className=" ml-6 max-w-xl my-3">
          Setelah hasil tes kecemasan keluar, anda bisa mengecek penjelasan
          tentang penyakit yang anda alami di tombol Cek penjelasannya disini
        </p>
        <div className="ml-6 max-w-xs border-2 ">
          <Image
            src="/assets/images/hasil.png"
            alt="berpisah"
            width={300 * 1.2}
            height={300 * 1.2}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CaraPakai;
