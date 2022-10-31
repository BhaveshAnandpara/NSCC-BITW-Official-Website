import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";

export default function Navbar() {
  return (
    <>
      <div className="container" id="navbar1">
        <nav className="navbar navbar-expand-lg mx-ms-4 md-5" id="mainnav">
          <div className="" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active mx-md-5 bolder">
                <NavLink className="nav-link bolder" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-md-4 bolder">
                <NavLink className="nav-link bolder" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mx-md-4 bolder">
                <NavLink className="nav-link bolder" to="/theteam">
                  The Team
                </NavLink>
              </li>
              <li className="nav-item mx-md-4 bolder">
                <NavLink className="nav-link di bolder" to="/eventpage">
                  Events
                </NavLink>
              </li>
              <li className="nav-item mx-md-4 bolder">
                <NavLink className="nav-link di bolder" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container" id="navbar2">
        <nav className="navbar navbar-expand-md " id="mobailnav">
          <div className="ml-2 " id="navbarNav">
            <ul className="navbar-nav d-inlime">
              <li className="nav-item active m-3 ">
                <NavLink className="nav-link " to="/">
                  <HomeIcon />
                </NavLink>
              </li>
              <li className="nav-item m-3 ">
                <NavLink className="nav-link " to="/aboutus">
                  <ViewInArIcon />
                </NavLink>
              </li>
              <li className="nav-item m-3 ">
                <NavLink className="nav-link" to="/theteam">
                  <PeopleOutlineOutlinedIcon />
                </NavLink>
              </li>
              <li className="nav-item  m-3">
                <NavLink
                  className="nav-link "
                  to="/eventpage"
                >
                  <DesktopWindowsOutlinedIcon />
                </NavLink>
              </li>
              <li className="nav-item  m-3">
                <NavLink
                  className="nav-link "
                  to="/contactus"
                >
                  <ChatBubbleOutlineRoundedIcon />
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
