import React, { useEffect } from "react";
// 링크 컴포넌트를 사용하기 위해서 임포트해준다
import { Link } from "react-router-dom";

function HeaderLoggedIn(props) {
  function handleLogout() {
    props.setLoggedIn(false);
    localStorage.removeItem("complexappToken");
    localStorage.removeItem("complexappUsername");
    localStorage.removeItem("complexappAvatar");
  }

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
          src={localStorage.getItem("complexappAvatar")}
        />
      </a>
      {/* 브라우저가 완전히 새로운 HTML문서를 처리하도록 할 필요없이 
      클라이언트 사이드에서 리액트 라우터를 이용하여(Link 컴포넌트사용)
      create post 버튼을 클릭하면 create-post 라우트로 이동되도록 설정해준다 */}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
