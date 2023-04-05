import React from "react";
import logo from "../assets/logoinv.png";

const Spinner = () => {
  return (
    <div className="">
      <img
        src={logo}
        className="w-32 h-32 mx-auto opacity-100 animate-bounce animate-spin-slow lg:h-60 lg:w-60 "
      />
    </div>
  );
};

export default Spinner;
