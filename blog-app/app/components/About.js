import React from "react";

// user에게 about us 컨텐츠를 보여주기 위해서는 URL도 함께 변경돼야만 한다
// 리액트 클라이언트 사이드 렌더링으로 현재 url에 따라서 그에 적합한 컨텐츠를 보여줄 수 있다.

function About() {
  return (
    <div className="container container--narrow py-md-5">
      <h2>About Us</h2>
      <p className="lead text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        dolorum labore quisquam vel id dicta fuga! Ducimus, quo. Dolore commodi
        aliquid error veritatis consequuntur, excepturi cumque fuga eum incidunt
        doloremque?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At qui enim
        rem totam voluptatum. Aut saepe temporibus, facilis ex a iste expedita
        minima dolorum dicta doloribus libero aliquid, quae maxime? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Fugiat suscipit beatae eum,
        est soluta ducimus ratione et impedit sapiente, nihil, atque dignissimos
        adipisci? Totam atque officia quis voluptates sed veniam?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
        voluptates quisquam possimus tenetur, dicta enim rerum quis, quaerat id
        nobis provident quo dolorum sapiente temporibus facere non repellendus
        consequatur cupiditate!
      </p>
    </div>
  );
}

export default About;
