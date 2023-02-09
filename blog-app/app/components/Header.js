// useState 임포트
import React, { useState } from "react";
import { Link } from "react-router-dom";
// 로그인 상태일 때의 컴포넌트 임포트
import HeaderLoggedOut from "./HeaderLoggedOut";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header() {
  // 로그인 유무에 따라서 알맞은 컴포넌트를 불러오게끔 한다
  // 때문에 로그인 상태를 추적하기 위해서 useState를 사용한다
  const [loggedIn, setLoggedIn] = useState();

  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <Link to="/" className="text-white">
            ComplexApp
          </Link>
        </h4>
        {/* 삼항연산자 이용 
        loggedIn 이 True이면 로그인 컴포넌트를 호출
        False이면 로그아웃 컴포넌트를 호출*/}
        {loggedIn ? (
          <HeaderLoggedIn setLoggedIn={setLoggedIn} />
        ) : (
          <HeaderLoggedOut setLoggedIn={setLoggedIn} />
        )}
        {/* 우리가 올바른 유저명과 비밀번호를 입력하고 요청을 전송했다면 
        서버는 그에 대한 응답으로 데이터를 보내줄 것이다 
        그러면 우리는 업데이트 된 해당 상태를 True로 set해줘야한다
        하지만 이 시점에서 서버에 요청을 보낸 HeaderLoggedOut파일은
        현재 로그인 상태를 추적하는 loggedIn 스테이트에 접근할 수가 없다  
        때문에 컴포넌트에 setLoggedIn prop을 넘겨준다*/}
      </div>
    </header>
  );
}

export default Header;
