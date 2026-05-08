import React from "react";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Main = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`title:${title} and details are ${details}}`);
    const tempArr = [...task];
    const date = new Date().toDateString();
    tempArr.push({
      title,
      details,
      id: date.toString(),
      status: "pending",
      completed: false,
    });
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

        <div className="main min-h-100 bg-blue-700 h-full w-2/3  ml-5 mr-5 rounded-2xl border flex flex-wrap">
          {task.map((item, idx) => (
            <div
              style={{
                "webkit-scrollbar": "none",
              }}
              className="card  w-52
               bg-amber-50 
               rounded-2xl
                m-5
                overflow-auto  overscroll-none
                 border border-gray-300 scroll-my-0
                 flex flex-col items-start h-1/3 max-sm:w-[90%] max-sm:h-40"
              key={idx}
            >
              <div className="status  h-full w-full">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-medium text-[16px] text-lg bg-gray-300 m-1 rounded break-all w-fit overflow-hidden">
                    {item.status}
                  </h1>
                  <div className=" btns flex w-fit justify-around p-2 flex-wraps   max-sm:items-center">
                    <button
                      className="rounded border border-red-500 active:scale-95  scale-100  max-sm:w-[10%]"
                      onClick={() => {
                        const tempArr = [...task];
                        tempArr.splice(idx, 1);
                        settask(tempArr);
                      }}
                    >
                      ❌
                    </button>
                    <button
                      className="   border border-green-500 active:scale-95 text-white  scale-100 h-6 max-sm:w-[10%]"
                      onClick={() => {
                        const tempArr = [...task];
                        const temp = tempArr[idx];
                        tempArr.splice(idx, 1);
                        tempArr.unshift(temp);
                        settask(tempArr);
                      }}
                    >
                      🔝
                      {/* <RiDeleteBinLine /> */}
                    </button>
                    <button
                      className="  border border-blue-500 active:scale-95 text-white font-medium scale-100 h-6 max-sm:w-[10%]"
                      onClick={() => {
                        const tempArr = [...task];
                        const temp = tempArr[idx];
                        tempArr[idx].completed = !tempArr[idx].completed;

                        settask(tempArr);
                      }}
                    >
                      ✅
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm bg-gray-300 m-2 rounded break-all  w-fit overflow-hidden">
                    {item.id}
                  </p>
                </div>
              </div>

              <div className="details flex flex-col items-start justify-start w-full">
                <h2
                  className={`font-bold  bg-gray-400 m-2 rounded break-all overflow-hidden  w-fit ${item.completed ? "line-through" : ""} `}
                >
                  {item.title}
                </h2>
                <p
                  className={`font-medium bg-amber-100 m-2 rounded  break-all w-fit  ${item.completed ? "line-through" : ""} overflow-hidden`}
                >
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
