import React from 'react'
import './Header.css';
const Header = () => {
  return (
    <div>
        <div className="row border-bottom">
            <nav
              className="navbar navbar-static-top"
              role="navigation"
              style={{ marginBottom: 0 }}
            >
              <div className="navbar-header">
                <a
                  className="navbar-minimalize minimalize-styl-2 btn btn-primary"
                  href="#"
                >
                  
                  <div className="burger burger1"/>
                 <div className="burger burger2"/>
                <div className="burger burger3"/>
                  
                  
                </a>
              </div>
              <ul className="nav navbar-top-links navbar-right">
                <li>
                  <span className="m-r-sm text-muted welcome-message">
                    NICE1010
                  </span>
                </li>

                <li>
                  <a
                    className="text"
                    data-method="delete"
                    href="/agents/sign_out"
                    rel="nofollow"
                  >
                  
                    <i className="fa fa-sign-out" /> Sign out
                  
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        
          <div className="row border-bottom">
            <ul className="marquee">
              <marquee>
                <li>
                  !! Welcome To Nice1010.fun !! 16/09/2022 !! NATIONAL T20 CUP
                  2022 TIME :- 3:30 PM &amp; 8:00 PM !! WEST INDIES WOMEN V/S
                  NEW ZEALAND WOMEN 2022 TIME :- 7:00 PM !! LLC 2022 TIME :-
                  7:30 PM !!{" "}
                </li>
              </marquee>
            </ul>
          </div>
    </div>
  )
}

export default Header