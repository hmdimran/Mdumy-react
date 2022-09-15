import React from "react";

export default function StdHeader({ title, studentDes }) {
  return (
    <header class="text-md-start text-lg-start text-center">
      <h1>{title}</h1>
      <p>{studentDes}</p>
    </header>
  );
}
