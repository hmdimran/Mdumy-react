import React from "react";
import FaqHeader from "./FaqHeader";
import FaqMain from "./FaqMain";

export default function FaqSection() {
  return (
    <section class="container my-5 text-center">
      <div>
        <FaqHeader />
        <FaqMain />
      </div>
    </section>
  );
}
