import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="gray-bg  pace-done" id="body">
      <div className="pace  pace-inactive">
        <div
          className="pace-progress"
          data-progress-text="100%"
          data-progress={99}
          style={{ transform: "translate3d(100%, 0px, 0px)" }}
        >
          <div className="pace-progress-inner" />
        </div>
        <div className="pace-activity" />
      </div>
      <div id="wrapper">
        <div id="canvas">
          <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
              <div>
                <h1 className="logo-name">
                  N10
                  {/* <img alt="image" style="width:250px;" src="/images/LOGO_BLACK.png"/> */}
                </h1>
              </div>
              <h3>Welcome to NICE1010</h3>
              <h3>Sign In</h3>
              <form
                acceptCharset="UTF-8"
                action="/agents/sign_in"
                className="new_agent"
                id="new_agent"
                method="post"
              >
                <div style={{ display: "none" }}>
                  <input name="utf8" type="hidden" defaultValue="✓" />
                  <input
                    name="authenticity_token"
                    type="hidden"
                    defaultValue="UUcytrv22SpE05WsjVOvhT+JsUppBR22aLbIW37rnPQ="
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="agent_user_name"
                    name="agent[user_name]"
                    placeholder="User Name"
                    type="text"
                    defaultValue=""
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="agent_password"
                    name="agent[password]"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary block full-width m-b"
                  style={{ minWidth: 300, minHeight: 34 }}
                >
                  Login
                </button>
              </form>
              <p className="m-t">
                {" "}
                <small>NICE1010 © 2015</small>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
