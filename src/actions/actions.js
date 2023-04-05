// import { initialState } from "../reducer/reducer.js";
// export const ADD_SCORE = "ADD_SCORE";
// export const ADD_RESULT = "ADD_RESULT";
// export const CLEAN_STATE = "CLEAN_STATE";
// export const ADD_ROLES = "ADD_ROLES";
// export const ADD_QUESTIONS = "ADD_QUESTIONS";

// export function addQuestions(dispatch) {
//   try {
//     return fetch("http://localhost:8080/questions.json")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         dispatch({
//           type: ADD_QUESTIONS,
//           payload: data,
//         });
//       });
//   } catch (error) {
//     console.log({ message: error.message });
//   }
// }

// export function addRoles(dispatch) {
//   try {
//     return fetch("http://localhost:8080/roles.json")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({
//           type: ADD_QUESTIONS,
//           payload: data,
//         });
//       });
//   } catch (error) {
//     console.log({ message: error.message });
//   }
// }

// export function cleanState() {
//   return {
//     type: CLEAN_STATE,
//     payload: initialState,
//   };
// }

// export function addScore(payload) {
//   return {
//     type: ADD_SCORE,
//     payload: payload,
//   };
// }

// export function addResult(payload) {
//   let result = {};
//   const { score, roles } = payload;
//   for (let i = 0; i < roles.length; i++) {
//     if (score === roles[i].score) {
//       return (result = roles[i]);
//     } else return (result = { title: "Inconclusive" });
//   }
//   return {
//     type: ADD_RESULT,
//     payload: result,
//   };
// }

// export function fetch(url, type, dispatch) {
//   try {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         dispatch({
//           type: type,
//           payload: data,
//         });
//       });
//   } catch (error) {
//     console.log({ message: error.message });
//   }
// }
