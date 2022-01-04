import React, { useEffect, useState } from "react";
import "../style/nav.css";
import logo from "../assets/images/logoBoot.png";
import { Link } from "react-router-dom";
function Nav() {
  const [state, setState] = useState({
    classNav: "Nav NavCont",
    logoCont: "Nav logoCont",
    middleList: "Nav middleList",
  });
  const [switchName, setSwitchName] = useState();
  let show = () => {
    if (state.classNav === "Nav NavCont") {
      setState({
        classNav: "toggle NavCont",
        logoCont: "toggle logoCont",
        middleList: "toggle middleList",
      });
    } else if (state.classNav !== "Nav NavCont") {
      setState({
        classNav: "Nav NavCont",
        logoCont: "Nav logoCont",
        middleList: "Nav middleList",
      });
    }
  };
  useEffect(() => {
    if (localStorage.getItem("users")) {
      setSwitchName("Profile");
    }
    if (!localStorage.getItem("logged_in")) {
      setSwitchName("Log In");
    }
  });

  return (
    <>
      <div className={state.classNav}>
        <div className={state.logoCont}>
          <div className="Nav brand">
            <Link to={"/"}>
              <img
                className="Nav logoImg"
                src={logo}
                style={{ width: "110px", height: "40px" }}
                alt="logo"
              />
              <p>ShuShop</p>
            </Link>
          </div>
          <img
            id="Btn"
            onClick={show}
            src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"
            alt="toggle Icon"
          />
        </div>
        <ul className={state.middleList} style={{ listStyle: "none" }}>
          <Link to={"/"}>
            <li className="listItem">Home </li>
          </Link>

          <Link to={"/shop"}>
            <li className="listItem">Shop</li>
          </Link>
          <Link to={"/cart"}>
            <li className="listItem">cart</li>
          </Link>
          <Link to="/account">
            <li className="listItem"> {switchName}</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Nav;
