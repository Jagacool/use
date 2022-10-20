import {  useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";
import { GlobalContext } from "./GlobalContext";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "title one",
      description: "some desc",
      done: true,
    },
    {
      id: 2,
      title: "title two",
      description: "some else",
      done: true,
    },
  ],
};


//
// creando Provider

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) =>
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: state.tasks.length + 1, done: true },
      //*  payload: { ...task, id: v4(), done: true },
    });

  const deleteTask = (id) =>
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });

  const toggleTaskDone = (id) =>
    dispatch({
      type: "TOGGLE_TASK_DONE",
      payload: id,
    });

  return (
    <>
      <GlobalContext.Provider
        value={{ ...state, addTask, deleteTask, toggleTaskDone }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};
