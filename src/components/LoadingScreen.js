import React from "react";
import Spinner from "../Assets/Spinner.gif";

function LoadingScreen() {
  return (
    <div className="loading-screen-wrapper d-flex justify-content-center align-items-center">
      <img src={Spinner} alt="" className="loading-gif" />
    </div>
  );
}

export default LoadingScreen;
