import React from "react";
import { useState } from "react";

const Main = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`title:${title} and details are ${details}}`);
    const tempArr = [...task];

    tempArr.push({ title, details });
    settask(tempArr);

    setdetails("");
    settitle("");
    console.log("The Array is:", task);
  };
  return (
    <div className="h-full w-full border">
      <h1 className="uppercase text-4xl h-20 w-full flex items-center justify-center text-white font-bold border-b mb-5">
        notes
      </h1>
      <div className="flex flex-col md:flex-row gap-5 h-full w-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="min-h-96 w-1/3  p-20 bg-white ml-5 text-black flex flex-col items-center gap-5 mb-5 rounded-2xl max-md:w-[80%] "
        >
          <input
            className="h-10 w-full border  rounded-2xl max-md:w-[80%] p-4 max-sm:w-[90%]"
            type="text"
            placeholder="Title..."
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <input
            className="h-10 w-full border rounded-2xl max-md:w-[80%] p-4 max-sm:w-[90%]"
            type="text"
            placeholder="Details..."
            onChange={(e) => setdetails(e.target.value)}
            value={details}
          />
          <button className="bg-green-500 h-10 rounded-2xl w-3/5 border border-green-500 active:scale-95 max-md:w-[80%] text-white font-bold max-sm:w-[90%]">
            Add
          </button>
        </form>

        <div className="min-h-100 bg-blue-700 h-full w-2/3  ml-5 mr-5 rounded-2xl border flex flex-wrap">
          {task.map((item, idx) => (
            <div className="h-48 w-44 bg-amber-50 rounded-2xl m-5">
              <h2 className="font-bold  bg-gray-400 m-2 rounded wrap-break-word">
                {item.title}
              </h2>
              <p className="font-medium bg-amber-100 m-2 rounded">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
