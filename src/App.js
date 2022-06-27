import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Explore } from "./Pages/Explore/Explore";
import { Login } from "./Pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
