import React from "react";

export default function FooterMenu({ link, title }) {
  return (
    <a class="text-white mx-3" href={link}>
      {title}
    </a>
  );
}
