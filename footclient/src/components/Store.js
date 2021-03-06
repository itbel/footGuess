import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  jwtToken: "",
  isAuthenticated: false,
  user: undefined,
  userid: undefined,
  selectedTourName: undefined,
  selectedTourId: undefined,
  joinedTournaments: [],
  allTournaments: [],
  ownedTournaments: [],
  latestRound: undefined,
  teams: [],
  matches: [],
  results: [],
  guesses: [],
  isUpdating: false,
  players: [],
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
