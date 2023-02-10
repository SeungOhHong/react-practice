import React, { useEffect } from "react";

// 몇 초후에 팝업이 사라지는 로직은 css단에서 처리하고 있다
// props를 인자로 받는다
function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      {/* 이제 팝업 메시지의 상태에 따라서 유동적으로 보여줄 수 있도록 셋팅해준다 */}
      {/* props로 들어오는 모든 메세지들을 map메서드로 순회하면서 
      각각의 메시지마다 인덱스로 유니크한 key를 부여하고 메시지를 띄워준다*/}
      {/* 이제 Main.js로 가서 다른 컴포넌트들에도 addFlashMessages 함수를 이용해준다 */}
      {props.messages.map((msg, index) => {
        return (
          <div
            key={index}
            className="alert alert-success text-center floating-alert shadow-sm"
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
}

export default FlashMessages;
