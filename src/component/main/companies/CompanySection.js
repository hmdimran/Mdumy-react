import React from "react";
import ComFooter from "./ComFooter";
import ComHeader from "./ComHeader";

export default function CompanySection() {
  return (
    <section class="container my-5 d-lg-block d-none">
      <ComHeader />
      <ComFooter />
    </section>
  );
}
