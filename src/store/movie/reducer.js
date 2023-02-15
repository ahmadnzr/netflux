import { movieType } from "./type";

const defaultState = {
  isLoading: false,
  data: [],
  error: null,
};

export const batmanSeries = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_SERIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_SERIES: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_SERIES: {
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

export const batmanMovie = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_MOVIE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_MOVIE: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_MOVIE: {
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

export const batmanDetail = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_DETAIL: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_DETAIL: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_DETAIL: {
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

export const searchMovie = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_SEARCH: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_SEARCH: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_SEARCH: {
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

export const recomendation = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_RECOMENDATION: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_RECOMENDATION: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_RECOMENDATION: {
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

export const topMovie = (state = defaultState, action) => {
  switch (action.type) {
    case movieType.SET_LOADING_TOP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case movieType.POPULATE_DATA_TOP: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case movieType.SET_ERROR_TOP: {
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
