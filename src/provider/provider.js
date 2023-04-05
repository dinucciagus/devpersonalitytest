import rootReducer from "../reducer/reducer.js";
import { useReducer } from "react";
import React from "react";
import { MyContext } from "../context/context";
import { initialState } from "../reducer/reducer.js";
import { compareArrays } from "../actions/compareArrays";
// const arr = new Array(10);
// export const storedState = () => {
//   const storedQuestions = JSON.parse(localStorage.getItem("questions"));
//   const storedRoles = JSON.parse(localStorage.getItem("roles"));
//   const storedResult = JSON.parse(localStorage.getItem("result"));
//   return storedQuestions != undefined &&
//     storedRoles != undefined &&
//     storedResult != {}
//     ? {
//         questions: storedQuestions,
//         roles: storedRoles,
//         result: storedResult,
//         score: arr,
//       }
//     : initialState;
// };

export const ADD_SCORE = "ADD_SCORE";
export const ADD_RESULT = "ADD_RESULT";
export const CLEAN_STATE = "CLEAN_STATE";
export const ADD_ROLES = "ADD_ROLES";
export const ADD_QUESTIONS = "ADD_QUESTIONS";

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  function addQuestions() {
    try {
      fetch("https://backendtest-production-3af3.up.railway.app/questions")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: ADD_QUESTIONS,
            payload: data,
          });
        });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  function addRoles() {
    try {
      fetch("https://backendtest-production-3af3.up.railway.app/roles")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: ADD_ROLES,
            payload: data,
          });
        });
    } catch (error) {
      console.log({ message: error.message });
    }
  }

  function cleanState() {
    dispatch({
      type: CLEAN_STATE,
      payload: initialState,
    });
  }

  function addScore(payload) {
    dispatch({
      type: ADD_SCORE,
      payload: payload,
    });
  }

  function addResult({ score, roles }) {
    console.log("score", score);
    console.log("roles", roles);
    const profile = compareArrays(score);
    const found = roles.find((x) => x.name === profile);
    dispatch({
      type: ADD_RESULT,
      payload: found,
    });
  }

  return (
    <MyContext.Provider
      value={{
        ...state,
        addQuestions,
        addResult,
        addRoles,
        addScore,
        cleanState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
