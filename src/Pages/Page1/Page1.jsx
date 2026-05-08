import { useState } from "react";
import PageNavbar from "./PageNavbar";

const Page1 = () => {
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
    <div className="min-h-screen bg-black">
      <PageNavbar />
      <div className="h-full w-full border">
        <h1 className="uppercase text-2xl h-20 w-full flex items-center justify-center  mb-5">
          notes
        </h1>
        <div className="flex max-md:flex-col ">
          <form
            onSubmit={handleSubmit}
            className="right min-h-100 w-1/3  p-20 bg-white ml-5 text-black flex flex-col items-center gap-5 mb-5 rounded-2xl max-md: justify-center"
          >
            <input
              className="h-10 w-2/3 border  rounded-2xl"
              type="text"
              placeholder="Title..."
              onChange={(e) => settitle(e.target.value)}
              value={title}
            />
            <input
              className="h-10 w-2/3 border rounded-2xl p-4"
              type="text"
              placeholder="Details..."
              onChange={(e) => setdetails(e.target.value)}
              value={details}
            />
            <button className="bg-green-500 h-10 rounded-2xl w-3/5 border border-green-500 active:scale-95">
              Add
            </button>
          </form>

          <div className="left min-h-100 bg-blue-700 h-full w-2/3  ml-5 mr-5 rounded-2xl border flex flex-wrap">
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
    </div>
  );
};

export default Page1;
