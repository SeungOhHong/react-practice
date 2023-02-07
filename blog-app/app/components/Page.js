import React, { useEffect } from "react";
import Container from "./Container";
// 컨테이너 컴포넌트를 각각의 페이지에서 불러오지 않고 페이지 컴포넌트에서 불러와 한번에 적용시킨다
// 더이상 각각의 컴포넌트 마다 페이지와 컨테이너를 적용시키는 함수를 중복할 필요가 없다

// 컴포넌트에 따라서 페이지의 제목이 바뀌도록 해줘야한다
// Page.js 파일은 컴포넌트에 따른 페이지 제목을 바꿔주는 로직을 재사용하기 위한 파일이다

function Page(props) {
  // useEffect(a,b) 는 두 개의 인자를 받는다
  // a는 그 시점에 실행하길 원하는 함수
  // b는 해당 시점을 명시해준다
  useEffect(() => {
    // 수동으로 해당 페이지의 제목을 변경 시켜준다
    document.title = `${props.title} | ComplexApp`;
    // 해당 페이지로 스위칭하면 스크롤을 가장 위로 올려준다
    window.scrollTo(0, 0);
  }, []);

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
