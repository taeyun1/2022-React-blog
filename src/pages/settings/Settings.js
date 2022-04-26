import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";
function Settings() {
  return (
    <div className="Settings">
      <div className="SettingsWrapper">
        <div className="SettingsTitle">
          <span className="SettingsUpdateTitle">계정 업데이트</span>
          <span className="SettingsDeleteTitle">계정 삭제</span>
        </div>

        <form className="SettingsForm">
          <label htmlFor="">프로필 사진</label>

          <div className="SettingsPP">
            <img
              className="SettingsPP-img"
              src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="SettingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>

          <label>이름</label>
          <input type="text" placeholder="Safak" />

          <label>이메일</label>
          <input type="email" placeholder="Safak@gamil.com" />

          <label>비밀번호</label>
          <input type="password" />

          <button className="SettingsSubmit">수정하기</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
