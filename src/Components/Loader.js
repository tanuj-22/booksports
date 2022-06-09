import React from "react";

const Loader = () => {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ transform: "translate(10px,10px)" }}
      >
        <p className="placeholder-glow">
          <span className="placeholder w-75"></span>
          <span className="placeholder w-75"></span>

          <span className="placeholder col-6"></span>
        </p>
      </div>
    </>
  );
};

export default Loader;
