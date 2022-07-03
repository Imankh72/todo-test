import Todo from "./Todo";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <>
      <div className="w-full flex flex-col items-center gap-2 ">
        {todos.map(({ id, content }) => (
          <Todo key={id} content={content} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
