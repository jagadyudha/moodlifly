import RadioButton from "@/components/radio-button";
import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/gejala`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const TesKecemasan = ({ data }) => {
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

      <div>
        {data.map((item) => (
          <div key={item.kd_gejala}>
            <h3>{item.nama}</h3>
            <RadioButton onChange={handleChange} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default TesKecemasan;
