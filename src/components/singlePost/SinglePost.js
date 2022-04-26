import React from "react";
import "./singlePost.css";

function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        <img
          src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          alt=""
          className="SinglePostImg"
        />
        <h1 className="SinglePostTitle">
          SinglePostTitle
          <div className="SingPostEdit">
            <i className="SingPostIcon fa-regular fa-pen-to-square"></i>
            <i className="SingPostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>

        <div className="SinglePostInfo">
          <span className="SinglePostAuthor">
            글쓴이 : <b>Safak</b>
          </span>
          <span className="SinglePostDate">1시간 전</span>
        </div>
        <p className="SinglePostDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quos
          animi itauaeransonsectetur adipisicing elit. Et quos animi itaque
          consequuntur in provident aperiam a consequatur, est ex earum repellat
          quaeransequuntur in provident aperiam a consequatur, est ex earum
          repellat m, dolor sit amet consectetur adipisicing elit. Et quos animi
          itauaeransonsectetur adipisicing elit. Et quos animi itaque
          consequuntur in provident aperiam a consequatur, est ex earum repellat
          quaeransequuntur in provident aperiam a consequatur, est ex earum
          repellat quaerque consequuntur in provident aperiam a consequatur, est
          ex earum repellat quaeransonsectetur adipisicing elit. Et quos animi
          itaque consequuntur in provident aperiam a consequatur, est ex earum
          repellat quaeransequuntur in provident aperiam a consequatur, est ex
          earum repellat quaerat ext exequuntur in provident aperiam a
          conseqaperiam a consequatur, est ex earum repellat quaeraquaerque
          consequuntur in provident aperiam a consequatur, est ex earum repellat
          quaeransonsectetur adipisicing elit. Et quos animi itaque consequuntur
          in provident aperiam a consequatur, est ex earum repellat
          quaeransequuntur in provident aperiam a consequatur, est ex earum
          repellat quaerat ext exequuntur in provident aperiam a consequatur,
          est ex earum repellat quaerat ext expedita similique ab nam nisi
          laborum saepe!
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
