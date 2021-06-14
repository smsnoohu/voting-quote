import { ACTION_TYPES } from "./actions";

export const initalState = {
  isLoading: false,
  quotes: [],
  error: [],
  messages: {
    success: "",
    error: "",
  },
  totalCount: 0,
  searchTerms: {
    search: "",
    resultCount: 10,
  },
  darkTheme: false,
  status: null,
};

export const voteReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ACTION_TYPES.SET_QUOTE:
      return {
        ...state,
        quotes: action.payload,
        isLoading: false,
      };
    case ACTION_TYPES.UPDATE_TOTAL_VOTES:
      return {
        ...state,
        totalCount: action.payload,
      };
    case ACTION_TYPES.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case ACTION_TYPES.UPDATE_SEARCH:
      return {
        ...state,
        searchTerms: {
          ...state.searchTerms,
          ...action.payload,
        },
      };
    case ACTION_TYPES.TOGGLE_THEME:
      return {
        ...state,
        darkTheme: action.payload,
      };
    default:
      throw new Error(
        `Unknown action type received.
            Valid actions are
            * FETCH_INIT
            * FETCH_ERROR
            * SET_QUOTE
            * UPDATE_TOTAL_VOTES
            * SET_STATUS
            * UPDATE_SEARCH
            * TOGGLE_THEME
        `
      );
  }
};
