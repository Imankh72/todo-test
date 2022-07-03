import { createContext } from "react";
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
  }
};

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(first, todos);

  const addTodo = (todo) => dispatch({ type: "ADD_TODO", payload: todo });

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  return (
    <TodosContext.Provider value={{ ...state, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
