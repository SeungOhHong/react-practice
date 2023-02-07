import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// url에 따라서 적합한 컴포넌트가 나오게끔 하기 위해서 리액트 라우터를 설치해준다
// 트러블 슈팅
// Compiled with problems: Module not found: Error: Can't resolve 'react-router-dom'
// npm i -s react-router-dom

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";

function Main() {
  return (
    // url과 컴포넌트를 일치시켜주는 리액트 라우터를 사용하기 위해서는
    // 컴포넌트를 BrowserRouter로 감싸줘야한다
    <BrowserRouter>
      <Header />
      {/* 라우터 컴포넌트 안에서 url과 해당하는 컴포넌트를 연결시켜준다 */}

      <Routes>
        <Route path="/" element={<HomeGuest />} />
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
