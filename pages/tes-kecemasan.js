import RadioButton from "@/components/radio-button";
import React from "react";
import { IoWarningOutline } from "react-icons/io5";

export async function getServerSideProps() {
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
  const [result, setResult] = React.useState(null);

  console.log(result);

  //check bahwa data terisi semua
  const isComplete = () => {
    if (userInput) {
      if (Object.keys(userInput).length >= 49 - 1) {
        return true;
      } else {
        return false;
      }
    }
  };

  //on submit
  const handleSubmit = async (e) => {
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
      setResult(result);
    }
    // e.preventDefault();
  };

  return (
    <>
      <main className="mx-auto">
        <div className="text-center md:mb-20 mb-12 max-w-lg mx-auto">
          <h1 className=" font-bold sm:text-5xl text-3xl text-center my-3">
            Tes Kecemasan
          </h1>
          <p className="text-gray-700">
            Cobalah untuk tidak memilih jawaban Netral
          </p>
        </div>

        <div className="">
          {data.map((item) => (
            <div key={item.kd_gejala} className="my-20">
              <h3 className="my-4 md:text-lg text-base max-w-2xl mx-auto text-center font-medium">
                {item.nama}
              </h3>
              <RadioButton
                onChange={(e) => {
                  setUserInput({
                    [`G${item.kd_gejala}`]: e.target.value,
                    ...userInput,
                  });
                }}
              />
            </div>
          ))}

          <div className="flex justify-center ">
            {isComplete() ? (
              <button
                className="bg-primary rounded-full text-white  py-2 sm:py-4 px-4 sm:px-8 mr-3 hover:opacity-80 transition-all duration-300"
                onClick={handleSubmit}
              >
                Cek Hasil
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
    </>
  );
};

export default TesKecemasan;
