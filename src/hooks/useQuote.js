import { useReducer, useEffect } from "react";

import { initalState, voteReducer } from "../reducers/reducers";
import { ACTION_TYPES } from "../reducers/actions";
import useDebounce from "./useDebounce";
import { STATUS, VOTE } from "../constant/constant";

const useQuote = () => {
  const [state, dispatch] = useReducer(voteReducer, initalState);

  const {
    quotes,
    searchTerms: { search, resultCount },
    darkTheme,
  } = state;

  //   Fetch Quotes
  const fetchQuote = async () => {
    const endPoint = search ? "search/" + search : resultCount;
    const API =
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes/" + endPoint;

    dispatch({ type: ACTION_TYPES.FETCH_INIT });

    try {
      const response = await fetch(API);
      const quote = await response.json();
      let quotesArr = [];
      quote.forEach((item, index) => {
        const quoteObj = {
          id: "quote_" + index + 1,
          quote: item,
          vote: 0,
        };
        quotesArr = [...quotesArr, quoteObj];
      });
      dispatch({ type: ACTION_TYPES.SET_QUOTE, payload: quotesArr });
      dispatch({
        type: ACTION_TYPES.SET_STATUS,
        payload: quotesArr.length > 0 ? STATUS.SUCCESS : STATUS.EMPTY,
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: ACTION_TYPES.SET_QUOTE, payload: [] });
      dispatch({ type: ACTION_TYPES.SET_STATUS, payload: STATUS.ERROR });
    }
  };

  const debouncedSearchTerm = useDebounce(search, 500);
  const debouncedResultCount = useDebounce(resultCount, 500);

  useEffect(() => {
    if (debouncedSearchTerm || debouncedResultCount) {
      fetchQuote();
    }
  }, [debouncedSearchTerm, debouncedResultCount]);

  const castVote = (id, type) => {
    const updatedQuotes = quotes.map((quote) =>
      quote.id === id
        ? { ...quote, vote: type === VOTE.UP ? quote.vote + 1 : quote.vote - 1 }
        : quote
    );

    dispatch({ type: ACTION_TYPES.SET_QUOTE, payload: updatedQuotes });
  };

  useEffect(() => {
    function countTotal() {
      const sum =
        quotes.length &&
        quotes
          .map((o) => o.vote)
          .reduce((a, c) => {
            return (a < 0 ? a * -1 : a) + (c < 0 ? c * -1 : c);
          });
      console.log(sum);
      dispatch({ type: ACTION_TYPES.UPDATE_TOTAL_VOTES, payload: sum });
    }
    countTotal();
  }, [quotes]);

  const updateSearchTerm = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: ACTION_TYPES.UPDATE_SEARCH,
      payload: { search: "", [name]: value },
    });
  };

  const toggleTheme = (e) => {
    console.log(e);
    dispatch({ type: ACTION_TYPES.TOGGLE_THEME, payload: e.target.checked });
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("darkTheme");

      return function cleanup() {
        document.body.classList.remove("darkTheme");
      };
    }
  }, [darkTheme]);

  const value = {
    quoteState: { ...state },
    quoteActions: { updateSearchTerm, castVote, toggleTheme },
  };

  return value;
};

export default useQuote;
