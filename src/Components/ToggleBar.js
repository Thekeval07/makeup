import React, { useState } from "react";

export default function Toggle() {
  const [data, setdata] = useState(false);
  const demo = () => {
    setdata(!data);
  };
  return (
    <>
      {data ? <div className="add_btn">Toggle</div> : null}

      <button type="button" onClick={demo}>
        Hell sir
      </button>
    </>
  );
}