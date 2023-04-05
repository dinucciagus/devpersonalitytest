import React, { useContext, useEffect, useState } from "react";
import QuestionCard from "./questionCard";
import logo from "../assets/logoinv.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Spinner from "./spinner";

import { MyContext } from "../context/context";

function Test() {
  const { addScore, addResult, cleanState, addQuestions, addRoles } =
    useContext(MyContext);
  const { questions, roles, score, result } = useContext(MyContext);
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [score2, setScore] = useState(score);
  const [point, setpoint] = useState(0);

  useEffect(() => {
    addQuestions();
    addRoles();
  }, []);

  const back = function () {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };
  const next = function () {
    const newscore = score2;
    newscore[currentQ] = point;
    setScore(newscore);
    addScore(score2);
    if (currentQ < questions.length) {
      setCurrentQ(currentQ + 1);
    }
    setpoint(0);
  };

  // useEffect(() => {
  //   const jsonString = JSON.stringify(state);
  //   localStorage.setItem("state", jsonString);
  // }, [result]);

  const finish = function () {
    const newscore = score2;
    newscore[currentQ] = point;
    setScore(newscore);
    addScore(score2);
    // const jsonString = JSON.stringify(state);
    // localStorage.setItem("state", jsonString);
    navigate("/result");
  };

  const select = (props) => {
    setpoint(props);
  };

  return questions.length === 10 ? (
    <div className="flex flex-col justify-between min-h-screen space-y-4 bg-gradient-to-tr from-darkblue1 to-pink1 bg-no-repeat bg-[300%,300%] animate-wave">
      {/* <div className="md:my-12 lg:my-0"> */}
      <div className="flex justify-center w-full">
        <Link to="/">
          <img
            className="object-contain w-24 h-24 mt-4 md:w-40 md:h-40 "
            src={logo}
          />
        </Link>
      </div>
      <QuestionCard
        question={questions[currentQ]}
        index={currentQ}
        back={back}
        next={next}
        finish={finish}
        select={select}
        point={point}
      />
      {/* </div> */}
      <Footer color="" text={"white"} />
    </div>
  ) : (
    <Spinner />
  );
}

export default Test;
