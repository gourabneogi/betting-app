import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SlideMenu from "../../SlideMenu/SlideMenu";

const Profitloss = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
              <h2>EARNING REPORT</h2>
              <ol class="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="#">BSB5813(demo test)</a>
                </li>
                <li>
                  <a href="#">
                    <strong>Profit &amp; Loss</strong>
                  </a>
                </li>
              </ol>
            </div>
            <div class="col-lg-2"></div>
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
                    <h5>Summary</h5>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table
                      className="table table-bordered table-striped"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>All Time Total</th>
                          <th>0.0</th>
                        </tr>
                        <tr>
                          <th>Selected Cricket, Football Total </th>
                          <th>0.0</th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h5>Earning Report</h5>
                    <div className="ibox-tools">
                      {/* <a class="collapse-link">
                          <i class="fa fa-chevron-up"></i>
                      </a> */}
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
                            href="/agent/ledgers/earning_report_pdf.pdf"
                          >
                            Export PDF
                          </a>
                        </li>
                      </ul>
                      {/* <a class="close-link">
                          <i class="fa fa-times"></i>
                      </a> */}
                    </div>
                  </div>
                  <div className="ibox-content table-responsive">
                    <table
                      className="table table-bordered table-striped"
                      id="earning-report-pdf"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>DATE/TIME</th>
                          <th>Match Id</th>
                          <th>Match Title</th>
                          <th>Match Earnings</th>
                          <th>Commision Earnings</th>
                          <th>Total Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>23 Sep 22</td>
                          <td>477213</td>
                          <td>Pakistan vs England</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>23 Sep 22</td>
                          <td>477209</td>
                          <td>Australia Legends vs South Africa Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>23 Sep 22</td>
                          <td>477210</td>
                          <td>India vs Australia</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>23 Sep 22</td>
                          <td>477158</td>
                          <td>Guyana Amazon Warriors vs Saint Lucia Kings</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476314</td>
                          <td>Pakistan vs England</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476316</td>
                          <td>
                            Trinbago Knight Riders vs St Kitts and Nevis
                            Patriots
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476312</td>
                          <td>India Legends vs England Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476320</td>
                          <td>Gujarat Giants vs Manipal Tigers</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476321</td>
                          <td>West Indies Women vs New Zealand Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>22 Sep 22</td>
                          <td>476318</td>
                          <td>Guyana Amazon Warriors vs Jamaica Tallawahs</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>21 Sep 22</td>
                          <td>475750</td>
                          <td>
                            Barbados Royals vs St Kitts and Nevis Patriots
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>21 Sep 22</td>
                          <td>475752</td>
                          <td>India Capitals vs Bhilwara Kings</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>21 Sep 22</td>
                          <td>475740</td>
                          <td>West Indies Legends vs New Zealand Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>21 Sep 22</td>
                          <td>475748</td>
                          <td>England Women vs India Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>20 Sep 22</td>
                          <td>475185</td>
                          <td>Pakistan vs England</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>20 Sep 22</td>
                          <td>475183</td>
                          <td>India vs Australia</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>19 Sep 22</td>
                          <td>474807</td>
                          <td>Khyber Pakhtunkhwa vs Sindh</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>19 Sep 22</td>
                          <td>474361</td>
                          <td>Gujarat Giants vs Manipal Tigers</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>19 Sep 22</td>
                          <td>474358</td>
                          <td>India Legends vs New Zealand Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>19 Sep 22</td>
                          <td>474364</td>
                          <td>West Indies Women vs New Zealand Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>19 Sep 22</td>
                          <td>473714</td>
                          <td>Trinbago Knight Riders vs Saint Lucia Kings</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473703</td>
                          <td>Manipal Tigers vs Bhilwara Kings</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473691</td>
                          <td>Australia Legends vs Bangladesh Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473701</td>
                          <td>Barbados Royals vs Guyana Amazon Warriors</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473689</td>
                          <td>Sri Lanka Legends vs South Africa Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473697</td>
                          <td>England Women vs India Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>18 Sep 22</td>
                          <td>473020</td>
                          <td>Trinbago Knight Riders vs Jamaica Tallawahs</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>17 Sep 22</td>
                          <td>473016</td>
                          <td>
                            St Kitts and Nevis Patriots vs Saint Lucia Kings
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>17 Sep 22</td>
                          <td>473018</td>
                          <td>India Capitals vs Gujarat Giants</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>17 Sep 22</td>
                          <td>473013</td>
                          <td>England Legends vs West Indies Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>17 Sep 22</td>
                          <td>473230</td>
                          <td>Kent vs Lancashire</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>17 Sep 22</td>
                          <td>473011</td>
                          <td>Bangladesh Legends vs New Zealand Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>16 Sep 22</td>
                          <td>472402</td>
                          <td>Khyber Pakhtunkhwa vs Southern Punjab</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>16 Sep 22</td>
                          <td>472391</td>
                          <td>India Maharajas vs World Giants</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>16 Sep 22</td>
                          <td>472399</td>
                          <td>Central Punjab vs Northern </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471661</td>
                          <td>England Women vs India Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471673</td>
                          <td>Central Punjab vs Sindh </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471659</td>
                          <td>Bangladesh Legends vs New Zealand Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471686</td>
                          <td>Barbados Royals vs Jamaica Tallawahs</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471667</td>
                          <td>Balochistan vs Northern </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>15 Sep 22</td>
                          <td>471664</td>
                          <td>
                            Trinbago Knight Riders vs Guyana Amazon Warriors
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>14 Sep 22</td>
                          <td>471356</td>
                          <td>
                            Jamaica Tallawahs vs St Kitts and Nevis Patriots
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>14 Sep 22</td>
                          <td>471355</td>
                          <td>India Legends vs West Indies Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>14 Sep 22</td>
                          <td>470515</td>
                          <td>Trinbago Knight Riders vs Barbados Royals</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>13 Sep 22</td>
                          <td>470514</td>
                          <td>England Women vs India Women</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>13 Sep 22</td>
                          <td>470545</td>
                          <td>Khyber Pakhtunkhwa vs Sindh </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>13 Sep 22</td>
                          <td>470511</td>
                          <td>England Legends vs Sri Lanka Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>13 Sep 22</td>
                          <td>470539</td>
                          <td>Central Punjab vs Southern Punjab</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>12 Sep 22</td>
                          <td>470044</td>
                          <td>New Zealand Legends vs South Africa Legends</td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                        <tr>
                          <td>12 Sep 22</td>
                          <td>470021</td>
                          <td>
                            Saint Lucia Kings vs St Kitts and Nevis Patriots
                          </td>
                          <td>0.0</td>
                          <td>0.0</td>
                          <td>0.0</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="pagination">
                      <span className="previous_page disabled">← Previous</span>{" "}
                      <em className="current">1</em>{" "}
                      <a
                        rel="next"
                        href="/agent/ledgers/earning_report?_method=get&authenticity_token=dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY%3D&event_type=%5B%22cricket%22%2C%22football%22%5D&page=2"
                      >
                        2
                      </a>{" "}
                      <a href="/agent/ledgers/earning_report?_method=get&authenticity_token=dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY%3D&event_type=%5B%22cricket%22%2C%22football%22%5D&page=3">
                        3
                      </a>{" "}
                      <a href="/agent/ledgers/earning_report?_method=get&authenticity_token=dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY%3D&event_type=%5B%22cricket%22%2C%22football%22%5D&page=4">
                        4
                      </a>{" "}
                      <a href="/agent/ledgers/earning_report?_method=get&authenticity_token=dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY%3D&event_type=%5B%22cricket%22%2C%22football%22%5D&page=5">
                        5
                      </a>{" "}
                      <a
                        className="next_page"
                        rel="next"
                        href="/agent/ledgers/earning_report?_method=get&authenticity_token=dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY%3D&event_type=%5B%22cricket%22%2C%22football%22%5D&page=2"
                      >
                        Next →
                      </a>
                    </div>
                    <table
                      className="table table-bordered table-striped"
                      id="earning-report-pdf"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th>DATE/TIME</th>
                          <th>Match Id</th>
                          <th>Match Title</th>
                          <th>Match Earnings</th>
                          <th>Commision Earnings</th>
                          <th>Total Earnings</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th colSpan={3} style={{ textAlign: "center" }}>
                            All Page Total
                          </th>{" "}
                          {/* Username */}
                          <th>0.0</th>
                          <th>0.0</th>
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

export default Profitloss;
