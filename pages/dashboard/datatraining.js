import React from "react";
import { TiPencil } from "react-icons/ti";
import { IoTrashSharp } from "react-icons/io5";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/datatraining`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const DataTraining = ({ data }) => {
  const gejala = [];

  for (let i = 1; i < 49; i++) {
    gejala.push("G" + i);
  }

  return (
    <section>
      <div className=" md:mb-14 mb-5 p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl">Data Training</h1>
      </div>

      <div className="rounded-md ">
        <div className="overflow-x-auto">
          <table className="table w-full mb-32">
            <thead>
              <tr>
                <th>Id</th>
                {gejala.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item}>
                  <td>{item.id}</td>
                  {gejala.map((g, index) => (
                    <td key={index}>{item[g]}</td>
                  ))}
                  <td>
                    <button className=" mr-2 text-2xl btn btn-primary text-white">
                      <TiPencil />
                    </button>
                    <button className=" text-2xl text-white btn btn-error">
                      <IoTrashSharp />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataTraining;
