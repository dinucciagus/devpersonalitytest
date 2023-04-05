import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import teamImage from "../assets/teamimage.jpg";
import Footer from "./footer";

function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-between h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${teamImage})` }}
    >
      <div className="flex-row items-center max-w-xl p-8 pb-6 mx-2 mt-16 bg-white shadow-lg md:mx-4 rounded-3xl shadow-pink1">
        <img src={logo} alt="Logo" className="mx-auto mb-8 w-36 h-36" />
        <p className="mb-4 text-lg font-bold text-center sm:text-2xl text-darkblue1">
          Answer 10 questions and discover which role in the web development
          suits you best!
        </p>
        <div className="flex justify-center w-full ">
          <Link to="/test" className="mx:auto">
            <button className="w-40 h-16 px-4 py-2 mt-6 text-lg font-bold text-white transition duration-200 transform rounded-full animate-bounce bg-pink1 hover:scale-110 ">
              Let's go!
            </button>
          </Link>
        </div>
      </div>
      <Footer color="white" text="darkblue1" />
    </div>
  );
}

export default LandingPage;
