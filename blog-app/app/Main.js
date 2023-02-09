// useState를 임포트해준다
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
// Home 컴포넌트를 임포트 해준다
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";

function Main() {
  // Header에 있었던 login 상태를 다루는 state를 가장 탑레벨 컴포넌트인 Main 컴포넌트로
  // 올려준다.
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );

  return (
    <BrowserRouter>
      {/* 그 후 Header의 props로 state를 넘겨줌으로써 Header에서도 로그인 상태를 추적할 수 있게된다 */}
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        {/* 로그인 유무에 따라서 다른 컴포넌트로 라우팅을 해준다
        로그인 상태 -> Home 컴포넌트
        비로그인 상태 -> HomeGuest 컴포넌트
        를 보여준다. */}
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        {/*리액트에서는 상태관리와 상태 접근하는 것이 중요하다.  
        현재 Main컴포넌트에서는 로그인 상태를 추적 할 수 있는 방법이 없다.
        해당 정보는 Header 컴포넌트에 저장돼있기 때문이다. 
        때문에 여기서 솔루션은 state를 lifting stay up 하는 것이다
        이는 가장 컴포넌트 트리에서 가장 탑레벨의 컴포넌트로 state를 올려서
        자식 컴포넌트들이 state를 props로 상속 받게 하는 방법이다 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
