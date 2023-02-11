import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:8080";

// Example 컨텍스트 파일을 임포트하는 라인을 삭제하고
// state와 dispatch 컨텍스트 파일을 임포트 해준다
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

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

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexappToken")),
    flashMessages: [],
  };

  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        return { loggedIn: true, flashMessages: state.flashMessages };
      case "logout":
        return { loggedIn: false, flashMessages: state.flashMessages };
      case "flashMessage":
        return {
          loggedIn: state.loggedIn,
          flashMessages: state.flashMessages.concat(action.value),
        };
    }
  }

  const [state, dispatch] = useReducer(ourReducer, initialState);
  // state를 이용해서 추적했던 로그인 상태와 팝업 알림 상태를 리듀서로 대체해보자

  return (
    // state와 dispatch를 컨텍스트 제공자에 통과시켜서 컴포넌트에서 해당 값에
    // 접근 할 수 있도록 해줘야 한다.
    // <ExampleContext.Provider value = {{state,dispatch}}/>
    // 위 처럼 상태를 추적해도 작동하는데에 이상없다
    // 하지만 그것은 최적의 성능을 내는 방법은 아니다.
    // 왜냐하면 모든 컴포넌트가 전역 상태에 접근할 필요는 없기 때문이다.
    // 어떤 컴포넌트들은 dispatch에만 접근하면 된다.
    // => 전역 상태에 변화가 생길 때마다 모든 컴포넌트가 리렌더링 되기 때문에 비효율적이다.
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {/* 리액트 공식문서에서 추천하는 방법은 이런 식으로
        두개의 컨텍스트 제공자를 이용하는 것이다
      하나는 State를 위한 제공자, 나머지 하나는 dispatch를 위한 제공자 */}
        <BrowserRouter>
          {/* 이제 flashMessages 프로퍼티는 state 객체에 존재하기 때문에
          state. 으로 접근해준다  */}
          <FlashMessages messages={state.flashMessages} />
          {/* 또한 더이상 수동으로 loggedIn 프로퍼티를 전달할 필요가 없다    */}
          <Header />
          <Routes>
            <Route
              path="/"
              // 이제 더이상 로그인 상태를 useState로 추적하지 않기 때문에
              // state 객체로 loggedIn으로 상태에 접근해준다.
              // 이렇게 useState 로 관리하던 상태를 useReducer로 관리하면
              // 상태 관리가 훨씬 쉽고 전체적으로 코드가 정돈된 느낌을 준다
              // 그리고 상태관리가 쉬운 장점은 컴포넌트의 개수가 늘어나며 늘어날수록 빛을 발휘할 것이다
              // 왜냐하면 모든 복잡한 로직을 한 곳에서 관리하기 때문이다.
              element={state.loggedIn ? <Home /> : <HomeGuest />}
            />
            <Route path="/post/:id" element={<ViewSinglePost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
