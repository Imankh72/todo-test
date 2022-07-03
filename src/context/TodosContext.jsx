import { createContext, useReducer } from "react";
import { todos } from "../data/db";

export const TodosContext = createContext();

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: todos.push(action.payload) };
    case "DELETE_TODO":
      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== action.payload),
      };
    case "DELETE_ALL_TODOS":
      return { ...state, todos: [] };
    default:
      return state;
  }
};

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, {
    todos: [
      {
        id: "1",
        content: "Learning React",
      },
      {
        id: "2",
        content: "Learning NextJs",
      },
    ],
  });

  const addTodo = (todo) => dispatch({ type: "ADD_TODO", payload: todo });

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  const deleteAllTodos = () => dispatch({ type: "DELETE_ALL_TODOS" });

  return (
    <TodosContext.Provider
      value={{ ...state, addTodo, deleteTodo, deleteAllTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
};
