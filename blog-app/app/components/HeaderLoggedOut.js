// useState와 Axios 라이브러리 임포트
import React, { useEffect, useState } from "react";
import Axios from "axios";

// 최근 유저 이름과 패스워드의 성태를 추적해야하기 때문에
// useState를 이용해준다
function HeaderLoggedOut() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // 해당 함수는 비동기로 작동한다
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // 액시오스로 백엔드 서버에서 유저 이름과 패스워드를 post 요청한다
      // 요청에 대한 응답 결과를 받아볼 수 있도록 post요청을 변수에 담아준다
      const response = await Axios.post(
        // a - 요청할 서버의 URL
        "http://localhost:8080/login",
        // b - 서버로 전송하는 데이터
        {
          username,
          password,
        }
      );
      // 그리고 response.data로 응답 결과 데이터 객체 에 접근한다
      // 만약 DB에 있는 올바른 요청을 전송해서 응답 데이터를 받았다면
      // 해당 데이터를 보여주고
      if (response.data) {
        console.log(response.data);
      }
      // 그렇지 않다면 valid한 요청을 다시 할 것을 사용자에게 명한다
      else {
        console.log("Incorrect username / password.");
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    // 폼 제출하면 handleSubmit 함수 실행(위에서 정의)
    <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
      <div className="row align-items-center">
        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
          <input
            // 유저 이름이 바뀌면 setState함수 실행
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
            // 유저 패스워드가 바뀌면 setState함수 실행
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
