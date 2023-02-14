import { userType } from "./type";

const defaultState = {
  isLoading: false,
  data: [
    {
      userId: "nizar123",
      email: "nizar@mail.com",
      password: "nizar123",
    },
  ],
  error: null,
};

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case userType.SET_LOADING_USER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case userType.ADD_USER_DATA: {
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };
    }
    case userType.SET_ERROR_USER: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const logginUser = (
  state = { isLoading: false, data: null, error: null },
  action
) => {
  switch (action.type) {
    case userType.SET_LOADING_LOGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case userType.ADD_USER_LOGIN: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case userType.ADD_USER_LOGOUT: {
      return {
        ...state,
        data: null,
        isLoading: false,
      };
    }
    case userType.SET_ERROR_LOGIN: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
