import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Explore } from "./Pages/Explore/Explore";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { SingleVideoPage } from "./Pages/SingleVideoPage/SingleVideoPage";
import { WatchLaterPage } from "./Pages/Watch-Later-Page/WatchLaterPage";
import { RequiresAuth } from "./Components/RequiresAuth";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Explore />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/watch-later"
          element={
            <RequiresAuth>
              <WatchLaterPage />
            </RequiresAuth>
          }
        />
        <Route path="/play/:videoId" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
