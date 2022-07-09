import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Explore } from "./Pages/Explore/Explore";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/play/:videoId" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
