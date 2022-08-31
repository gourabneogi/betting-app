import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="containerdiv">
      <div className="wraper">
        <div className="headline">LOGIN</div>
        <div className="form">
          <form method="post">
            <input className="input" placeholder="User Name" />
            <input className="input" type="password" placeholder="Password" />
            <input className="input" placeholder="Enter Text" />
            <input className="input" placeholder="Enter Text" />
            <div className="btn-overview">
              <a href="#">
                <button className="btn-inside">LOG IN</button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
