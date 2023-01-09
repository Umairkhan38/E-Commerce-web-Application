import React, { createContext, useContext, useReducer } from "react";

//Prepare the Data Layer
export const StateContext = createContext();


//wrap our app and provide a data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};


//Pulling the data from data layer
export const useStateValue = () => useContext(StateContext);

