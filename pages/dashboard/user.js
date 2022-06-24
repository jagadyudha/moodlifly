import React from "react";
import { TiPencil } from "react-icons/ti";
import { IoTrashSharp } from "react-icons/io5";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/user`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
const User = ({ data }) => {
  console.log(data);
  return (
    <section>
      <div className=" md:mb-14 mb-5 p-2">
        <h1 className=" font-bold sm:text-6xl text-3xl">Gejala</h1>
      </div>

      <div className="rounded-md ">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Nama</th>
                <th>Email</th>
                <th>Tanggal lahir</th>
                <th>Jenis Kelamin</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <th>{item.id_user}</th>
                  <td>{item.nama}</td>
                  <td>{item.email}</td>
                  <td>{item.tanggal_lahir}</td>
                  <td>{item.jenis_kelamin}</td>
                  <td>
                    <button className=" mr-2 text-2xl">
                      <TiPencil />
                    </button>
                    <button className=" text-2xl text-red-500">
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

export default User;
