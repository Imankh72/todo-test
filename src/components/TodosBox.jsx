const TodosBox = ({ todos, setTodos }) => {
  return (
    <div className="w-full flex justify-center">
      {todos.length > 0 && (
        <textarea
          className="rounded-xl resize-none w-[90%] h-[250px] p-2 text-xl md:w-[55%]"
          value={JSON.stringify(todos)}
        ></textarea>
      )}
    </div>
  );
};

export default TodosBox;
