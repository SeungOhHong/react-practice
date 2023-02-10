// useState를 임포트해준다
import React, { useEffect, useState } from "react";
import Page from "./Page";
// 엑시오스 임포트
import Axios from "axios";

function CreatePost() {
  // 하드코딩된 value를 저장하는 것이 아니라 사용자가 입력한
  // 값을 DB에 저장하기 위해서 useState함수로 title과 body의 상태를 추적한다
  // 또한 input태그에 변화를 체킹하는 onChange 속성을 추가해준다
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // 이 함수는 비동기로 작동하게 된다
  async function handleSubmit(e) {
    // 브라우저 초기설정 막기
    e.preventDefault();
    try {
      // post(a,b)
      // a=> url
      // b=> post 전송할 데이터 객체묶음
      // 이제 url에서 계속해서 반복되는 localhost:8080을 생략하는 방법을 알아보자
      // Main.js로 이동한다
      // await키워드(비동기처리)
      await Axios.post("/create-post", {
        // 현재 post요청으로 전송할 데이터는 총 3개이다
        // 로컬스토리지의 토큰을 전송하는 이유는
        // 서버가 우리의 요청을 신뢰해도 된다는 근거를 제공하는 역할을 한다
        title,
        body,
        token: localStorage.getItem("complexappToken"),
        // 이제 게시물 생성 버튼을 클릭하면 몽고DB에 저장되는 것을 확인할 수 있다
        // 하지만 이 시점에서는 제목과 본문이 공백상태에서 제출을 누르면 DB에 저장되지 않는다
        // 그래서 form validation 처리를 해줘야한다
      });
      console.log("New post was created.");
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <Page title="Create New Post">
      {/* 이제 handleSubmit 함수를 만들어서
      우리가 create-post버튼을 누르면 백엔드 서버에 post요청을 전송하도록 해보자(위에서 정의) */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* jsx문법: label for => htmlFor */}
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            // onChange 속성을 추가해준다
            onChange={(e) => setTitle(e.target.value)}
            // jsx 문법에서는 속성이 autofocus가 아니라 autoFocus이다
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            // jsx문법: autocomplete => autoComplete
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            // onChange 속성을 추가해준다
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
}

export default CreatePost;
