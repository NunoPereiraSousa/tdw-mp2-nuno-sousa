import { combineReducers } from "redux";
import filmsReducer from "./slice/starWarsSlice";
import filmReducer from "./slice/filmSlice";
import planetsReducer from "./slice/planetSlice";

const rootReducer = combineReducers({
  films: filmsReducer,
  film: filmReducer,
  planets: planetsReducer,
});

export default rootReducer;
