import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";

/** file reducers */
import {
  batmanSeries,
  batmanMovie,
  batmanDetail,
  searchMovie,
} from "./movie/reducer";
import { userReducer } from "./user/reducer";

export default createStore(
  combineReducers({
    movie: batmanMovie,
    series: batmanSeries,
    detail: batmanDetail,
    search: searchMovie,
    user: userReducer,
  }),
  applyMiddleware(thunk)
);
