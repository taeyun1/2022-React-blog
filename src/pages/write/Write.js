import React from "react";
import "./write.css";

function Write() {
  return (
    <div className="Write">
      <img
        className="WriteImg"
        src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        alt=""
      />
      <form className="WriteForm">
        <div className="WriteFormGroup">
          <label htmlFor="fileInput">
            <i className="WriteIcon fa-solid fa-plus"></i>
          </label>
          <input type={"file"} id="fileInput" style={{ display: "none" }} />
          <input
            type={"text"}
            placeholder="제목을 입력하세요"
            className="WriteInput WriteTitle"
            autoFocus={true} // 새로고침 하면 자동으로 포커스 맞춰짐
          />
        </div>

        <div className="WriteFormGroup">
          <textarea
            placeholder="당신의 이야기를 적어보세요..."
            type={"text"}
            className="WriteInput WriteText"
          ></textarea>
        </div>
      </form>
      <div className="WriteSubmitBtn">
        <button className="WriteSubmit go-back">
          <i className="fa-solid fa-chevron-left"></i> 뒤로가기
        </button>
        <button className="WriteSubmit">출간하기</button>
      </div>
    </div>
  );
}

export default Write;
