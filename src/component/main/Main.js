import React from "react";
import CompanySection from "./companies/CompanySection";
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
      <FaqSection />
      <CompanySection />
    </main>
  );
}
