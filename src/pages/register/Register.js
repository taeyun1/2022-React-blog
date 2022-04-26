import React from "react";
import { Link } from "react-router-dom";

import "./register.css";
function Register() {
  return (
    <div className="Register">
      <span className="RegisterTitle">회원가입</span>
      <form className="RegisterForm">
        <label>닉네임</label>
        <input
          className="RegisterInput"
          type="text"
          placeholder="닉네임을 입력하세요.."
        />
        <label>이메일</label>
        <input
          className="RegisterInput"
          type="email"
          placeholder="이메일을 입력하세요.."
        />
        <label>비밀번호</label>
        <input
          className="RegisterInput"
          type="password"
          placeholder="비밀번호를 입력하세요.."
        />
        <button className="RegisterButton">
          <Link className="link" to="/register">
            회원가입
          </Link>
        </button>
      </form>
      <button className="RegisterLoginButton">
        <Link className="link" to="/login">
          로그인
        </Link>
      </button>
    </div>
  );
}

export default Register;
