import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Simulator from "./pages/Simulator";
import "./sass/global.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/simulator" element={<Simulator />} />
      </Routes>
    </div>
  );
}

export default App;
