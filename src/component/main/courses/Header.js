import React from "react";

export default function Header() {
  const sourseHeader = {
    title: `Discover Our Popular Courses`,
    description: `It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.`,
  };
  return (
    <header class="text-center py-5 py-md-5 container">
      <h1>{sourseHeader.title}</h1>
      <p>{sourseHeader.description}</p>
    </header>
  );
}
