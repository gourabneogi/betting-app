import React from "react";
import { Grid } from "@mui/material";
import availableButton from "../data/Home.data";
import "./Home.css";

const Home = () => {
  return (
    <div className="class-container">
      <div className="home-wraper">
      <Grid container spacing={2}>
        {availableButton.map((value, key) => {
          return (
            <Grid key={key} item xs={6}>
              <div className="homepage-button">
                <button className="home-btn">{value}</button>
              </div>
            </Grid>
          );
        })}
      </Grid>
      </div>
    </div>
  );
};

export default Home;
