import axios from "axios";
import { movieType } from "./type";

const URL = process.env.REACT_APP_SERVER_URL;

export const getDetailed =
  (id = "tt1877830") =>
  async (dispatch) => {
    try {
      dispatch({ type: movieType.SET_LOADING_DETAIL });
      const res = await axios({ method: "get", url: URL + "i=" + id });
      dispatch({ type: movieType.POPULATE_DATA_DETAIL, payload: res.data });
    } catch (err) {
      dispatch({ type: movieType.SET_ERROR_DETAIL, payload: err.message });
    }
  };

export const getMovieByTitle = (search) => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING_SEARCH });
    const res = await axios({ method: "get", url: URL + "s=" + search });
    dispatch({ type: movieType.POPULATE_DATA_SEARCH, payload: res.data });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR_SEARCH, payload: err.message });
  }
};

export const getBatmanMovie = () => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING_MOVIE });
    const res = await axios({
      method: "get",
      url: URL + "s=batman&type=movie",
    });
    dispatch({ type: movieType.POPULATE_DATA_MOVIE, payload: res.data });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR, payload: err.message });
  }
};

export const getBatmanSeries = () => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING_SERIES });
    const res = await axios({
      method: "get",
      url: URL + "s=batman&type=series",
    });
    dispatch({ type: movieType.POPULATE_DATA_SERIES, payload: res.data });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR_SERIES, payload: err.message });
  }
};

export const getRecomendation = () => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING_RECOMENDATION });
    const res = await axios({
      method: "get",
      url: URL + "s=batman",
    });
    const data = res.data.Search.filter((mv) => mv.Poster !== "N/A").slice(
      1,
      5
    );
    dispatch({
      type: movieType.POPULATE_DATA_RECOMENDATION,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR_RECOMENDATION, payload: err.message });
  }
};

export const getTopMovie = () => async (dispatch) => {
  try {
    dispatch({ type: movieType.SET_LOADING_TOP });
    const res = await axios({
      method: "get",
      url: URL + "s=batman&=type=movie?page=2",
    });
    dispatch({
      type: movieType.POPULATE_DATA_TOP,
      payload: res.data.Search,
    });
  } catch (err) {
    dispatch({ type: movieType.SET_ERROR_TOP, payload: err.message });
  }
};
