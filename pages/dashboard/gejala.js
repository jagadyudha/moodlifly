import React from "react";
import { TiPencil } from "react-icons/ti";
import { IoTrashSharp } from "react-icons/io5";

const Gejala = () => {
  return (
    <section>
      <div className=" md:mb-14 mb-5 p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl">Gejala</h1>
      </div>

      <div className="rounded-md">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Kode Gejala</th>
                <th>Gejala</th>
                <th>Favorite Color</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <button className=" mr-2 text-2xl">
                    <TiPencil />
                  </button>
                  <button className=" text-2xl text-red-500">
                    <IoTrashSharp />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Gejala;
