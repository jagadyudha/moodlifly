import React from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "context/auth";
import toast from "react-hot-toast";

export async function getServerSideProps() {
  // Fetch data from external API
  const user = supabase.auth.user();
  const { data, error } = await supabase.from("hasil").select(
    `
    *,
    kd_penyakit (
      *
    )
  `
  );

  // Pass data to the page via props
  return { props: { data } };
}

const Profil = ({ data }) => {
  const { user } = useAuth();

  const router = useRouter();

  if (!user) {
    router.push("/");
  }

  return (
    <>
      {user && (
        <section>
          <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2">
            <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4 capitalize">
              {`${user.user_metadata.nama_depan} ${user.user_metadata.nama_belakang}`}
            </h1>
            <div className="flex justify-center ">
              <p className="text-gray-700 mr-2">{user.email}</p>
              <Link href="/">
                <button
                  onClick={async () => {
                    router.push("/");
                    await supabase.auth.signOut();
                    toast.success("Berhasil Keluar");
                  }}
                  className=" text-primary hover:underline font-bold"
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>

          <div className=" max-w-4xl mx-auto mb-72">
            {data
              .filter((item) => item.email === user.email)
              .map((item, index) => (
                <div
                  key={index}
                  className="py-6 px-10 mb-10 rounded-xl border border-black border-opacity-20 md:flex md:justify-between  "
                >
                  <div className=" items-center">
                    <h2 className=" text-md font-bold mb-1">
                      {item.kd_penyakit.nama}
                    </h2>
                    <p className=" text-sm">{`${new Date(
                      item.tanggal
                    ).getDate()}-${new Date(
                      item.tanggal
                    ).getMonth()}-${new Date(item.tanggal).getFullYear()}`}</p>
                  </div>

                  <div className=" justify-end flex">
                    {item.kd_penyakit.kd_penyakit !== 0 && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`/tipe-kecemasan#${item.kd_penyakit.kd_penyakit}`}
                      >
                        <button className="btn btn-primary text-white  ">
                          Cek
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Profil;
