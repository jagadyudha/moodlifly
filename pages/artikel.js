import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/artikel`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const Artikel = ({ data }) => {
  return (
    <main>
      <NextSeo
        title="Artikel - Moodlify"
        description="Beberapa artikel untuk menambah wawasan terkait gangguan kecemasan"
      />
      <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
          Artikel
        </h1>
        <p className="text-gray-700">
          Beberapa artikel untuk menambah wawasan terkait gangguan kecemasan
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 max-w-6xl mx-auto content-center ">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative rounded-md border group border-black border-opacity-20 hover:scale-105 transition-all duration-300"
          >
            <div className="absolute group right-5 top-5 text-black text-xl rounded-lg bg-white p-2">
              <BsBoxArrowUpRight />
            </div>
            <a href={item.artikel} target="_blank" rel="noopener noreferrer">
              <div>
                <img className=" w-full h-64 rounded-md" src={item.gambar} />
                <div className="px-6 py-4">
                  <h3 className=" flex font-bold text-xl mb-2 text-gray-800  group-hover:underline">
                    {item.judul}
                  </h3>
                  <p className="mt-5 text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Artikel;
