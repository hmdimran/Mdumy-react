import React from "react";

export default function StdCard({ name, course, studentAvatar }) {
  return (
    <div class="col-md-6 col-lg-3">
      <div class="card">
        <img src={studentAvatar} class="card-img-top" alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{course}</p>
        </div>
      </div>
    </div>
  );
}
