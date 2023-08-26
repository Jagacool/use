import React, { useReducer } from "react";
import appReducer from "./AppReducer";
import { GlobalContext } from "./GlobalContext";

const initialState = {
  tasks: [
    // Your existing tasks initial state
  ],
  cartItems: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    // Your existing addTask logic
  };

  const deleteTask = (id) => {
    // Your existing deleteTask logic
  };

  const toggleTaskDone = (id) => {
    // Your existing toggleTaskDone logic
  };

  const addToCart = (product, quantity) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: quantity },
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
