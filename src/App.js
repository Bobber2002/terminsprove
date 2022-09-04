import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import BgWrapper from "./components/background/backgroundWrapper";
import WelcomePage from "./pages/welcome/welcomePage";
import HomePage from "./pages/home/homePage";
import Navigation from "./components/navigtaion/navigation";
import SearchPage from "./pages/search/searchPage";
import SchedulePage from "./pages/schedule/schedulePage";
import ClassPage from "./pages/class/classPage";
import LoginPage from "./pages/login/loginPage";


function App() {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    console.log(navState);
  }, [navState]);

  return (
    <div className="App">
      <BgWrapper>
        <Router>
          <div className="absolute z-10 flex justify-between w-[375px] px-6 pt-2">
            <p>9:41</p>
            <p>xxx</p>
          </div>
          {navState ? (
            <Navigation navState={navState} setNavState={setNavState} />
          ) : (
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route
                path="/home"
                element={
                  <HomePage navState={navState} setNavState={setNavState} />
                }
              />
              <Route
                path="/search"
                element={
                  <SearchPage navState={navState} setNavState={setNavState} />
                }
              />
              <Route
                path="/schedule"
                element={
                  <SchedulePage navState={navState} setNavState={setNavState} />
                }
              />
              <Route
                path="/class"
                element={
                  <ClassPage navState={navState} setNavState={setNavState} />
                }
              />
              <Route
                path="/login"
                element={
                  <LoginPage navState={navState} setNavState={setNavState} />
                }
              />
            </Routes>
          )}
        </Router>
      </BgWrapper>
    </div>
  );
}

export default App;
