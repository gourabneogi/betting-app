import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SlideMenu from "../../SlideMenu/SlideMenu";

const Gamesreport = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
              <h2>Games Daily Report</h2>
              <ol class="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">
                    <strong>
                      <strong>Games Daily Report</strong>
                    </strong>
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div
              id="reportrange"
              className="my_ledgers_dated_picker col-lg-3 col-md-4 col-sm-6 col-xs-11 pull-right"
            >
              <i className="glyphicon glyphicon-calendar fa fa-calendar" />
              &nbsp;
              <span> - </span>
              <b className="caret" />
            </div>
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
              style={{ margin: "11px 0px" }}
            >
              <a
                className="btn btn-primary btn-xs search_date_btn"
                style={{ fontSize: 12, marginTop: -2 }}
              >
                Serach
              </a>
            </div>
          </div>

          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Games Daily Report</h5>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Client Name</th>
                          <th>Ledger Title</th>
                          <th>Event Type</th>
                          <th>Debit</th>
                          <th>Credit</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Client Name</th>
                          <th>Ledger Title</th>
                          <th>Event type</th>
                          <th>Debit Total</th>
                          <th>Credit Total</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th colSpan={4} style={{ textAlign: "center" }}>
                            All Page Total
                          </th>
                          <th>0.0</th>
                          <th>-0.0</th>
                        </tr>
                      </tfoot>
                    </table>
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

export default Gamesreport;
