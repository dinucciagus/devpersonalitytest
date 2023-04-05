import React from "react";

const ProgressBar = ({ progress }) => {
  const dots = [];

  for (let i = 0; i < 10; i++) {
    const isFilled = i < progress;
    isFilled
      ? dots.push(
          <div
            key={`dot-${i}`}
            className={"h-3 w-3 rounded-full mx-1 md:mx-2 bg-pink1"}
          />
        )
      : dots.push(
          <div
            key={`dot-${i}`}
            className={"h-3 mx-1 md:mx-2 w-3 rounded-full bg-gray1"}
          />
        );
  }

  return <div className="flex items-center justify-center w-full ">{dots}</div>;
};

export default ProgressBar;
