import { combineReducers } from "redux";
import filmsReducer from "./slice/starWarsSlice";
import filmReducer from "./slice/filmSlice";

const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer
});

export default rootReducer;
