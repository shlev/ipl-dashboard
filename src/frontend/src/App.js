import "./App.css";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Test } from "./components/Test";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/teams/:teamName" element={<TeamPage />} />
          <Route
            path="/teams/:teamName/matches/:year"
            element={<MatchPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
