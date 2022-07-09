import { Navbar } from "../../Components/Navbar/Navbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Videos } from "../../Components/Videos/Videos";
import "./explore.css";
const Explore = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="vl-main-container">
        <Videos />
      </div>
    </>
  );
};
export { Explore };
