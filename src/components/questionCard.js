import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./progressbar";

export default function QuestionCard({
  question,
  index,
  back,
  next,
  finish,
  select,
  point,
}) {
  return (
    <div className="max-w-2xl px-2 py-4 mx-2 my-auto bg-white shadow-xl lg:mx-auto md:px-8 drop-shadow-2xl rounded-xl ">
      <ProgressBar progress={index} />
      <div className="px-4 pt-8 pb-2 lg:px-8">
        <div className="mb-6 text-3xl font-semibold tracking-wide text-center md:text-2xl text-darkblue1">
          {question.title}
        </div>
        <div className="flex flex-col mt-4">
          {question.options.map((e, index) => (
            <button
              key={index}
              onClick={() => select(e.score)}
              className={`inline-flex  bg-gray1 items-center justify-center px-4 py-2 mt-8 lg:mt-2 shadow-darkblue1 border-transparent text-xl  font-medium rounded-md shadow-sm text-darkblue1 hover:bg-pink1 hover:text-white focus:outline-none focus:ring-2  focus:ring-darkblue1 focus:bg-pink1 focus:text-white mb-2`}
            >
              {e.title}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {index > 0 ? (
            <button
              className="flex p-1 text-lg scale-100 hover:scale-125 focus:outline-none text-darkblue1 hover:text-pink1 "
              onClick={() => back()}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button
            className={
              "p-1  scale-100 text-lg hover:scale-125 focus:outline-none flex text-darkblue1  hover:text-pink1 "
            }
            onClick={index < 9 ? () => next() : () => finish()}
            disabled={point != 0 ? false : true}
          >
            {index < 9 ? "Next" : "Finish Test!"}
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
