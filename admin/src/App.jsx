import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content flex">
        <Sidebar />
      </div>
    </div>
  );
}
