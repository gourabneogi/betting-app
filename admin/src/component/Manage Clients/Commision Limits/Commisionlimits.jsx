import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import SlideMenu from '../../SlideMenu/SlideMenu'

const Commisionlimits = () => {
  return (
    <div className="pace-done">
    <div id="wrapper">
      <SlideMenu />

      <div id="page-wrapper" className="gray-bg dashbard-1">
        <Header />

        <div className="row wrapper border-bottom white-bg page-heading">
  <div className="col-lg-10">
    <h2>CLIENTS</h2>
    <ol className="breadcrumb">
      <li>
        <a href="/agent/dashboard">Dashboard</a>
      </li>
      <li>
        <a href="#">
          <strong>Commission &amp; Limits</strong>
        </a>
      </li>
      {/* <li class="active">
                      <strong></strong>
                  </li> */}
    </ol>
  </div>
  <div className="col-lg-2"></div>
</div>

<div className="wrapper wrapper-content animated fadeInRight">
  {/* <div class="row">
              <div class="col-lg-12">
                  <div class="ibox float-e-margins">
                      <div class="ibox-title">
                          <h5>Sub Companies</h5>
                          <div class="ibox-tools">
                              
                  </div>
              </div>
              <div class="ibox-content table-responsive">
                  <table class="table table-bordered table-responsive">
                      <thead>
                          <tr class="tbl-header-middle"> 
                            <th colspan="1"></th>
                            <th colspan="1"></th>
                            <th colspan="2">Client Commission</th>
                            <th colspan="2">Client Limit</th>
                            <th colspan="2"></th>
                          </tr>
                          <tr>
                              <th>ID</th>
                              <th>Client Name</th>
                              <th>Match Commission</th>
                              <th>Session Commission</th>
                              <th>Fix Limit</th>
                              <th>Used Limit</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr data-agent-id="">
                              <td></td>
                              <td></td>                                   
                              <td></td>
                              <td>
                              </td>
                              <td>
                              </td>
                              
                            
                             
                              
                              <td>
                              </td> 
                              <td><button type="button" class="btn btn-primary update-sub-company-agent">Update</button>
                              </td>
                          </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>          
</div> */}
  {/*- agents */}
  <div className="row">
    <div className="col-lg-12">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Agent</h5>
          <div className="ibox-tools">
            {/* <a href="" class="btn btn-primary btn-xs" >Create new User</a> */}
          </div>
        </div>
        <div className="ibox-content table-responsive">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr className="tbl-header-middle">
                <th colSpan={1} />
                <th colSpan={1} />
                <th colSpan={2}>Client Commission</th>
                <th colSpan={2}>Client Limit</th>
                <th colSpan={2} />
              </tr>
              <tr>
                <th>ID</th>
                <th>Client Name</th>
                <th>Match Commission</th>
                <th>Session Commission</th>
                <th>Fix Limit</th>
                <th>Used Limit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr data-agent-id={5915}>
                <td>5915</td>
                <td>BSC5915 (Test1)</td>
                <td>
                  <input
                    className="update-agent-info col-xs-6"
                    data-field-name="match_commission"
                    disabled="disabled"
                    id="match_commission"
                    name="match_commission"
                    type="text"
                    defaultValue={2.0}
                  />
                </td>
                <td>
                  <input
                    className="update-agent-info col-xs-6"
                    data-field-name="session_commission"
                    disabled="disabled"
                    id="session_commission"
                    name="session_commission"
                    type="text"
                    defaultValue={1.0}
                  />
                </td>
                <td>
                  <input
                    className="update-agent-info col-xs-6 col-coins-limit"
                    data-field-name="fix_limit"
                    id="fix_limit"
                    name="fix_limit"
                    type="text"
                    defaultValue={300.0}
                  />
                </td>
                {/*  <td> */}
                {/* </td> */}
                <td>
                  <input
                    className="col-xs-6 col-coins-limit"
                    id="used_coins"
                    name="used_coins"
                    readOnly="readonly"
                    type="text"
                    defaultValue={0.0}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary update-agent"
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/*- users */}
  <div className="row">
    <div className="col-lg-12">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>All Users</h5>
          <div className="ibox-tools">
            {/* <a href="" class="btn btn-primary btn-xs" >Create new User</a> */}
          </div>
        </div>
        <div className="ibox-content table-responsive">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr className="tbl-header-middle">
                <th colSpan={1} />
                <th colSpan={1} />
                <th colSpan={2}>Client Commission</th>
                <th colSpan={2}>Client Limit</th>
                <th colSpan={2} />
              </tr>
              <tr>
                <th>ID</th>
                <th>Client Name</th>
                <th>Match Commission</th>
                <th>Session Commission</th>
                <th>Fix Limit</th>
                <th>Current Limit</th>
                <th>Used Limit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr data-user-id={62480}>
                <td>62480</td>
                <td>BS62480 (Demo)</td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="match_commission"
                    disabled="disabled"
                    id="match_commission"
                    max={100.0}
                    min={0.0}
                    name="match_commission"
                    step="0.01"
                    type="number"
                    defaultValue={0.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="session_commission"
                    disabled="disabled"
                    id="session_commission"
                    max={100.0}
                    min={0.0}
                    name="session_commission"
                    step="0.01"
                    type="number"
                    defaultValue={0.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="fix_limit"
                    id="fix_limit"
                    name="fix_limit"
                    type="text"
                    defaultValue={500.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="coins"
                    id="coins"
                    name="coins"
                    type="text"
                    defaultValue={425.0}
                  />
                </td>
                <td>
                  <input
                    className="col-xs-6 col-coins-limit"
                    id="used_coins"
                    name="used_coins"
                    readOnly="readonly"
                    type="text"
                    defaultValue={0}
                  />
                </td>
                <td>
                  <button type="button" className="btn btn-primary update-user">
                    Update
                  </button>
                </td>
              </tr>
              <tr data-user-id={63544}>
                <td>63544</td>
                <td>BS63544 (Test1)</td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="match_commission"
                    disabled="disabled"
                    id="match_commission"
                    max={100.0}
                    min={0.0}
                    name="match_commission"
                    step="0.01"
                    type="number"
                    defaultValue={2.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="session_commission"
                    disabled="disabled"
                    id="session_commission"
                    max={100.0}
                    min={0.0}
                    name="session_commission"
                    step="0.01"
                    type="number"
                    defaultValue={1.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="fix_limit"
                    id="fix_limit"
                    name="fix_limit"
                    type="text"
                    defaultValue={100.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="coins"
                    id="coins"
                    name="coins"
                    type="text"
                    defaultValue={100.0}
                  />
                </td>
                <td>
                  <input
                    className="col-xs-6 col-coins-limit"
                    id="used_coins"
                    name="used_coins"
                    readOnly="readonly"
                    type="text"
                    defaultValue={0}
                  />
                </td>
                <td>
                  <button type="button" className="btn btn-primary update-user">
                    Update
                  </button>
                </td>
              </tr>
              <tr data-user-id={64664}>
                <td>64664</td>
                <td>BS64664 (Test3)</td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="match_commission"
                    disabled="disabled"
                    id="match_commission"
                    max={100.0}
                    min={0.0}
                    name="match_commission"
                    step="0.01"
                    type="number"
                    defaultValue={0.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6"
                    data-field-name="session_commission"
                    disabled="disabled"
                    id="session_commission"
                    max={100.0}
                    min={0.0}
                    name="session_commission"
                    step="0.01"
                    type="number"
                    defaultValue={0.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="fix_limit"
                    id="fix_limit"
                    name="fix_limit"
                    type="text"
                    defaultValue={60.0}
                  />
                </td>
                <td>
                  <input
                    className="update-user-info col-xs-6 col-coins-limit"
                    data-field-name="coins"
                    id="coins"
                    name="coins"
                    type="text"
                    defaultValue={60.0}
                  />
                </td>
                <td>
                  <input
                    className="col-xs-6 col-coins-limit"
                    id="used_coins"
                    name="used_coins"
                    readOnly="readonly"
                    type="text"
                    defaultValue={0}
                  />
                </td>
                <td>
                  <button type="button" className="btn btn-primary update-user">
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Summary</h5>
          <div className="ibox-tools"></div>
        </div>
        <div className="ibox-content table-responsive">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Fix Limit</th>
                <th>Limit Distributed Below</th>
                <th>Limit With Clients</th>
                {/* <th>Ledger Balance</th> */}
                <th>Ledger Exposure</th>
                <th>Current Limit</th>
                <th>Remaining Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000.0</td>
                <td>300.0</td>
                <td>585.0</td>
                <td>-75.0 </td>
                <td>925.0</td>
                <td>40.0</td>
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
  )
}

export default Commisionlimits