import React from "react";

export default function Join() {
  const joinContent = {
    title: `Ready to join?`,
    joinDes: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
  };
  return (
    <section class="container my-5 text-white">
      <div class="d-flex justify-content-between align-items-center p-5 bg-primary bg-opacity-100 rounded-3 flex-md-column text-md-center flex-lg-row flex-column text-center">
        <div class="join-50">
          <h2>{joinContent.title}</h2>
          <p>{joinContent.joinDes}</p>
        </div>
        <div class="">
          <button class="btn btn-lg bg-white text-primary py-2 px-5 rounded-1">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}
