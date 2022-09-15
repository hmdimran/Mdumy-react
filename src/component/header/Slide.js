import React from "react";

export default function Slider({ img, title, description, btn_text }) {
  return (
    <div className="carousel-item active">
      <div className="carousel-caption d-none d-md-block position-absolute top-0 w-100 start-0 h-100 p-5 py-auto bg-dark bg-opacity-50">
        <div className="d-flex flex-column p-5 justify-content-center align-items-center w-100 h-100">
          <h1 className="px-5">{title}</h1>
          <p className="px-5">{description}</p>
          <button className="btn btn-lg btn-info rounded-0 text-white fw-bold my-3">
            {btn_text}
          </button>
        </div>
      </div>
      <img src={img} className="d-block w-100 img-fluid" alt="..." />
    </div>
  );
}
