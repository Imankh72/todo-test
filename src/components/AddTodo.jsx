import { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      content: todo,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo("");
    console.log(todos);
  };

  return (
    <form
      className="w-full text-center flex items-center justify-center gap-4 mb-14"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Add todo"
        className="w-[75%] text-xl py-2 px-4 border border-gray-500 rounded-xl focus:outline-gray-700 md:w-[50%]"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="text-4xl text-white flex items-center justify-center bg-green-700 py-1 px-4 rounded-xl transition-all duration-300 hover:bg-green-800">
        +
      </button>
    </form>
  );
};

export default AddTodo;
