import React from "react";
import "./NoEventAvailable.css";
import Navbar from "../Navbar/Navbar";

const TournamentPage = (props) => {
  return (
    <div>
      {!props.button ? <Navbar /> : <Navbar newButton={props.button} />}
      <div className="container">
        <div className="event-updates">
          <div className="span">Currently No {props.eventName} Available</div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
