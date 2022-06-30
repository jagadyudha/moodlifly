import React from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const [user, setUser] = React.useState(null);

  const router = useRouter();

  React.useEffect(() => {
    setUser(supabase.auth.user());
  }, []);

  return (
    <>
      {user ? (
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
                    await supabase.auth.signOut();
                    router.reload();
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
      ) : (
        <div className="alert alert-error mb-96 shadow-lg max-w-3xl mx-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Silahkan login terlebih dahulu</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profil;
