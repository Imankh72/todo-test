import { useEffect, useState } from "react";

const TodosBox = ({ todos, setTodos }) => {
  const [boxTodos, setBoxTodos] = useState([]);

  useEffect(() => {
    setBoxTodos(JSON.stringify(todos));
  }, [todos]);

  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTodos(JSON.parse(boxTodos));
    }
  };

  return (
    <div className="w-full flex justify-center">
      {todos.length > 0 && (
        <textarea
          className="rounded-xl resize-none w-[90%] h-[250px] p-2 text-xl md:w-[55%]"
          value={boxTodos}
          onChange={(e) => setBoxTodos(e.target.value)}
          onKeyDown={handleEnterClick}
        ></textarea>
      )}
    </div>
  );
};

export default TodosBox;
