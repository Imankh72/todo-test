import { BsFillFileCheckFill } from "react-icons/bs";

const App = () => {
  return (
    <>
      <div className="p-2">
        <div className="text-center p-2 flex items-center justify-center gap-4">
          <h1 className="text-5xl">My Todos</h1>
          <BsFillFileCheckFill className="text-5xl text-green-700" />
        </div>
      </div>
    </>
  );
};

export default App;
