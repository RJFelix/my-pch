import React from "react";
import { Link } from "react-router";

export default function Header(props) {
  return(
    <div className="header">
      <header className="ui inverted menu">
        <div className="header item">
          <Link to="/">
            MyPCH
          </Link>
        </div>
        <div className="active item">
          <Link to="#">
            Places
          </Link>
        </div>
        <div className="right menu">
          <div className="item">
            <Link to="#">
              Log In
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}