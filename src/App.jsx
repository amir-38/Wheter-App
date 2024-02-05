import "./App.css";
import LeftDash from "./LeftDashboard/LeftDashboard";
import RightBottomDashboard from "./RightBottomDashborad/RightBottomDashboard";
import RightTopDashboard from "./RightTopDashboard/RightTopDashboard";
function App() {
  return (
    <>
      <div className="leftContainer">
        <LeftDash />
      </div>

      <div className="rightContainer">
        <RightTopDashboard />
        <RightBottomDashboard />
      </div>
    </>
  );
}

export default App;
