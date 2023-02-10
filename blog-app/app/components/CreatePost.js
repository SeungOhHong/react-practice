// Main 컴포넌트를 감싸준 후 자식 컴포넌트에서 useContext를 임포트해주면
// 넘겨받은 값을 컨슘할 준비가 다 된 것이다
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Page from "./Page";
import Axios from "axios";
// ExampleContext 파일을 임포트해준다
import ExampleContext from "../ExampleContext";

function CreatePost(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();
  // 어떤 컨텍스트를 사용할 것인지에 대한 것이 () 안에 들어간다
  // 이것이 우리가 ExampleContext라는 컨텍스트 파일을 생성한 이유이다.
  // useContext가 하나의 값을 리턴하지 않고 여러개를 리턴하기 때문에
  // addFlashMessage를 {}로 감싸서 리턴한 값들을 비구조할당을 이용하여 여러값을 담아준다
  const { addFlashMessage } = useContext(ExampleContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/create-post", {
        title,
        body,
        token: localStorage.getItem("complexappToken"),
      });
      // Redirect to new post url
      // 컨텍스트를 이용하여 값을 받기 때문에 더이상 props. 으로 해당 값에 접근할 필요가 없다.
      addFlashMessage("Congrats, you successfuly created a post!");
      navigate(`/post/${response.data}`);
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
