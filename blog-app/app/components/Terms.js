import React from "react";
import Page from "./Page";

function Terms() {
  return (
    // 이제 페이지를 옮길 때 마다 브라우저 상단의 페이지 제목이 컴포넌트에 따라서 변경된다
    <Page title="Terms and Conditions">
      <h2>Our Terms &amp; Conditions</h2>
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
      <h3>Details</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam
        distinctio atque sint earum? Temporibus, voluptas aspernatur aliquam
        nisi sed harum laborum, nemo odio animi officia quisquam. Veniam, natus
        reprehenderit.
      </p>
    </Page>
  );
}

export default Terms;
