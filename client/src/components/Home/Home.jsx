import React from "react";
import { Grid } from "@mui/material";
import availableButton from "../data/Home.data";
import "./Home.css";

const Home = () => {
  return (
    <div className="class-container">
      <div className="home-wraper">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {availableButton.map((value, key) => {
          return (
            <Grid xs={2} sm={4} md={4} key={key} >
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
