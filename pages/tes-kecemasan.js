import RadioButton from "@/components/radio-button";
import React from "react";

const TesKecemasan = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <main className="mx-auto">
      <div className="text-center md:mb-20 mb-12 max-w-lg mx-auto">
        <h1 className=" font-bold sm:text-5xl text-3xl text-center my-3">
          Tes Kecemasan
        </h1>
        <p className="text-gray-700">
          Cobalah untuk tidak memilih jawaban Netral
        </p>
      </div>
      <RadioButton onChange={handleChange} />
    </main>
  );
};

export default TesKecemasan;
