import { useState } from "react";
import PageNavbar from "./PageNavbar";
import Main from "./Main";

const Page1 = () => {
  return (
    <div className="min-h-screen bg-black">
      <PageNavbar />
      <Main />
    </div>
  );
};

export default Page1;
