import { combineReducers } from "redux";
import shift from "./shift";
import movies from "./movies";

export default combineReducers({
    shift,
    movies
})