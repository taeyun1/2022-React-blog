import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="Header">
      <div className="HeaderTitles">
        <span className="HeaderTitleSm">React & Node</span>
        <span className="HeaderTitleLg">Blog</span>
      </div>
      <img
        className="HeaderImg"
        src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        alt=""
      />
    </div>
  );
}

export default Header;
