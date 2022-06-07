import RadioButton from "@/components/radio-button";
import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.url}/api/gejala`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const TesKecemasan = ({ data }) => {
  const [userInput, setUserInput] = React.useState();
  const isComplete = () => {
    if (userInput) {
      if (Object.keys(userInput).length >= 49 - 1) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleSubmit = (e) => {
    console.log(userInput);
    e.preventDefault();
  };

  return (
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
                  ...userInput,
                  [`G${item.kd_gejala}`]: parseInt(e.target.value),
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
            <p>anda belum mengisi form</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default TesKecemasan;
