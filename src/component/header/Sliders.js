import React from "react";
import Slider1 from "../../assets/images/cover/cover-1.png";
import Slider2 from "../../assets/images/cover/cover-3.jpg";
import Slide from "./Slide";

export default function Sliders() {
  const sliders = [
    {
      _id: 1,
      image: Slider1,
      content: {
        title: `Get Started Digital Learning`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        btn_text: "Get Started",
      },
    },
    {
      _id: 2,
      image: Slider2,
      content: {
        title: `Get Started Digital Learning`,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
        btn_text: "Get Started",
      },
    },
  ];
  return (
    <section className="mb-5">
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner position-relative">
            {/* <!-- Item 1 --> */}
            {sliders.map((single) => (
              <Slide
                key={single.id}
                img={single.image}
                title={single.content.title}
                description={single.content.description}
                btn_text={single.content.btn_text}
              ></Slide>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
