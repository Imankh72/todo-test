import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, deleteAllTodos, sortTodos }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 mb-12 ">
      {todos.length > 0 &&
        todos.map(({ id, content }) => (
          <Todo
            key={id}
            content={content}
            id={id}
            deleteTodo={deleteTodo}
            sortTodos={sortTodos}
          />
        ))}
      {todos.length === 0 && (
        <div className="w-[90%] text-center border border-gray-600 p-3 rounded-lg md:w-[55%]">
          <p className="text-2xl">There is no todo here</p>
        </div>
      )}
      {todos.length > 0 && (
        <button
          className="py-2 px-4 bg-red-600 text-white rounded-lg transition-all mt-2 text-xl hover:bg-red-800"
          onClick={deleteAllTodos}
        >
          Delete all todos
        </button>
      )}
    </div>
  );
};

export default TodoList;
