const PageNavbar = () => {
  return (
    <div>
      <nav className="min-h-20 bg-amber-400 flex justify-between items-center p-4 border border-blue-600 max-md:flex-col">
        <h2 className="text-xl font-bold  flex  tracking-[0.6em]  h-full p-4 uppercase bg-gradient-to-r from-blue-400  to bg-pink-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80">
          AMIT & Company
        </h2>
        <ul className="flex justify-around w-1/2 h-full  bg-green-500 p-6 text-2xl hover:underline m-4 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">React</a>
          </li>
          <li>
            <a href="#">Vue</a>
          </li>
          <li>
            <a href="#">NextJs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNavbar;
