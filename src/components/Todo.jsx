import { BsTrashFill, BsSortUp } from "react-icons/bs";

const Todo = ({ content }) => {
  return (
    <>
      <div className="w-[90%] flex items-center justify-between border border-gray-600 py-2 px-4 rounded-lg shadow-md md:w-[55%]">
        <p className="text-xl">{content}</p>
        <div className="flex items-center gap-4">
          <BsTrashFill className="text-red-500 text-2xl cursor-pointer transition-all hover:text-red-700" />
          <BsSortUp className="text-blue-500 text-2xl cursor-pointer transition-all hover:text-blue-700" />
        </div>
      </div>
    </>
  );
};

export default Todo;
