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
import FlashMessages from "./components/FlashMessages";
// 컨텍스트 생성 라이브러리를 메인 컴포넌트에 임포트해준다
import ExampleContext from "./ExampleContext";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    /* 그래서 모든 컴포넌트를 하나의 ExampleContext.Provider라는 div로 감싼 후 
    몇 겹이 레이어링 돼있든지 간에 해당 props 값을 컨슘할 수 있도록
    처리해주면 props를 재사용하기 쉬울 것이다 
    {} 안에 있는 값은 몇 겹의 자식 컴포넌트가 네스팅 돼있든지 간에 해당 값에 접근할 수 있다 */
    <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
      {/* 컨텍스트를 {} 로 감싸면 여러 값을 자식 컴포넌트로 상속할 수 있다. */}
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
          <Route path="/post/:id" element={<ViewSinglePost />} />
          {/* 이제 CreatePost 컴포넌트에서 수동으로 addFlashMessage를 넘겨줄 필요가 없다 */}
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
