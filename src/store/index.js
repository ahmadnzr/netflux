import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

/** file reducers */
import movieReducer from "./movie/reducer";

export default createStore(
  combineReducers({ movie: movieReducer }),
  applyMiddleware(thunk)
);
