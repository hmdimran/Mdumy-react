import React from "react";
import SingleAnalysis from "./SingleAnalysis";

export default function Analysis() {
  const explore = {
    exploreTitle: `Explore The elearning Institute`,
    expLongDes: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure.`,
    explore2ndDes: `Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.`,
    expoShrtDes: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some for`,
  };
  const { exploreTitle, expLongDes, explore2ndDes, expoShrtDes } = explore;

  const singleAnaly = [
    {
      _id: 1,
      argument: "3.2K+",
      analysisName: "Online Course",
    },
    {
      _id: 2,
      argument: "600+",
      analysisName: "Expert member",
    },
    {
      _id: 3,
      argument: "1k+",
      analysisName: "Rating & Review",
    },
  ];

  return (
    <div class="explore-content me-lg-5 me-md-0 p-md-3 p-3 p-lg-0">
      <h1>{exploreTitle}</h1>
      <div class="d-md-none d-lg-block d-none">
        <p>{expLongDes}</p>
        <p>{explore2ndDes}</p>
      </div>
      <div class="d-md-block d-lg-none d-block">
        <p>
          {expoShrtDes}
          <a href="https://facebook.com">see more</a>
        </p>
      </div>
      <div class="d-flex justify-content-between">
        {singleAnaly.map((single) => (
          <SingleAnalysis
            key={single.id}
            argument={single.argument}
            analysisName={single.analysisName}
          />
        ))}
      </div>
      <button class="btn btn-info btn-lg rounded-1 text-white">
        Read More
      </button>
    </div>
  );
}
