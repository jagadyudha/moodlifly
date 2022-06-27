import React from "react";
import { TiPencil } from "react-icons/ti";
import { IoTrashSharp } from "react-icons/io5";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/penyakit`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
const Penyakit = ({ data }) => {
  return (
    <section>
      <div className=" md:mb-14 mb-5 p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl">Penyakit</h1>
      </div>

      <div className="rounded-md ">
        <div className="overflow-x-auto">
          <table className="table w-full mb-32">
            <thead>
              <tr>
                <th></th>
                <th>Kode Penyakit</th>
                <th>Penyakit</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr id={item.kd_penyakit} key={item.kd_penyakit}>
                  <th></th>
                  <td>{item.kd_penyakit}</td>
                  <td>{item.nama}</td>
                  <td>
                    <button className=" mr-2 text-2xl btn btn-primary text-white">
                      <TiPencil />
                    </button>
                    <button className="text-2xl text-white btn btn-error">
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

export default Penyakit;
