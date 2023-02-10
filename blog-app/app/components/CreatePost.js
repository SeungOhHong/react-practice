import React, { useEffect, useState } from "react";
// 리액트 라우터에서 제공하는 useNavigate를 임포트해준다
// 브라우저 히스토리에 접근할 수 있다
import { useNavigate } from "react-router-dom";
import Page from "./Page";
import Axios from "axios";

function CreatePost(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  // useNavigate함수를 정의해준다
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("complexappToken"),
      });
      // 새로 생성된 게시물에 대한 url을 재전송해준다
      // 어떤 식으로? 리액트 라우터는 브라우저 히스토리를 관리하고 있다
      // 그리고 그 히스토리에 접근하기 위해서 navigate라는 함수를 제공한다
      // () 안에 명시한 파라미터 url을 재전송(리다이렉트) 한다
      // post 요청을 서버로 전송하면 서버에서는 응답으로 새로 생성된 포스트에 대한 id를 보내준다
      // 그것을 이용하기 위해서 response 변수에 응답 객체를 담은 후
      // response.data로 접근하여 해당 게시물에 리다이렉트한다
      navigate(`/post/${response.data}`);
      // 게시물을 생성하면 해당 게시물에 대한 유니크한 id로 url이 리다이렉트 되는 것을
      // 확인 할 수 있다. /post/:id 의 형식
      console.log("New post was created.");
    } catch (e) {
      console.log("There was a problem.");
    }
  }

  return (
    <Page title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
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
