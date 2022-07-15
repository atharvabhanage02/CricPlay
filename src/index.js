import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/Auth/auth-context";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./Context/VideosContext/VideosContext";
import { WatchLaterProvider } from "./Context/WatchLaterContext/WatchLaterContext";
import { LikeProvider } from "./Context/LikeContext/LikeContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <WatchLaterProvider>
            <LikeProvider>
              <App />
            </LikeProvider>
          </WatchLaterProvider>
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
