import "./App.scss";
import { TeamPage } from "./pages/TeamPage";
import { MatchPage } from "./pages/MatchPage";
import {HomePage} from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/teams/:teamName/matches/:year" element={<MatchPage/>}>
          </Route>
          <Route path="/teams/:teamName" element={<TeamPage/>}>
      
          </Route>
          <Route path="/" element={<HomePage/>}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

          <Route path="/teams/:teamName" element={<TeamPage />} />


export default App;
