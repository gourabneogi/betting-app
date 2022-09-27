import React from 'react'
import Header from '../../Header/Header'
import SlideMenu from '../../SlideMenu/SlideMenu'


const Myclients = () => {
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
          <strong>CLIENTS</strong>
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
          <h5>All Users</h5>
          <div className="ibox-tools">
            <a href="/agent/users/new" className="btn btn-primary btn-xs"  style={{minWidth : 130, height : 22}}>
              Create new User
            </a>
            {/* <a class="collapse-link">
                          <i class="fa fa-chevron-up"></i>
                      </a>
 */}{" "}
            {/* <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                          <i class="fa fa-wrench"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-user">
                          <li><a href="#">Config option 1</a>
                          </li>
                          <li><a href="#">Config option 2</a>
                          </li>
                      </ul> */}
            {/*  <a class="close-link">
                          <i class="fa fa-times"></i>
                      </a> */}
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
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 19 }}
                  >
                    ID
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 82 }}
                  >
                    User Name
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 42 }}
                  >
                    Name
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 132 }}
                  >
                    Match Commission
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 146 }}
                  >
                    Session Commission
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 42 }}
                  >
                    Share
                  </th>
                  <th
                    className="sorting_disabled"
                    rowSpan={1}
                    colSpan={1}
                    style={{ width: 216 }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td>62480</td>
                  <td>
                    <a href="/agent/users/62480">BS62480(demo)</a>
                  </td>
                  <td>Demo Hsj</td>
                  <td>0.0</td>
                  <td>0.0</td>
                  <td>60.0 </td>
                  <td className="">
                    <a
                      className="btn btn-white btn-sm"
                      href="/agent/users/62480/edit"
                    >
                      <i className="fa fa-pencil-square" /> Edit
                    </a>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <a href="/agent/users/62480/change_password_panel">
                      <button type="button" className="btn btn-w-m btn-primary" style={{minWidth : 140, height : 34}}>
                        Change Password
                      </button>
                    </a>
                  </td>
                </tr>
                <tr role="row" className="even">
                  <td>63544</td>
                  <td>
                    <a href="/agent/users/63544">BS63544(test1)</a>
                  </td>
                  <td>test1 </td>
                  <td>2.0</td>
                  <td>1.0</td>
                  <td>60.0 </td>
                  <td className="">
                    <a
                      className="btn btn-white btn-sm"
                      href="/agent/users/63544/edit"
                    >
                      <i className="fa fa-pencil-square" /> Edit
                    </a>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <a href="/agent/users/63544/change_password_panel">
                      <button type="button" className="btn btn-w-m btn-primary" style={{minWidth : 140, height : 34}}>
                        Change Password
                      </button>
                    </a>
                  </td>
                </tr>
                <tr role="row" className="odd">
                  <td>64664</td>
                  <td>
                    <a href="/agent/users/64664">BS64664(test3)</a>
                  </td>
                  <td>Test3 Dhs</td>
                  <td>0.0</td>
                  <td>0.0</td>
                  <td>60.0 </td>
                  <td className="">
                    <a
                      className="btn btn-white btn-sm"
                      href="/agent/users/64664/edit"
                    >
                      <i className="fa fa-pencil-square" /> Edit
                    </a>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <a href="/agent/users/64664/change_password_panel">
                      <button type="button" className="btn btn-w-m btn-primary" style={{minWidth : 140, height : 34}}>
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
              role="status"
              aria-live="polite"
            >
              Showing 1 to 3 of 3 entries
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
                <li className="paginate_button active">
                  <a
                    href="#"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={1}
                    tabIndex={0}
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
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={2}
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

      </div>
    </div>
    </div>
  )
}

export default Myclients