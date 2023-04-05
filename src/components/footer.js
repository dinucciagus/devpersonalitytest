import React from "react";
import Avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";
import Linkedin from "./linkedIn";
import Github from "./github";

const Footer = ({ color, text }) => {
  return (
    <div
      className={` w-full  bg-${color} bg-opacity-50 flex flex-col lg:flex-row justify-between items-center px-4 py-2`}
    >
      <div className="flex items-center space-x-4">
        <img
          src={Avatar}
          alt="Agustina Di Nucci avatar"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p
            className={`text-${text} lg:text-xl text-md font-semibold text-center`}
          >
            Agustina Di Nucci
          </p>
          <p
            className={`text-${text} lg:text-xl text-md font-semibold text-center`}
          >
            - Full Stack developer -{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Linkedin text={text} />
        <Github text={text} />
      </div>
    </div>
  );
};

export default Footer;
