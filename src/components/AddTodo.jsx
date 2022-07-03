const AddTodo = () => {
  return (
    <div className="w-full text-center flex items-center justify-center gap-4 ">
      <input
        type="text"
        placeholder="Add todo"
        className="w-[50%] py-3 px-4 border border-gray-500 rounded-xl focus:outline-gray-700"
      />
      <button className="text-4xl text-white flex items-center justify-center bg-green-700 py-1 px-4 rounded-xl transition-all duration-300 hover:bg-green-800">
        +
      </button>
    </div>
  );
};

export default AddTodo;
