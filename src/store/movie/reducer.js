import { movieType } from "./type";

const defaultState = {
  isLoading: false,
  data: [],
  error: null,
};

const movieReducer = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR: {
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

export default movieReducer;
