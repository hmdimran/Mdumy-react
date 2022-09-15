import React from "react";
import StdFooter from "./StdFooter";
import StdHeader from "./StdHeader";
import StdMain from "./StdMain";

export default function StudentSection() {
  const stdHeader = {
    title: `Meet Our Successfull Students`,
    studentDes: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
  };
  const { title, studentDes } = stdHeader;
  return (
    <section class="container my-5">
      <StdHeader title={title} studentDes={studentDes} />
      <StdMain />
      <StdFooter />
    </section>
  );
}
