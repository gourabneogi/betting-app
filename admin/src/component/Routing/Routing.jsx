import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Blockedclients from "../Manage Clients/Blocked Clients/Blockedclients";
import Commisionlimits from "../Manage Clients/Commision Limits/Commisionlimits";
import Myclients from "../Manage Clients/My Clients/Myclients";
import Collection from "../Manage Ledger/Collection Report/Collection";
import Gamesreport from "../Manage Ledger/Games Daily Report/Gamesreport";
import Myledger from "../Manage Ledger/My Ledgers/Myledger";
import Profitloss from "../Manage Ledger/Profit Loss/Profitloss";
import Password from "../Manage Password/Password";
import Agent from "../Manage/Agent";
import NewAgent from "../NewAgent/NewAgent";

import Match from "../Sports/Match/Match";
import Tournament from "../Sports/Tournament/Tournament";



const Routing = () => {
  return (
    <Routes>
      <Route path="/agents/sign_in" element={<Login />} />
      <Route path="/agent/dashboard" element={<Home />} />
      <Route path="/agent/agents" element={<Agent />} />
      <Route path="/agent/agents/newagent" element={<NewAgent />} />
      <Route path="/agent/matches" element={<Match />} />
      <Route path="/agent/tournaments" element={<Tournament />} />    
      <Route path="/agent/users" element={<Myclients />} />  
      <Route path="/agent/users/blocked_clients" element={<Blockedclients />} />  
      <Route path="/agent/users/update_client_limit" element={<Commisionlimits />} /> 
      <Route path="/agent/dashboard/manage_password_panel" element={<Password />} /> 
      <Route path="/agent/ledgers/collection_report" element={<Collection />} />
      <Route path="/agent/ledgers" element={<Myledger />} />
      <Route path="/agent/ledgers/earning_report" element={<Profitloss />} />
      <Route path="/agent/ledgers/games_daily_report" element={<Gamesreport />} />
     
    </Routes>
  );
};

export default Routing;
