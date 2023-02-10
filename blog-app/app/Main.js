// useReducer를 임포트해준다
import React, { useState, useReducer } from "react";
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
import ExampleContext from "./ExampleContext";

function Main() {
  // useReducer(a,b) 중 b 인자로 받는 초기상태값을 정의해준다
  // 초기 상태값을 객체로 받는데 여러가지 데이터를 동시에 받을 수 있다
  // 예를 들어서, 현재 로그인 상태, 나타나야할 팝업 알림 등등...
  const initialState = {
    // 이제 loggedIn 과 flashMessages의 초기상태를 리듀서 내부에서 동시에 관리해준다
    loggedIn: Boolean(localStorage.getItem("complexappToken")),
    flashMessages: [],
  };
  // 그리고 사실은 이러한 초기 상태들 값은 dispatch에 의해서 동시에 업데이트 된다
  // dispatch({type:"login"})
  // dispatch({type:"logout"})
  // dispatch({type:"flashMessages"}) 이런 식으로 말이다

  // 이 모든 것을 한번에 정의하는 것이 ourReducer함수이다
  // 특정 액션에 대해서 앱의 상태가 어떻게 업데이트 돼야하는지 정의해준다
  // ourReducer함수는 두 개의 인자를 전달 받는다
  // ourReducer(a,b)   그리고 특정 액션을 지칭하는 dispatch({type:"login"})
  // 안의 {type:"login"}이 action에 인자로 전달된다.
  function ourReducer(state, action) {
    // 리듀서에서는 switch 문법이 많이 활용된다
    // 스위치 문법에서는 ()에 여러가지의 케이스를 인자로 받고
    // 해당 케이스에 따른 결과 같을 명시해준다
    switch (action.type) {
      // 케이스1  "" 안에 들어가는 것이 type이다
      case "login":
        // 초기에 주어진 상태 값을 객체의 원본 조작하는 것이 아니라
        // 업데이트된 상태를 가지는 새로운 객체를 만들어야 하기 때문에
        // 함수의 인자로 받은 이전 state를 통해서 접근한다
        return { loggedIn: true, flashMessages: state.flashMessages };
      // 케이스2
      case "logout":
        return { loggedIn: false, flashMessages: state.flashMessages };
      // 케이스3
      case "flashMessage":
        return {
          loggedIn: state.loggedIn,
          flashMessages: state.flashMessages.concat(action.value),
        };
    }
  }
  // userReducer는 useState의 친척격이다. 상태를 관리하는 라이브러리이다
  // 그럼 언제는 리듀서를 쓰고 언제는 스테이트를 쓸까?
  // 복잡한 상태 로직을 다룰 때에 리듀서를 쓴다
  // 리듀서 함수를 정의해준다.
  // useReducer함수는 두개의 값을 리턴한다
  // const [a,b]
  // a => 현재 상태
  // b => 업데이트 상태
  // 그렇다면 dispatch가 set스테이트의 b인자와 다른 점은 무엇일까?
  // 우선 useReducer 함수가 무엇을 인자로 받는지 살펴보자
  // useReducer(a,b)
  // a는 함수를 b는 초기상태를 인자로 받는다. 각각은 위에서 정의 해준다
  const [state, dispatch] = useReducer(ourReducer, initialState);
  // 즉 정리해보면 useReducer 함수가 호출되면 initialState가 정의되고
  // 그 초기상태가 ourReducer함수로 인자로 전달된다.

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
          <Route path="/post/:id" element={<ViewSinglePost />} />
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
