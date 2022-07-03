import { useState } from "react";
import { BsFillFileCheckFill } from "react-icons/bs";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div>
        <div className="h-[100vh] p-2 flex flex-col items-center bg-gray-100 md:max-w-7xl md:mx-auto">
          <div className="text-center p-2 flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl">My Todos</h1>
            <BsFillFileCheckFill className="text-5xl text-green-700" />
          </div>
          <AddTodo todos={todos} setTodos={setTodos} />
          <TodoList />
        </div>
      </div>
    </>
  );
};

export default App;
