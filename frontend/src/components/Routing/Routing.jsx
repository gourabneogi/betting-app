import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LandingPage from "../../pages/LandingPage/LandingPage";
import SchedulePage from "../../pages/SchedulePage/SchedulePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import UpcomingMatchPage from "../../pages/UpcomingMatch/UpcomingMatchesPage";
import TournamentPage from "../../pages/TournamentPage/TournamentPage";
import Password from "../../pages/Password/Password";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import RulesPage from "../../pages/RulesPage/RulesPage";
// import GamePage from "../../pages/GamePage/GamePage";
import LedgerPage from "../../pages/LedgerPage/LedgerPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/user/login" element={<LoginPage />} />
      <Route path="/user/upcomming_matches" element={<UpcomingMatchPage />} />

      <Route path="/user/dashboard" element={<HomePage />} />
      <Route path="/user/dashboard/schedule" element={<SchedulePage />} />
      <Route path="/user/dashboard/change_password" element={<Password />} />
      <Route path="/user/dashboard/settings" element={<SettingsPage />} />
      <Route path="/user/dashboard/rules" element={<RulesPage />} />
      {/* <Route path="/user/games" element={<GamePage />} /> */}
      <Route path="/user/matches/tournaments" element={<TournamentPage />} />
      <Route path="/user/ledger" element={<LedgerPage />} />
    </Routes>
  );
};

export default Routing;
