import React from "react";

export default function FaqHeader() {
  const faqhead = {
    title: `Frequently Asked Questions`,
    faqDes: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
  };
  return (
    <header class="w-50 mx-auto">
      <h1>{faqhead.title}</h1>
      <p>{faqhead.faqDes}</p>
    </header>
  );
}
