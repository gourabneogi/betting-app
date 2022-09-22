import React from "react";
import Header from "../Header/Header";
import Sliderbar from "../Slidebar/Sliderbar";
import homeData from "../Data/Home.data";
import "./Home.css";
import { valueToPercent } from "@mui/base";
import Try from "../SlideMenu/Try";
const Home = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        
          <Try />
        
        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header/>

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>DASHBOARD</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">
                    <strong> BSB5813(demo test)</strong>
                  </a>
                </li>
              </ol>
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="wrapper wrapper-content">
            <div className="row">
              <div style={{ color: "green" }} />
              <div className="alert alert-success">
                <button type="button" className="close" data-dismiss="alert">
                  ×
                </button>
                Signed in successfully.
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>MY USERNAME</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">BSB5813</h1>

                    <small>Demo test Hhsi</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>MY LEVEL</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">Stockists</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>MY FIX LIMIT</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">1000.0</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Company Contact</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">bsa5782</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Maximum My Share</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">60.0%</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Minimum Company Share</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">40.0%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Match Commission</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">2.0</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Session Commission</h5>
                  </div>
                  <div className="ibox-content">
                    <h1 className="no-margins">1.0</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox-content">
                  <div
                    className="alert alert-danger"
                    style={{ marginBottom: 0 }}
                  >
                    Sports Sharing Disabled.
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ibox-content">
                  <div
                    className="alert alert-danger"
                    style={{ marginBottom: 0 }}
                  >
                    Games Sharing Disabled.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="pull-right">
              Stockist Panel <strong>v1.2.0.0</strong>
            </div>
            <div>
              <strong>NICE1010</strong> | Powered By{" "}
              <strong> NICE Gaming </strong> | Copyright © 2014-2021{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
