import { createContext, useReducer } from 'react';
// import { appReducer } from './AppReducer';
import appReducer from './AppReducer';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'title one',
      description: 'some description',
      done: false,
    },
    {
      id: '2',
      title: 'title two',
      description: 'some description',
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addTask(task) {
    dispatch({
      type: 'ADD_TASK',
      payload: { ...task, id: crypto.randomUUID(), done: false },
    });
  }
  function toggleTaskDone(id) {
    dispatch({
      type: 'TOGGLE_TASK_DONE',
      payload: id,
    });
  }

  const deleteTask = (id) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const updateTask = (task) => dispatch({ type: 'UPDATE_TASK', payload: task });
  return (
    <GlobalContext.Provider
      value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
