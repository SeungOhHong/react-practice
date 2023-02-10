import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header(props) {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {/* Header에도 수동으로 props를 넘겨주고 있다
        이 경우에는 2단계 깊이에 있지만 앱에 따라서 더 깊이 있는
        컴포넌트에 넘겨줘야한다면 일일이 내려가면서 넘겨줘야한다
        그래서 context를 이용한다*/}
        {props.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        {/* Header 컴포넌트에서도 더이상 setLoggedIn을 수동으로 써줄 필요가 없다. 대신 HeaderLoggedIn 컴포넌트에 컨텍스트를
        임포트해준다 */}
      </div>
    </header>
  );
}

export default Header;
