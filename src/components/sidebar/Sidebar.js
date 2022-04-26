import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="SidebarItem">
        <span className="SidebarTitle">ABOUT ME</span>
        <img
          className="SidebarImg"
          src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet
          consectetur
        </p>
        <div className="SidebarItem">
          <span className="SidebarTitle">CATEGORIES</span>
          <ul className="SidebarList">
            <li className="SidebarListItem">Life</li>
            <li className="SidebarListItem">Music</li>
            <li className="SidebarListItem">Style</li>
            <li className="SidebarListItem">Sport</li>
            <li className="SidebarListItem">Tech</li>
            <li className="SidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="SidebarItem">
          <span className="SidebarTitle">FOLLOW US</span>
          <div className="SidebarSocial">
            <i className="SidebarIcon fa-brands fa-facebook-square"></i>
            <i className="SidebarIcon fa-brands fa-twitter"></i>
            <i className="SidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="SidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
