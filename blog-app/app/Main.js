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
// 게시물에 대한 컴포넌트를 임포트 해준다
import ViewSinglePost from "./components/ViewSinglePost";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
        {/* 모든 게시물의 url은 /post/ 까지는 동일하겠지만 게시물에 따라서
        유일한 id를 가진다. 그것이 :id 값으로 들어가게 된다  */}
        {/* 이제 리액트 라우터를 이용해서 게시물을 생성하면 생성된 게시물에 대한
        url을 재전송하도록 셋팅해줘야 한다
        그러기 위해서 CreatePost.js 컴포넌트로 이동한다 */}
        <Route path="/post/:id" element={<ViewSinglePost />} />
        <Route path="/create-post" element={<CreatePost />} />
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
