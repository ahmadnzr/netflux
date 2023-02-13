import axios from "axios";
import { movieType } from "./type";

const URL = process.env.REACT_APP_SERVER_URL;

export const getFeatured = () => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING });
    const res = await axios({ method: "get", url: URL + "i=tt0944947" });
    dispatch({ type: movieType.POPULATE_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR, payload: err.message });
  }
};

export const getMovieByTitle = (search) => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING });
    const res = await axios({ method: "get", url: URL + "s=" + search });
    dispatch({ type: movieType.POPULATE_DATA, payload: res.data });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR, payload: err.message });
  }
};
