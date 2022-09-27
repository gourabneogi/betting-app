import React from 'react'
import SlideMenu from '../SlideMenu/SlideMenu'
import Footer from '../Footer/Footer'
import './NewAgent.css'
import Header  from '../Header/Header'
const NewAgent = () => {
  return (
    <div className="pace-done">
      <div id="wrapper">
        
          <SlideMenu />
        
        <div id="page-wrapper" className="gray-bg dashbard-1" style={{ minHeight: 225 }}>
    
          <Header/>
          
          <section id="main" style={{ minHeight: 481 }}>

  <div className="row wrapper border-bottom white-bg page-heading">
    <div className="col-lg-10">
      <h2>New Agent</h2>
      <ol className="breadcrumb">
        <li>
          <a href="/agent/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/agent/agents">Agents</a>
        </li>
        <li className="active">
          <strong>Create Agent</strong>
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
            <h5>New Agent</h5>
            <div className="ibox-tools">
              
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a href="#">Config option 1</a>
                </li>
                <li>
                  <a href="#">Config option 2</a>
                </li>
              </ul>
             
            </div>
          </div>
          <div className="ibox-content table-responsive">
            <form
              acceptCharset="UTF-8"
              action="/agent/agents"
              className="form-horizontal"
              id="agent_form"
              method="post"
            >
              <div style={{ display: "none" }}>
                <input name="utf8" type="hidden" defaultValue="✓" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  defaultValue="dp2PaITMX8Ky6lDleeugU9VYtflxiUW8UWJuwRf6ceY="
                />
              </div>
              
              <div className="form-group">
                <label className="col-sm-2 control-label">User Name</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_user_name"
                    name="agent[user_name]"
                    placeholder="User Name"
                    readOnly="readonly"
                    type="text"
                    defaultValue="BSC6065"
                  />
                </div>
              </div>
              <input
                id="agent_ancestry"
                name="agent[ancestry]"
                type="hidden"
                defaultValue="4/5750/5782/5813"
              />
              <input
                id="agent_role"
                name="agent[role]"
                type="hidden"
                defaultValue="agent"
              />
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">First Name</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_first_name"
                    name="agent[first_name]"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">Last Name</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_last_name"
                    name="agent[last_name]"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">My Share</label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="entered_agent_share"
                    max={100.0}
                    min={0.0}
                    name="agent[agent_share]"
                    placeholder="My Share"
                    required="required"
                    type="number"
                    defaultValue={0.0}
                  />
                  <text className="agent_share_error">
                    <b>Note</b> : Max Agent Share + My Share should be set below
                    or equal to <b>60.0</b>
                  </text>
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Max Agent Share
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="entered_max_agent_share"
                    max={100.0}
                    min={0.0}
                    name="agent[maximum_share]"
                    placeholder="Agent Share"
                    required="required"
                    type="number"
                    defaultValue={0.0}
                  />
                  <text className="max_agent_share_error">
                    <b>Note</b> : Max Agent Share + My Share should be set below
                    or equal to <b>60.0</b>
                  </text>
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Agent Fix Limit
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="entered_agent_fix_limit"
                    min={0.0}
                    name="agent[fix_limit]"
                    placeholder="Agent Fix Limit"
                    required="required"
                    type="number"
                    defaultValue={0.0}
                  />
                  <text className="agent_fix_limit_error">
                    <b>Note</b> : Agent Fix Limit set below or equal to{" "}
                    <b>40.0</b>
                  </text>
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Agent Match Commission
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_match_comission"
                    max={100.0}
                    min={0.0}
                    name="agent[match_commission]"
                    placeholder="Agent Match Commission"
                    required="required"
                    type="text"
                    defaultValue={0.0}
                  />
                  <text className="commi_error_match">
                    <b>Note</b> : Agent Match Commission set below or equal to{" "}
                    <b>2.0</b>
                  </text>
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Agent Session Commission
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_session_comission"
                    max={100.0}
                    min={0.0}
                    name="agent[session_commission]"
                    placeholder="Agent Session Commission"
                    required="required"
                    type="text"
                    defaultValue={0.0}
                  />
                  <text className="commi_error_session">
                    <b>Note</b> : Agent Session Commission set below or equal to{" "}
                    <b>1.0</b>
                  </text>
                </div>
              </div>
              
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Password
                  <i className="fa fa-info-circle">
                    <div className="tooltiptext">
                      New password should contain - atleast one number, one
                      lowercase letter, one uppercase letter, length should be
                      atleast 8 characters
                    </div>
                  </i>
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_password"
                    name="agent[password]"
                    placeholder="Password"
                    required="required"
                    type="password"
                  />
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Confirm Password
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="agent_confirm_password"
                    name="agent[confirm_password]"
                    placeholder="Confirm Password"
                    required="required"
                    type="password"
                  />
                </div>
              </div>
              <div className="hr-line-dashed" />
              <div className="form-group">
                <div className="col-sm-4 col-sm-offset-2">
                  <a className="btn btn-white" href="/agent/agents">
                    Cancel
                  </a>
                  <button className="btn btn-primary" type="submit" id="submit">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.fa {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.fa .tooltiptext {\n  visibility: hidden;\n  background-color: grey;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n\n  width: 226px;\n  color: #fff;\n  z-index: 1;\n  bottom: 200%;\n  left: 50%;\n  margin-left: -110px;\n  font-size: 14px;\n}\n\n.fa:hover .tooltiptext {\n  visibility: visible;\n}\n"
    }}
  />
  {/*/ END Template Main Content */}
 <Footer />
</section>

        </div>
      </div>
    </div>
  )

}

export default NewAgent