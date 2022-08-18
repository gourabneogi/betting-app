import React from "react";
import { defaultButton, userData } from "../data/Navbar.data";
import "./Navbar.css";
const Navbar = (props) => {
  const buttonList =
    props.newButton
      ? [props.newButton, ...defaultButton]
      : defaultButton;
  return (
    <div className="container-class">
      <div className="wrapper-class">
        <div className="left">
          <img
            className="image"
            src={userData.profileImage}
            alt={userData.profileImageAlt}
          />
          <div className="about-nav">
            <span className="text1">{userData.name} </span>
            <br />
            <span className="text2">Coins: {userData.coins} </span>
          </div>
        </div>

        <div className="right">
          {buttonList.map((value, key) => {
            const active = value === props.activeButton ? "button-container active" : "button-container"
            return (
              <button key={key} className={active}>
                <div className="button-text">
                {value}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
