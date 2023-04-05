import { useContext } from "react";
import {
  ADD_RESULT,
  ADD_SCORE,
  CLEAN_STATE,
  ADD_QUESTIONS,
  ADD_ROLES,
} from "../provider/provider";
const arr = new Array(10);
export const initialState = {
  questions: [],
  roles: [],
  result: {},
  score: arr,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTIONS:
      return { ...state, questions: action.payload.array };
    case ADD_ROLES:
      return { ...state, roles: action.payload.array };
    case CLEAN_STATE:
      return { ...state, result: {}, score: new Array(10) };
    case ADD_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case ADD_RESULT:
      console.log(action.payload);
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
