import React from "react";

export default function FooterSocialMenu({ link, icon }) {
  return (
    <a href={link} className="text-decoration-none">
      <div className="social-icons d-flex align-items-center justify-content-center rounded-circle fs-4 text-white m-2">
        <i className={icon}></i>
      </div>
    </a>
  );
}
