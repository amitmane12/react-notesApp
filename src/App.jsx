import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import ReactHomePage from "./Pages/ReactHomePage";
import NoteBook from "./Pages/NoteBook";
import NoteBookTailwind from "./Pages/NoteBook";

import Page1 from "./Pages/Page1/Page1";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactHomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<NoteBook />} />
          <Route path="/notesT" element={<NoteBookTailwind />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;
