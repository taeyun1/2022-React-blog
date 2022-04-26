import React from "react";
import { Link } from "react-router-dom";

import "./login.css";
function Login() {
  return (
    <div className="Login">
      <span className="LoginTitle">로그인</span>
      <form className="LoginForm">
        <label>이메일</label>
        <input
          className="LoginInput"
          type="email"
          placeholder="이메일을 입력하세요.."
        />
        <label>비밀번호</label>
        <input
          className="LoginInput"
          type="password"
          placeholder="비밀번호를 입력하세요.."
        />
        <button className="LoginButton">
          <Link className="link" to="/login">
            로그인
          </Link>
        </button>
      </form>
      <button className="LoginRegisterButton">
        <Link className="link" to="/register">
          회원가입
        </Link>
      </button>
    </div>
  );
}

export default Login;
