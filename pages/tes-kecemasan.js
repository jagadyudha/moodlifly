import RadioButton from "@/components/radio-button";
import React from "react";

const TesKecemasan = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <main className="mx-auto">
      <RadioButton onChange={handleChange} />
    </main>
  );
};

export default TesKecemasan;
