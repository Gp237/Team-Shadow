import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./sass/global.scss";
import Production from "./pages/stepPages/Production";
import Table from "./pages/stepPages/Table";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/upload" element={<Production />} />
        <Route exact path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
