import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SlideMenu from "../../SlideMenu/SlideMenu";

const Tournament = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>TOURNAMENT</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/agent/tournaments">
                    <strong>Tournament</strong>
                  </a>
                </li>
              </ol>
            </div>
            <div className="col-lg-2"></div>
          </div>

          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>All Tournaments</h5>
                    <div className="ibox-tools"></div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>PID</th>
                          <th>Title</th>
                          <th>Sport</th>
                          <th>DATE</th>
                          <th>Type</th>
                          <th>Declared</th>
                          <th>Won By</th>
                          <th>Profit / Loss</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <div className="pull-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Tournament;
