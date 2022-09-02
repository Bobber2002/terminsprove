import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BgWrapper from "./components/background/backgroundWrapper";
import WelcomePage from "./pages/welcome/welcomePage";
import HomePage from "./pages/home/homePage";

function App() {
  return (
    <div className="App">
      <BgWrapper>
        <div className="absolute flex justify-between w-[375px] px-6 pt-2">
        <p>9:41</p>
        <p>xxx</p>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/home" element={<HomePage/>} />
          </Routes>
        </Router>
      </BgWrapper>
    </div>
  );
}

export default App;
