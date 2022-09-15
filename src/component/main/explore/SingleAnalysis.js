import React from "react";

export default function SingleAnalysis({ argument, analysisName }) {
  return (
    <div class="">
      <h1>{argument}</h1>
      <p>{analysisName}</p>
    </div>
  );
}
