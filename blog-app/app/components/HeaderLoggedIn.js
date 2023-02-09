import React, { useEffect } from "react";

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
          // 로그인시에 하드코딩된 프로필 이미지를 커스텀 할 수 있다
          src={localStorage.getItem("complexappAvatar")}
        />
      </a>
      <a className="btn btn-sm btn-success mr-2" href="/create-post">
        Create Post
      </a>
      {/* 로그아웃 시에 로컬스토리지 내부에 저장한 데이터를 삭제해주는 함수 
      {handleLogout}를 만든다 */}
      <button onClick={handleLogout} className="btn btn-sm btn-secondary">
        Sign Out
      </button>
    </div>
  );
}

export default HeaderLoggedIn;
