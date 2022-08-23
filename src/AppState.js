import { createContext, useReducer, useContext } from "react";

// Create context to send data to the component tree

const AppContext = createContext(null);

// Create inital state
const initialState = {
  count: 0,
};

//Create a reducer

const reducer = (state, action) => {
  const { type, payload } = action;

  const newState = { ...state };

  switch (type) {
    case "add":
      newState.count += payload;
      return newState;
    case "subtract":
      newState.count -= payload;
      return newState;

    default:
      return newState;
  }
};

export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
