import React, { useReducer } from "react";
import appReducer from "./AppReducer";
import { GlobalContext } from "./GlobalContext";

const initialState = {
  tasks: [],
  cartItems: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Your existing addTask, deleteTask, toggleTaskDone functions

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 },
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: productId, quantity: newQuantity },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        cartItems: state.cartItems,
        addTask,
        deleteTask,
        toggleTaskDone,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
