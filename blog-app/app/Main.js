// 게시물 생성에 대한 알림 팝업은 main 컴포넌트에서 구현해야한다
// 왜냐하면 게시물을 생성한 후에 즉시 다른 페이지로 이동하더라도
// 3~5초 간은 그 알림 팝업이 화면에 띄워져야 하기 때문이다

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8080";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import CreatePost from "./components/CreatePost";
import ViewSinglePost from "./components/ViewSinglePost";
// 알림 팝업 컴포넌트를 임포트 해준다
import FlashMessages from "./components/FlashMessages";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );
  // 알림 팝업의 상태를 추적해준다
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    // concat 메서드는 기존 배열을 수정하지 않고 새로운 배열을 리턴한다
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <BrowserRouter>
      {/* 알림 팝업 컴포넌트를 컴포넌트를 라우팅 해준다 */}
      {/* 알림 팝업 컴포넌트를 유연하게 만들어줘야한다
      그러기 위해서 모든 메세지의 현상태를 담고 있는 flashMessages변수를 props로 넘겨준다 */}
      <FlashMessages messages={flashMessages} />
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        <Route path="/post/:id" element={<ViewSinglePost />} />
        <Route
          path="/create-post"
          // addFlashMessage 함수를 포스트 생성 컴포넌트에 props로 넘겨준다
          // 이제 게시물을 생성하면 유동적으로 알림 팝업을 보여준다
          // 하지만 이런 식으로 모든 컴포넌트마다 알림 팝업을 띄우는 속성을
          // 수동으로 추가해주는 것은 비효율적이다. 왜냐하면 재사용될 여지가 많으니까
          // 예를 들어서, 게시물을 생성할 때, 게시물을 삭제할 때, 회원가입을 했을 때 등등
          // 그래서 이에 대한 처리가 필요하다. 상태를 좀 더 효율적으로 관리할 필요가 있다.
          element={<CreatePost addFlashMessage={addFlashMessage} />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/terms" element={<Terms />} />
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
