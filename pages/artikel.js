import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/artikel`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Artikel = ({ data }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-6xl mx-auto content-center ">
      {data.map((item) => (
        <div id={item.id} key={item.id}>
          <a href={item.artikel} target="_blank" rel="noopener noreferrer">
            <div className="rounded-md border border-black border-opacity-20 ">
              <img
                className=" w-full h-64 hover:opacity-60"
                src={item.gambar}
              />
              <div className="px-6 py-4">
                <h1 className=" font-bold text-xl mb-2 text-gray-800">
                  {item.judul}
                </h1>
                <p className="mt-5 text-gray-600">{item.deskripsi}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Artikel;
