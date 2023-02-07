// 리액트 핵심 라이브러리 불러오기
import React from "react";
import ReactDOM from "react-dom/client";
// npm run dev
// My Components 컴포넌트 폴더에서 import 해준다
// app폴더 아래에 component 폴더를 만들고 속성에 따라서 여러 컴포넌트로 쪼갤 수 있다.
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

// 훨씬 페이지 구조를 쉽게 파악할 수 있다.
function Main() {
  return (
    <>
      <Header />
      <HomeGuest />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
