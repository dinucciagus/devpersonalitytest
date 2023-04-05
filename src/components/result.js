import React, { useState, useEffect, useCallback, useContext } from "react";
import Spinner from "./spinner";
import Profile from "./profile";
import Footer from "./footer";
import { Link } from "react-router-dom";
import { MyContext } from "../context/context";

export default function Result() {
  const { score, result, addResult, roles } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);
  const updateLoadingState = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateLoadingState();
    }, 2500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    addResult({ score: score, roles: roles });
  }, []);

  // useEffect(() => {
  //   const jsonString = JSON.stringify(state);
  //   localStorage.setItem("state", jsonString);
  // }, [state.score]);

  return (
    <div className="flex flex-col justify-between w-screen h-full min-h-screen m-0 bg-gradient-to-br from-pink1 to-violet1">
      {score[0] === 0 || !roles[0] ? (
        <div className="flex flex-col items-center h-full p-4 m-auto bg-white shadow-md rounded-3xl shadow-darkblue1">
          <Link to="/">
            <button className="w-full h-full px-2 pt-3 pb-6 text-2xl font-bold text-pink1 ">
              Answer the questions to see your result!
            </button>
          </Link>
        </div>
      ) : isLoading || !result.name ? (
        <div className="flex flex-col items-center pt-12 m-0 ">
          <Spinner />
          <div className="items-center p-12 mx-2 mt-12 text-2xl font-semibold text-center bg-white w-fit md:block text-darkblue1 rounded-xl">
            Please hold on there, we are evaluating your answers!
          </div>
        </div>
      ) : (
        <Profile
          name={result.name}
          description={result.description}
          image={result.image}
        />
      )}
      <Footer color="" text={"white"} />
      {console.log(result)}
    </div>
  );
}
