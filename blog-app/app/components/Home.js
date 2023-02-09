// 로그인시에 홈화면에 나타나는 컴포넌트이다
import React, { useEffect } from "react";
import Page from "./Page";

function Home() {
  return (
    <Page title="Your Feed">
      <h2 className="text-center">
        {/* 또한 서버에서 응답으로 온 데이터로 하드코딩이었던 사용자이름을 
        어떤 사용자가 로그인 하는지에 유동적으로 바뀔 수 있도록 해준다*/}
        Hello <strong>{localStorage.getItem("complexappUsername")}</strong>,
        your feed is empty.
      </h2>
      <p className="lead text-muted text-center">
        Your feed displays the latest posts from the people you follow. If you
        don&rsquo;t have any friends to follow that&rsquo;s okay; you can use
        the &ldquo;Search&rdquo; feature in the top menu bar to find content
        written by people with similar interests and then follow them.
      </p>
    </Page>
  );
}

export default Home;
