import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { autoBatchEnhancer } from "@reduxjs/toolkit";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
