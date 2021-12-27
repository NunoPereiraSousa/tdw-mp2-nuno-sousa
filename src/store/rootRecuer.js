import { combineReducers } from "redux";
import filmsReducer from "./slice/starWarsSlice";
import filmReducer from "./slice/filmSlice";
import planetReducer from "./slice/planetSlice";

const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer,
  planet: planetReducer
});

export default rootReducer;
