// useState를 임포트한다
import React, { useState } from "react";
import Page from "./Page";
import Axios from "axios";
// 이제 세 개의 state를 만들어보자
// 1. 사용자이름 2. 이메일 3. 비밀번호
// useState(a,b) 는 두 개의 배열을 반환한다. rest 문법을 이용해서 담아 준다
function HomeGuest() {
  // a 는 현재 값이고 b 는 값을 업데이트하기 위해서 호출할 함수이다
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8080/register", {
        // 이제 하드코딩이었던 값들을 사용자가 입력한 업데이트 된 값으로 변경해준다
        // 모던 자바스크립트에서는 값과 프로퍼티가 동일할 경우 username: username 이라고 적을 필요가 없다
        username,
        email,
        password,
      });
      console.log("User was successfully created.");
    } catch (e) {
      console.log("There was an error.");
    }
  }

  return (
    // 이제 3개의 필드(항목)에 onChange 이벤트 리스너를 추가해준다
    <Page title="Welcome!" wide={true}>
      <div className="row align-items-center">
        <div className="col-lg-7 py-3 py-md-5">
          <h1 className="display-3">Remember Writing?</h1>
          <p className="lead text-muted">
            Are you sick of short tweets and impersonal &ldquo;shared&rdquo;
            posts that are reminiscent of the late 90&rsquo;s email forwards? We
            believe getting back to actually writing is the key to enjoying the
            internet again.
          </p>
        </div>
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            {/* 1. 유저 이름 */}
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                // 폼의 이 항목에 변화가 있을 경우 => setUsername함수가 실행되고
                // 괄호 안의 값을 업데이트 시킨다.
                onChange={(e) => setUsername(e.target.value)}
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autoComplete="off"
              />
            </div>
            {/* 2. 유저 이메일 */}
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
              />
            </div>
            {/* 3. 유저 비밀번호 */}
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-lg btn-success btn-block"
            >
              Sign up for ComplexApp
            </button>
          </form>
        </div>
      </div>
    </Page>
  );
}

export default HomeGuest;
