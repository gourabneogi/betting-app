import React from 'react'
import { userData } from "./SlidebarData";
import { SlidebarData } from "./SlidebarData";
import "./Slidebar.css"

const Sliderbar = () => {
  return (
    <div className='wrapper-slidebar'>
        <div className="sidebar">
          <li className="nav-header">
            <div className="dropdown profile-element">
              <span></span>
              <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                <span className="clear">
                  <span className="block m-t-xs">
                    <strong className="font-bold">{userData.name}</strong>
                  </span>
                  <span className="text-muted text-xs block">
                    {userData.stock} <b className="caret" />
                  </span>
                </span>{" "}
              </a>
            </div>
          </li>
          <ul className="SlidebarList">
            {SlidebarData.map((val, key) => {
              return (
                <li
                  key={key}
                  className="row"
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div id="icon">{val.icon}</div>{" "}
                  <div id="title">{val.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  )
}

export default Sliderbar