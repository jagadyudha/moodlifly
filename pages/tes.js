import React from "react";

const Tes = () => {
  const [jagad, setJagad] = React.useState(false);
  return (
    <div>
      <p>{jagad ? "tutut" : "jagad"}</p>
      <button onClick={() => setJagad(!jagad)}>ghghgd</button>
    </div>
  );
};

export default Tes;
