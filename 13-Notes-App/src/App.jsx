import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(task);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 p-6 lg:p-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Add Notes:</h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4 flex-1">
          <input
            className="font-medium w-full px-5 outline-none py-2 border-2 rounded bg-transparent"
            type="text"
            placeholder="Enter Notes Heading:"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="font-medium outline-none w-full px-5 h-32 py-2 border-2 rounded bg-transparent"
            placeholder="Write details here:"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button className="active:bg-gray-500 active:scale-95 active:text-white cursor-pointer font-medium bg-white text-black px-5 py-2 rounded italic w-fit self-center">
            Add Notes
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/2 p-6 lg:p-10 border-t-4 lg:border-t-0 lg:border-l-4 flex flex-col">
        <h1 className="text-4xl font-bold">Recent Notes:</h1>

        <div className="mt-5 overflow-auto pr-2 flex-1">
          <div className="flex flex-wrap gap-5">
            {task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="
                    relative
                    h-60 w-44
                    rounded-xl
                    shadow
                    bg-white
                    text-black
                    bg-[url('https://images.vexels.com/media/users/3/348140/isolated/preview/dfdbd9b8f8bdc78244d5959914ffd4bd-notepad-with-a-note-on-it.png')]
                    bg-no-repeat bg-top
                    p-3
                    bg-[length:100%_135%]
                    overflow-hidden
                  "
                >
                  {/* Content spacer so text doesn't overlap the top graphic */}
                  <div className="pt-12 pb-10">
                    <h3 className="leading-tight text-center text-lg font-bold">
                      {elem.title}
                    </h3>
                    <p className="mt-2 leading-tight font-medium text-gray-700 text-sm">
                      {elem.details}
                    </p>
                  </div>

                  <button
                    className="
                    w-36
                      absolute bottom-3 left-1/2 -translate-x-1/2
                      px-3 py-1
                      text-xs font-semibold
                      rounded-xl
                      bg-red-600 text-white
                      shadow
                      hover:bg-red-700
                      active:scale-95
                      focus:outline-none focus:ring-2 focus:ring-red-400
                      cursor-pointer
                    "
                    type="button"
                    onClick={()=>deleteNote(idx)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
