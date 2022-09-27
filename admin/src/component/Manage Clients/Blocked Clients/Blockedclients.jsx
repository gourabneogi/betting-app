import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import SlideMenu from '../../SlideMenu/SlideMenu'

const Blockedclients = () => {
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
          <strong>Blocked Clients</strong>
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
  <div className="row">
    <div className="col-lg-12">
      <div className="ibox float-e-margins">
        <div className="ibox-title">
          <h5>Blocked Users</h5>
          {/* <div class="ibox-tools">
                              <a href="" class="btn btn-primary btn-xs" >Create new User</a>
                      
                  </div> */}
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
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 29 }}
                  >
                    ID
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 102 }}
                  >
                    User Name
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 59 }}
                  >
                    Name
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 169 }}
                  >
                    Match Commission
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 185 }}
                  >
                    Session Commission
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 60 }}
                  >
                    Share
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 75 }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td valign="top" colSpan={7} className="dataTables_empty">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="dataTables_info"
              id="DataTables_Table_0_info"
              role="status"
              aria-live="polite"
            >
              Showing 0 to 0 of 0 entries
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
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={0}
                    tabIndex={0}
                  >
                    Previous
                  </a>
                </li>
                <li
                  className="paginate_button next disabled"
                  id="DataTables_Table_0_next"
                >
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={1}
                    tabIndex={0}
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

<Footer />

      </div>
    </div>
    </div>
  )
}

export default Blockedclients