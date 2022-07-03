import { useTodos } from "../hooks/useTodos";

const Todo = () => {
  const { todos } = useTodos();

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </div>
  );
};

export default Todo;
