import React from 'react'
import Header from '../../Header/Header'
import SlideMenu from '../../SlideMenu/SlideMenu'
import Footer from '../../Footer/Footer'
const Match = () => {
  return (
    <div className='pace-done'>
      <div id="wrapper">
  {/* START Template Canvas */}
  <SlideMenu/>
  <div
    id="page-wrapper"
    className="gray-bg dashbard-1"
    style={{ minHeight: 225 }}
  >
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\n      .marquee {\n  width: 100%;\n  overflow: hidden;\n  border:0px solid #ccc;\n  background: #1FABB5;\n  color: #fff;\n  padding: 0px 1px;\n  margin-right: 15%;\n  margin-bottom: 13px;\n}\n\nul.marquee li {\n  display: inline-block;\n  padding: 5px 10px 1px;\n  font-size: 16px;\n  font-weight: 600;\n  font-family: 'open-sans-regular' !important;\n}\n    "
      }}
    />
  <Header/>
    <div className="row wrapper border-bottom white-bg page-heading">
      <div className="col-lg-10">
        <h2>Matches</h2>
        <ol className="breadcrumb">
          <li>
            <a href="/agent/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/agent/matches">
              <strong>Matches</strong>
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
              <h5>All Matches</h5>
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
                <tbody>
                  <tr>
                    <td>1203343</td>
                    <td>476314</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1203343">Pakistan vs England</a>
                      </strong>
                      <br />
                      <small>2nd T20I</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 20:00
                    </td>
                    <td>T-20</td>
                    <td>No</td>
                    <td />
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1203342</td>
                    <td>476316</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1203342">
                          Trinbago Knight Riders vs St Kitts and Nevis Patriots
                        </a>
                      </strong>
                      <br />
                      <small>26th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>No</td>
                    <td />
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1204410</td>
                    <td>476312</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1204410">
                          India Legends vs England Legends
                        </a>
                      </strong>
                      <br />
                      <small>14th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>No</td>
                    <td />
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1204434</td>
                    <td>476320</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1204434">
                          Gujarat Giants vs Manipal Tigers
                        </a>
                      </strong>
                      <br />
                      <small>5th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>No</td>
                    <td />
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1204395</td>
                    <td>476321</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1204395">
                          West Indies Women vs New Zealand Women
                        </a>
                      </strong>
                      <br />
                      <small>2nd ODI</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 19:00
                    </td>
                    <td>One-Day</td>
                    <td>No</td>
                    <td />
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1202502</td>
                    <td>476318</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1202502">
                          Guyana Amazon Warriors vs Jamaica Tallawahs
                        </a>
                      </strong>
                      <br />
                      <small>25th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 22 Sep 04:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Guyana Amazon Warriors</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1201273</td>
                    <td>475750</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1201273">
                          Barbados Royals vs St Kitts and Nevis Patriots
                        </a>
                      </strong>
                      <br />
                      <small>24th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 21 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td> Barbados Royals</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1201799</td>
                    <td>475752</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1201799">
                          India Capitals vs Bhilwara Kings
                        </a>
                      </strong>
                      <br />
                      <small>4th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 21 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>India Capitals </td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1201800</td>
                    <td>475740</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1201800">
                          West Indies Legends vs New Zealand Legends
                        </a>
                      </strong>
                      <br />
                      <small>13th Match </small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 21 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>abandoned</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1201589</td>
                    <td>475748</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1201589">
                          England Women vs India Women
                        </a>
                      </strong>
                      <br />
                      <small>2nd ODI</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 21 Sep 17:30
                    </td>
                    <td>One-Day</td>
                    <td>Yes</td>
                    <td>India Women</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1198395</td>
                    <td>475185</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1198395">Pakistan vs England</a>
                      </strong>
                      <br />
                      <small>1st T20I</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 20 Sep 20:00
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>England</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1198394</td>
                    <td>475183</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1198394">India vs Australia</a>
                      </strong>
                      <br />
                      <small> 1st T20I</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 20 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Australia</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1196922</td>
                    <td>474807</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1196922">
                          Khyber Pakhtunkhwa vs Sindh
                        </a>
                      </strong>
                      <br />
                      <small>Final</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 19 Sep 20:00
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Sindh</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1196921</td>
                    <td>474361</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1196921">
                          Gujarat Giants vs Manipal Tigers
                        </a>
                      </strong>
                      <br />
                      <small>3rd Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 19 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Gujarat Giants </td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1196925</td>
                    <td>474358</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1196925">
                          India Legends vs New Zealand Legends
                        </a>
                      </strong>
                      <br />
                      <small>12th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 19 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>No result</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1196822</td>
                    <td>474364</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1196822">
                          West Indies Women vs New Zealand Women
                        </a>
                      </strong>
                      <br />
                      <small>1st ODI</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 19 Sep 19:00
                    </td>
                    <td>One-Day</td>
                    <td>Yes</td>
                    <td>New Zealand Women</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1194933</td>
                    <td>473714</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1194933">
                          Trinbago Knight Riders vs Saint Lucia Kings
                        </a>
                      </strong>
                      <br />
                      <small>23rd Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 19 Sep 04:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Saint Lucia Kings</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1194307</td>
                    <td>473703</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1194307">
                          Manipal Tigers vs Bhilwara Kings
                        </a>
                      </strong>
                      <br />
                      <small>2nd Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 18 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Bhilwara Kings</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1194308</td>
                    <td>473691</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1194308">
                          Australia Legends vs Bangladesh Legends
                        </a>
                      </strong>
                      <br />
                      <small>11th Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 18 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Australia Legends </td>
                    <td className="font-bold">0.0</td>
                  </tr>
                  <tr>
                    <td>1193191</td>
                    <td>473701</td>
                    <td>
                      <strong>
                        <a href="/agent/matches/1193191">
                          Barbados Royals vs Guyana Amazon Warriors
                        </a>
                      </strong>
                      <br />
                      <small>22nd Match</small>
                    </td>
                    <td>CRICKET</td>
                    <td>
                      <i className="fa fa-clock-o" />
                      &nbsp; 18 Sep 19:30
                    </td>
                    <td>T-20</td>
                    <td>Yes</td>
                    <td>Barbados Royals</td>
                    <td className="font-bold">0.0</td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination">
                <span className="previous_page disabled">← Previous</span>{" "}
                <em className="current">1</em>{" "}
                <a
                  rel="next"
                  href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=2"
                >
                  2
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=3">
                  3
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=4">
                  4
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=5">
                  5
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=6">
                  6
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=7">
                  7
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=8">
                  8
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=9">
                  9
                </a>{" "}
                <span className="gap">…</span>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=12">
                  12
                </a>{" "}
                <a href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=13">
                  13
                </a>{" "}
                <a
                  className="next_page"
                  rel="next"
                  href="/agent/matches?_method=get&authenticity_token=BBiaa5yH4Dsr%2FLewRafFnSRSQpYGGSH%2BrgTXsKevaPU%3D&page=2"
                >
                  Next →
                </a>
              </div>
              <div className="pull-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  */}
    {/*/ END Template Main Content */}
    <Footer />
  </div>
  {/*/ END Template Canvas */}
</div>

    </div>
  )
}

export default Match