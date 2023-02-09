import React from "react";
import { Link } from "react-router-dom";
// 로그아웃 상태에서의 헤더 상단을 보여주는 컴포넌트를 임포트한다
import HeaderLoggedOut from "./HeaderLoggedOut";

function Header() {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {/* 로그인 상태에 따라서 헤더의 일부분만이 변경되도록 해야한다 
        로그아웃 상태에서의 컴포넌트를 새로 만들어준다(HeaderLoggedOut)*/}
        <HeaderLoggedOut />
      </div>
    </header>
  );
}

export default Header;
