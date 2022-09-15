import React from "react";

export default function Course({ title, des, courseImg, coursePrice }) {
  return (
    <div class="col-md-12 col-lg-6">
      <div class="single-course border rounded shadow-lg d-flex align-items-center p-0 flex-lg-row gy-2 flex-column p-3 p-lg-0 align-items-start">
        <div class="py-5 py-lg-0">
          <img src={courseImg} alt={title} />
        </div>
        <div class="m-lg-3 m-md-3 text-dark">
          <h5>{title}</h5>
          <p>{des}</p>
          <a
            class="text-info text-decoration-none fw-bold"
            href="https://facebook.com"
          >
            Price : {coursePrice}$
          </a>
        </div>
      </div>
    </div>
  );
}
