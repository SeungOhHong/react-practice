import React, { useEffect, useState } from "react";
import Axios from "axios";

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // 로그인에 성공하면 서버에서 응답으로 데이터를 보내준다
  // 그 데이터와 브라우저의 로컬스토리지 특성을 이용해서
  // 우리 앱이 로그인 상태를 기억할 수 있도록 만들 수 있다
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:8080/login", {
        username,
        password,
      });
      if (response.data) {
        // 서버에서 응답으로 온 response.data 객체를 브라우저 로컬스토리지에 저장한다
        // 로그인을 하면 서버에서 세가지 값을 객체로 반환한다
        // 1. token, 2. username, 3. avatar
        // localStorage.setItem(a,b)
        // a 는 우리가 저장하기를 원하는 데이터의 이름이다(아무렇게나 지어도 된다)
        // b 는 저장하려는 데이터이다
        localStorage.setItem(
          // a
          "complexappToken",
          // b
          response.data.token
        );
        localStorage.setItem("complexappUsername", response.data.username);
        localStorage.setItem("complexappAvatar", response.data.avatar);
        // 브라우저의 F12를 누르고 Application 탭으로 가보면 로컬 스토리지에 저장된다.
        // 브라우저를 새로고침 하더라도 로컬스토리지에 있는 데이터는 소멸 되지 않는 것을 볼 수 있다
        props.setLoggedIn(true);
      } else {
        console.log("Incorrect username / password.");
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}

export default HeaderLoggedOut;
