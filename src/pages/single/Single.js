import React from "react";
import "./single.css";

import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
  return (
    <div className="Single">
      {/* post */}
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
