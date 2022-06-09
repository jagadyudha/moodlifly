import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

const DataTraining = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.userId}>
          <p>{item.id}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default DataTraining;
