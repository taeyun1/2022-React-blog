import React from "react";
import "./post.css";

function Post() {
  return (
    <div className="Post">
      <img
        className="postImg"
        src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores
        dolor possimus quos asperiores excepturi vel magni. Corrupti
        consectetur, cupiditate debitis laboriosam officia, deserunt vitae
        consequuntur eaque numquam dolorem rem? Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Ullam maiores dolor possimus quos
        asperiores excepturi vel magni. Corrupti consectetur, cupiditate debitis
        laboriosam officia, deserunt vitae consequuntur eaque numquam dolorem
        rem?
      </p>
    </div>
  );
}

export default Post;
