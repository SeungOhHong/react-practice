import React from "react";
import Page from "./Page";
// Axios는 요청을 전송하기에 아주 편리한 라이브러리이다
import Axios from "axios";

// 사용자가 form을 제출하면 폼에 입력한 값들을 백엔드 서버로 보낸 후
// DB에 저장에 저장한다

function HomeGuest() {
  // 브라우저의 기본 동작을 막아준다
  // 왜냐하면 브라우저의 기본 셋팅은 폼을 제출하면 새로운 URL을 전송하고
  // 새로운 HTML을 불러오기 때문이다
  // 우리가 현재 해야할 일은 네트워크 요청을 백엔드 서버로 전송하는 것이다
  async function handleSubmit(e) {
    // try catch로 axios 요청을 묶어줌으로써 에러를 핸들링 할 수 있도록 처리해준다
    e.preventDefault();
    try {
      // 프론트엔드 요청 전송에는 Axios 라이브러리를 사용한다
      // npm install axios
      // (자바스크립트에서는 fetch를 사용)
      // 백엔드 서버로 post 요청을 전송한다
      // post(a,b)  두 개의 매개변수를 받는다
      // a => 요청을 전송할 서버의 URL
      // b => 서버로 전송할 데이터
      await Axios.post(
        // 또한 Axios는 비동기로 처리되기 때문에 이 요청이 서버에 언제 전송이 완료되는지
        // 그 시점을 명확히 알 수 없다. 때문에 asyc - await 키워드로 감싸줘야한다
        // 그래야 서버 요청이 성공했을 때에 성공 메세지가 뜨게된다
        // a
        "http://localhost:8080/register",
        // b
        {
          username: "test2",
          email: "test2@test.com",
          password: "qwerty123456",
        }
      );
      // 요청 성공했을 때의 메세지
      console.log("User was successfully created.");
    } catch (e) {
      // 요청 실패했을 때의 메세지
      console.log("There was an error.");
    }
  }
  // 이제 폼을 제출하면 DB에 제출한 값이 저장된 것을 확인할 수 있다

  return (
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
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                id="username-register"
                name="username"
                className="form-control"
                type="text"
                placeholder="Pick a username"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password-register" className="text-muted mb-1">
                <small>Password</small>
              </label>
              <input
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
