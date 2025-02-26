import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";

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
