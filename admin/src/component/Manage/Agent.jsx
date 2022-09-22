import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sliderbar from "../Slidebar/Sliderbar";
import Try from "../SlideMenu/Try";
import "./Agent.css";

const Agent = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
       
          <Try />
        
        <div id="page-wrapper" className="gray-bg dashbard-1">
        <Header />

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>Agent</h2>
              <ol className="breadcrumb">
                <li>
                  
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li>
                  <strong>Agent</strong>
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
          <h5>All Agents</h5>
          <div className="ibox-tools">
            <a
              href="/agent/agents/new?role=agent"
              className="btn1 btn-primary btn-xs"
            >
              Create Agent
            </a>
          </div>
        </div>
        <div className="ibox-content table-responsive">
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper form-inline dt-bootstrap no-footer"
          >
            <div className="dt-buttons">
              <a
                className="dt-button buttons-csv buttons-html5"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                href="#"
              >
                <span>CSV</span>
              </a>
              <a
                className="dt-button buttons-pdf buttons-html5"
                tabIndex={0}
                aria-controls="DataTables_Table_0"
                href="#"
              >
                <span>PDF</span>
              </a>
            </div>
            <div id="DataTables_Table_0_filter" className="dataTables_filter">
              <label>
                Search:
                <input
                  type="search"
                  className="form-control input-sm"
                  placeholder=""
                  aria-controls="DataTables_Table_0"
                />
              </label>
            </div>
            <table
              className="table table-bordered table-striped dataTables-example dataTable no-footer"
              id="DataTables_Table_0"
              role="grid"
              aria-describedby="DataTables_Table_0_info"
            >
              <thead>
                <tr role="row">
                  <th
                    className="sorting_asc"
                    style={{ width: 23 }}
                  >
                    ID
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 100 }}
                  >
                    User Name
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 53 }}
                  >
                    Name
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 71 }}
                  >
                    Fix Limit
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 77 }}
                  >
                    My Share
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 85 }}
                  >
                    Max Share
                  </th>
                  <th
                    className="sorting"
                    style={{ width: 242 }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td className="sorting_1">5915</td>
                  <td className="agent_name">
                    <a href="#">BSC5915 (Test1)</a>
                  </td>
                  <td>test1 test2</td>
                  <td>300.0</td>
                  <td>30.0</td>
                  <td>30.0</td>
                  <td className="">
                    <a
                      className="btn btn-white btn-sm"
                      href="#"
                    >
                      <i className="fa fa-pencil-square" /> Edit
                    </a>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <a href="#">
                      <button type="button" className="btn btn-w-m btn-primary">
                        Change Password
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="dataTables_info"
              id="DataTables_Table_0_info"
            >
              Showing 1 to 1 of 1 entries
            </div>
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="DataTables_Table_0_paginate"
            >
              <ul className="pagination">
                <li
                  className="paginate_button previous disabled"
                  id="DataTables_Table_0_previous"
                >
                  <a 
                   href="#">
                    Previous
                  </a>
                </li>
                <li className="paginate_button active">
                  <a
                    href="#"
                  >
                    1
                  </a>
                </li>
                <li
                  className="paginate_button next disabled"
                  id="DataTables_Table_0_next"
                >
                  <a
                    href="#"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <Footer/> 
        </div>
      </div>
    </div>
  );
};

export default Agent;
