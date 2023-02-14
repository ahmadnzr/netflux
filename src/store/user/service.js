import { userType } from "./type";

export const addUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: userType.SET_LOADING_USER });
    dispatch({ type: userType.ADD_USER_DATA, payload: user });
  } catch (err) {
    dispatch({ type: userType.SET_ERROR_USER, payload: err.message });
  }
};

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: userType.SET_LOADING_LOGIN });
    dispatch({ type: userType.ADD_USER_LOGIN, payload: user });
  } catch (err) {
    dispatch({ type: userType.SET_ERROR_LOGIN, payload: err.message });
  }
};


export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: userType.SET_LOADING_LOGIN });
    dispatch({ type: userType.ADD_USER_LOGOUT });
  } catch (err) {
    dispatch({ type: userType.SET_ERROR_LOGIN, payload: err.message });
  }
};
