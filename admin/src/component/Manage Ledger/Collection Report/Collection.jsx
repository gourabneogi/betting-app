import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SlideMenu from "../../SlideMenu/SlideMenu";
import "./Collection.css";

const Collection = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>COLLECTION REPORT</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">BSB5813(demo test)</a>
                </li>
                <li>
                  <a href="#">
                    <strong>Collection Report</strong>
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
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>PAYMENT RECEIVING FROM (Lena He)</h5>
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
                            href="/agent/ledgers/collection_report_pdf.pdf"
                          >
                            Export PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table" id="example_lena_hai">
                      <thead>
                        <tr>
                          <th>Client</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="/agent/users/62480">BS62480 (Demo)</a>
                          </td>{" "}
                          {/* Username */}
                          <td>75.0</td> {/* Total */}
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Total</th> {/* Username */}
                          <th>75.0</th> {/* Total */}
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>PAYMENT PAID TO (Dena He)</h5>
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
                            href="/agent/ledgers/collection_report_pdf.pdf"
                          >
                            Export PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table display" id="example_dena_hai">
                      <thead>
                        <tr>
                          <th>Client</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                      <tfoot>
                        <tr>
                          <th>Total</th> {/* Username */}
                          <th>0</th> {/* Total */}
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>PAYMENT Clear (Clear Hai)</h5>
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
                            href="/agent/ledgers/collection_report_pdf.pdf"
                          >
                            Export PDF
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table className="table" id="example_lena_hai">
                      <thead>
                        <tr>
                          <th>Client</th>
                          <th>Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="/agent/users/63544">BS63544 (Test1)</a>
                          </td>{" "}
                          {/* Username */}
                          <td>0.0</td> {/* Total */}
                        </tr>
                        <tr>
                          <td>
                            <a href="/agent/users/64664">BS64664 (Test3)</a>
                          </td>{" "}
                          {/* Username */}
                          <td>0.0</td> {/* Total */}
                        </tr>
                        <tr>
                          <td>
                            <a href="/agent/agents/5915">BSC5915 (Test1)</a>
                          </td>{" "}
                          {/* Username */}
                          <td>0.0</td> {/* Total */}
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Total</th> {/* Username */}
                          <th>0.0</th> {/* Total */}
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

export default Collection;
