import Todo from "./Todo";

const TodoList = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-2 ">
        {/* {todos.length > 0 &&
          todos.map(({ id, content }) => (
            <Todo key={id} content={content} id={id} />
          ))}
        {todos.length === 0 && <p>There is no todo here</p>} */}
      </div>
    </>
  );
};

export default TodoList;
