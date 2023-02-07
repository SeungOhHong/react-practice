import React, { useEffect } from "react";

// props 를 매개변수로 받고 {pros.children}을 리턴해준다
function Container(props) {
  return (
    <div
      // 아래의 컴포넌트를 여러 페이지들에서 재사용할 수 있게 된다
      // Container div박스로 감싸면서
      className={"container py-md-5 " + (props.wide ? "" : "container--narrow")}
      // md-5 뒤에 꼭 공백을 둬야한다 () 안에 조건을 넣는다 (삼항연산자)
      // 만약 pros.wide가 true라면 "" 을 렌더링 하고
      // false라면 "container--narrow"를 렌더링한다
      // 조건에 따라 다른 ui가 출력된다
    >
      {props.children}
    </div>
  );
}

export default Container;
