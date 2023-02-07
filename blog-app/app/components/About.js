import React from "react";
import Container from "./Container";
// 컨테이너를 불러오기 해준다

function About() {
  return (
    // 컴포넌트를 재사용하기 위해서 className을 외울 필요없이 Container 박스로 감싸면 된다
    <Container>
      <h2>About Us!!!!!!</h2>
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
    </Container>
  );
}

export default About;
