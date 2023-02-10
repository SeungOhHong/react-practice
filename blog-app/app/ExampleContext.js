// 컨텍스트를 왜 이용하는가?
// 컴포넌튼가 여러 겹의 층으로 네스팅 되있더라도 자식 컴포넌트로 값을 전달하기가 수월하다!
// context는 컴포넌트로 데이터를 좀 더 멋들어지게 내려보낼 수 있는 방법이다
// 이전까지는 알림 팝업을 띄우는 함수를 컴포넌트에 수동으로 넘겨주는 방식으로
// 데이터를 전달했다. 하지만 이런 방식으로 데이터를 내려보내면
// 해당 데이터를 재사용할 때마다 컴포넌트에 수동으로 넘겨줘야하므로 번거롭다

// context를 생성하는 라이브러리를 임포트해준다
// 이 파일은 컴포넌트 폴더에 만들지 않고 메인 컴포넌트와 같은 폴더에 생성한다
import { createContext } from "react";

const ExampleContext = createContext();

export default ExampleContext;