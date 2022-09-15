import React from "react";
import CourseFooter from "./courses/CourseFooter";
import CourseMain from "./courses/CourseMain";
import Header from "./courses/Header";
import Explore from "./explore/Explore";
import FaqSection from "./faq/FaqSection";
import Join from "./join/Join";
import StudentSection from "./students/StudentSection";

export default function Main() {
  return (
    <main>
      <section class="my-5">
        <Header />
        <CourseMain />
        <CourseFooter />
      </section>
      <Explore />
      <Join />
      <StudentSection />

      {/* <!-- FAQ Start --> */}
      <FaqSection />
      {/* <!-- FAQ End -->
      <!-- Companies Section Start --> */}
      <section class="container my-5 d-lg-block d-none">
        <header class="text-center my-4">
          <h1>Trusted by over 800+ companies</h1>
        </header>
        <footer class="my-5">
          <div class="d-flex justify-content-between align-items-center">
            <img src="images/company/company-1.png" alt="" />
            <img src="images/company/company-2.png" alt="" />
            <img src="images/company/company-3.png" alt="" />
            <img src="images/company/company-4.png" alt="" />
            <img src="images/company/company-5.png" alt="" />
            <img src="images/company/company-6.png" alt="" />
          </div>
        </footer>
      </section>
      {/* <!-- Companies Section End --> */}
    </main>
  );
}
