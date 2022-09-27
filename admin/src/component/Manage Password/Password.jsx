import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SlideMenu from "../SlideMenu/SlideMenu";


const Password = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        <SlideMenu />

        <div id="page-wrapper" className="gray-bg dashbard-1">
          <Header />

          <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
              <h2>Agent</h2>
              <ol className="breadcrumb">
                <li>
                  <a href="/agent/dashboard">Dashboard</a>
                </li>
                <li className="active">
                  <strong>Manage Password</strong>
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
                    <h5>Change Password</h5>
                    <div className="ibox-tools">
                      {/*  <a class="collapse-link">
                              <i class="fa fa-chevron-up"></i>
                          </a>
                          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                              <i class="fa fa-wrench"></i>
                          </a> */}
                      <ul className="dropdown-menu dropdown-user">
                        <li>
                          <a href="#">Config option 1</a>
                        </li>
                        <li>
                          <a href="#">Config option 2</a>
                        </li>
                      </ul>
                      {/*  <a class="close-link">
                              <i class="fa fa-times"></i>
                          </a> */}
                    </div>
                  </div>
                  <div
                    className="ibox-content table-responsive"
                    style={{ padding: "15px 20px 56px" }}
                  >
                    <form className="form-horizontal" id="edit_user_4">
                      {/* <div class="hr-line-dashed"></div> */}
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          OLD PASSWORD
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control login_text_field"
                            placeholder="OLD PASSWORD"
                          />
                        </div>
                      </div>
                      <div className="hr-line-dashed" />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          NEW PASSWORD
                          <i className="fa fa-info-circle">
                            <div className="tooltiptext">
                              New password should contain - atleast one number,
                              one lowercase letter, one uppercase letter, length
                              should be atleast 8 characters
                            </div>
                          </i>
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            id="new_password"
                            name="new_password"
                            className="form-control login_text_field"
                            placeholder="NEW PASSWORD"
                          />
                        </div>
                      </div>
                      <div className="hr-line-dashed" />
                      <div className="form-group">
                        <label className="col-sm-2 control-label">
                          CONFIRM PASSWORD
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            className="form-control login_text_field"
                            placeholder="CONFIRM PASSWORD"
                          />
                        </div>
                      </div>
                    </form>
                    <div className="form-group">
                      <div className="col-sm-4 col-sm-offset-2">
                        <button
                          className="btn btn-primary change_password_btn"
                          type="submit"
                          id="submit create_bets"
                          style={{ minWidth: 117, marginTop: 10 }}
                        >
                          Save Changes
                        </button>
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
  );
};

export default Password;
