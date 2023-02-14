import { useSelector } from "react-redux";
import { userType } from "./type";

export const addUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: userType.SET_LOADING_USER });
    dispatch({ type: userType.ADD_USER_DATA, payload: user });
  } catch (err) {
    dispatch({ type: userType.SET_ERROR_USER, payload: err.message });
  }
};
