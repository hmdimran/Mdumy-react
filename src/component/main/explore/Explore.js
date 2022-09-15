import React from "react";
import Analysis from "./Analysis";
import Exploreimg from "./Exploreimg";
import ExploreIMG from "../../../assets/images/working.png";

export default function Explore() {
  const exploreimage = {
    img: ExploreIMG,
  };
  const { img } = exploreimage;
  return (
    <section class="container my-5">
      <div class="d-flex bg-info bg-opacity-25 flex-column flex-md-row align-items-lg-center">
        <Exploreimg img={img} />
        <Analysis />
      </div>
    </section>
  );
}
