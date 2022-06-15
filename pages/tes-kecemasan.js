import RadioButton from "@/components/radio-button";
import React from "react";
import { IoWarningOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";
import Modal from "react-modal";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/gejala`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const TesKecemasan = ({ data }) => {
  //masukkan dari user
  const [userInput, setUserInput] = React.useState({
    jenis_gangguan: 1,
    id: 1,
  });

  //hasil perhitungan naive bayes
  const [result, setResult] = React.useState(false);

  //isr
  const [isSSR, setIsSSR] = React.useState(true);

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
    setIsSSR(false);
  }, []);

  return (
    <>
      {!isSSR && <Toaster />}
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

      {/* Hasil */}
      {result && (
        <>
          <Modal isOpen={true} style={customStyles}>
            <div className="w-screen mx-auto h-screen grid place-items-center">
              <div className="bg-white mx-5 sm:mx-auto border-black border border-opacity-20 rounded-lg m-5 sm:w-1/3 w-[90%]">
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
                <p className=" text-xl text-gray-800 text-center mt-8 font-semibold">
                  Hi Tutut Anjarsari
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
                  <p className=" mt-2  mb-16"> {result.nama}</p>
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
