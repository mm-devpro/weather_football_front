import React from "react";
import {Routes, Navigate, Route} from "react-router-dom";
import Header from "./components/header/header.component";
import LeaguePage from "./pages/league-team/league-page.component";
import NotFound from "./pages/not-found/not-found.component";
import TeamPage from "./pages/team-page/team-page.component";
import './App.css';
import CreditsPage from "./pages/credits/credits-page.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/team"/>}/>
        <Route exact path="/team" element={<TeamPage />}/>
        <Route exact path="/league" element={<LeaguePage/>}/>
        <Route exact path="/credits" element={<CreditsPage />}/>
        <Route component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
