import React from "react";

const LoaderPage = () => {
  return (
    <div className="d-flex justify-content-center align-content-center " style={{ height: "100vh",marginTop:"40vh" }}>
      <div className="spinner-grow " role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoaderPage;
