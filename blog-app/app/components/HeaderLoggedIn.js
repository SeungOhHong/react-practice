// 로그인 상태일 때 보여줄 ui
import React, { useEffect } from "react";

function HeaderLoggedIn(props) {
  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="text-white mr-2 header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 header-chat-icon text-white">
        <i className="fas fa-comment"></i>
        <span className="chat-count-badge text-white"> </span>
      </span>
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
        />
      </a>
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      <button
        // 로그아웃 버튼을 누르면 로그인 상태가 false로 변경된다
        onClick={() => props.setLoggedIn(false)}
        className="btn btn-sm btn-secondary"
      >
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
