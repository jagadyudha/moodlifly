import RadioButton from "@/components/radio-button";
import React, { useState } from "react";
import { IoWarningOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";
import Modal from "react-modal";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabase";
import { BsBoxArrowUpRight } from "react-icons/bs";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/gejala`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const TesKecemasan = ({ data }) => {
  const [user, setUser] = useState(null);

  //masukkan dari user
  const [userInput, setUserInput] = React.useState({
    jenis_gangguan: 1,
    id: 1,
  });

  //hasil perhitungan naive bayes
  const [result, setResult] = React.useState(false);

  //Loading hasil
  const [loading, setLoading] = React.useState(false);

  //check bahwa data terisi semua
  const isComplete = () => {
    if (userInput) {
      if (Object.keys(userInput).length >= 51) {
        return true;
      } else {
        return false;
      }
    }
  };

  //on submit
  const handleSubmit = async (e) => {
    setLoading(true);
    toast.loading("loading...");
    const headers = new Headers();
    headers.set("Accept", "application/json");
    headers.set("Access-Control-Allow-Credentials", "true");
    headers.set("Access-Control-Allow-Origin", "true");
    headers.set("Content-Type", "application/json");

    //melakukan fetching data ke python flask melalui folder /api/naive
    const response = await fetch("/api/naive", {
      method: "POST",
      headers,
      body: JSON.stringify(userInput),
    });
    const result = await response.json();
    if (result) {
      toast.dismiss();
      toast.success("Successfully!");
      setResult(result);
      setLoading(false);
    }

    e.preventDefault();
  };

  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    overlay: {
      zIndex: 1000,
    },
  };

  const router = useRouter();

  React.useEffect(() => {
    setUser(supabase.auth.user());

    const refresh = async () => {
      await fetch("/api/naive", {
        method: "GET",
      });
    };

    refresh();
  }, []);

  return (
    <>
      {user ? (
        <main className="mx-auto">
          <div className="text-center md:mb-24 mb-12 max-w-2xl mx-auto p-2 ">
            <h1 className=" font-bold sm:text-6xl text-3xl text-center my-4">
              Tes Kecemasan Gratis
            </h1>
            <p className="text-gray-700">
              Jadilah diri sendiri dan jawablah dengan jujur untuk hasil yang
              akurat.
            </p>
          </div>

          <div>
            {data.map((item) => (
              <div
                id={item.kd_gejala}
                key={item.kd_gejala}
                className={`my-20 duration-300 ${
                  item.kd_gejala == Object.keys(userInput).length - 1
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                <h3 className="my-4 text-lg sm:text-xl max-w-2xl mx-auto text-center font-medium">
                  {item.nama}
                </h3>
                <RadioButton
                  onChange={(e) => {
                    setUserInput({
                      ...userInput,
                      [`G${item.kd_gejala}`]: e.target.value,
                    });

                    router.push(`#${item.kd_gejala + 1}`);
                  }}
                />
              </div>
            ))}

            <div className="flex justify-center ">
              {isComplete() ? (
                <button
                  className="bg-primary rounded-full text-white w-full sm:w-fit py-4 sm:py-4 sm:px-8 mr-3 hover:opacity-80 transition-all duration-300 flex justify-center items-center"
                  onClick={handleSubmit}
                >
                  Cek Hasil
                  {loading && (
                    <AiOutlineLoading className="ml-2 text-white text-2xl animate-spin" />
                  )}
                </button>
              ) : (
                <div className="px-6 py-4 my-10 bg-yellow-300 rounded-md bg-opacity-50 max-w-2xl  container">
                  <div className=" flex  font-bold">
                    <IoWarningOutline className=" text-2xl mr-2 " />
                    Warning!
                  </div>
                  <p className=" mt-5"> Anda belom mengisi form</p>
                </div>
              )}
            </div>
          </div>
        </main>
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

      {/* Hasil */}
      {result && (
        <>
          <Modal isOpen={true} style={customStyles}>
            <div className="w-screen mx-auto h-screen grid place-items-center">
              <div className="bg-white mx-5 sm:mx-auto border-black border border-opacity-20 rounded-lg m-5 pb-5 sm:w-1/3 w-[90%]">
                <div className=" flex justify-between mt-5 ml-5 mr-5">
                  <Image
                    src="/assets/images/MOODLIFY.png"
                    alt="Social"
                    width={133 / 1.2}
                    height={29 / 1.2}
                    objectFit="contain"
                  />
                  <button onClick={() => setResult(null)}>
                    <IoCloseOutline className=" text-2xl" />
                  </button>
                </div>
                <p className=" text-xl text-gray-800 text-center mt-8 font-semibold capitalize">
                  {`Hai ${user.user_metadata.nama_depan} ${user.user_metadata.nama_belakang}`}
                </p>
                <div className=" flex justify-center mt-6">
                  <Image
                    src="/assets/images/Social.png"
                    alt="Social"
                    width={479 / 3}
                    height={455 / 3}
                  />
                </div>
                <div className=" text-center  text-gray-800">
                  <p className="  mt-6 "> Anda teridentifikasi : </p>
                  <p className=" my-2 "> {result.nama}</p>
                  {result.kd_penyakit !== 0 && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`/tipe-kecemasan#${result.kd_penyakit}`}
                      className="text-primary hover:underline flex justify-center mt-5"
                    >
                      Cek penjelasannya disini
                      <span className=" ml-2 text-xl">
                        <BsBoxArrowUpRight />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
    </>
  );
};

export default TesKecemasan;
