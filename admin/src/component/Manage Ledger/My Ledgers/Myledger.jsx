import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SlideMenu from "../../SlideMenu/SlideMenu";

const Myledger = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>MY LEDGERS</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                {/* <li>
      <a href="/agent/dashboard">Agent</a>
   </li>
   <li>
      <a href="/agent/matches">Agent</a>
   </li> */}
                <li>
                  <a href="#">
                    <strong>My Ledgers</strong>
                  </a>
                </li>
              </ol>
            </div>
            <div className="col-lg-2"></div>
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
                    <h5>Agent Ledger</h5>
                    <div className="ibox-tools">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                      >
                        <i className="fa fa-wrench" />
                      </a>
                      <ul className="dropdown-menu dropdown-user">
                        <li>
                          <a
                            target="_blank"
                            href="/agent/ledgers/index_pdf.pdf?start_date=&end_date="
                          >
                            Export PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          {/* <th>S No</th> */}
                          <th>LID</th>
                          <th>DATE/TIME</th>
                          <th>ENTRY</th>
                          <th>DEBIT</th>
                          <th>CREDIT</th>
                          <th>Balance</th>
                          <th>Note</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3666816</td>
                          <td id="getdate_3666816">22 Sep 22</td>
                          <td>England Women vs India Women</td>
                          <td> - </td>
                          <td>15.0</td>
                          <td>75.0</td>
                          <td>
                            <div className="note-short-text full_text_modal" />
                          </td>
                        </tr>
                        <tr>
                          <td>3661961</td>
                          <td id="getdate_3661961">21 Sep 22</td>
                          <td>
                            Barbados Royals vs St Kitts and Nevis Patriots
                          </td>
                          <td> - </td>
                          <td>15.0</td>
                          <td>60.0</td>
                          <td>
                            <div className="note-short-text full_text_modal" />
                          </td>
                        </tr>
                        <tr>
                          <td>3586436</td>
                          <td id="getdate_3586436">12 Sep 22</td>
                          <td>England vs South Africa</td>
                          <td> - </td>
                          <td>15.0</td>
                          <td>45.0</td>
                          <td>
                            <div className="note-short-text full_text_modal" />
                          </td>
                        </tr>
                        <tr>
                          <td>3567371</td>
                          <td id="getdate_3567371">11 Sep 22</td>
                          <td>Saint Lucia Kings vs Guyana Amazon Warriors</td>
                          <td> - </td>
                          <td>15.0</td>
                          <td>30.0</td>
                          <td>
                            <div className="note-short-text full_text_modal" />
                          </td>
                        </tr>
                        <tr>
                          <td>3564874</td>
                          <td id="getdate_3564874">11 Sep 22</td>
                          <td>England Women vs India Women</td>
                          <td> - </td>
                          <td>15.0</td>
                          <td>15.0</td>
                          <td>
                            <div className="note-short-text full_text_modal" />
                          </td>
                        </tr>
                      </tbody>
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

export default Myledger;
