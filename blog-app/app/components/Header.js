import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header() {
  // useState에 initial value(초기값)를 줄 수 있다.
  // 만약 로컬 스토리지에 토큰이 존재한다면 그건 True인 상태이다
  // 없는 경우에는 False를 반환할 것이다
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
    // 새로고침 하더라도 로그인 상태가 유지 되는 것을 확인할 수 있다
  );

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {loggedIn ? (
          <HeaderLoggedIn setLoggedIn={setLoggedIn} />
        ) : (
          <HeaderLoggedOut setLoggedIn={setLoggedIn} />
        )}
      </div>
    </header>
  );
}

export default Header;
