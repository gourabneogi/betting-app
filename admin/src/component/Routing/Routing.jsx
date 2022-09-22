import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Agent from "../Manage/Agent";
import Match from "../Sports/Match";



const Routing = () => {
  return (
    <Routes>
    
      <Route path="/agent/dashboard" element={<Home />} />
      <Route path="/agent/agents?role=agent" element={<Agent />} />
      <Route path="/agent/matches" element={<Match />} />  
    
    </Routes>
  );
};

export default Routing;
