import { combineReducers } from "redux";
import usersBookReducer from "./usersBookReducer"

export default combineReducers({
  usersBook: usersBookReducer
})