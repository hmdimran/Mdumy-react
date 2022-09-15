import React from "react";
import Course from "./Course";
import c1 from "../../../assets/images/course/course-1.png";
import c2 from "../../../assets/images/course/course-2.png";
import c3 from "../../../assets/images/course/course-3.png";
import c4 from "../../../assets/images/course/course-4.png";
import c5 from "../../../assets/images/course/course-5.png";
import c6 from "../../../assets/images/course/course-6.png";

export default function CourseMain() {
  const courses = [
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c1,
      coursePrice: 20,
    },
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c2,
      coursePrice: 45,
    },
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c3,
      coursePrice: 35,
    },
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c4,
      coursePrice: 52,
    },
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c5,
      coursePrice: 80,
    },
    {
      courseTitle: `Fundamental Of UI/UX Design`,
      courseDes: `Some quick example text to build on the card title and make up the bulk of the card.`,
      courseImg: c6,
      coursePrice: `20`,
    },
  ];
  return (
    <div>
      <main class="container my-5">
        <div class="row gy-4">
          {/* <!-- Single Course 1--> */}
          {courses.map((course) => (
            <Course
              title={course.courseTitle}
              des={course.courseDes}
              courseImg={course.courseImg}
              coursePrice={course.coursePrice}
            ></Course>
          ))}
        </div>
      </main>
    </div>
  );
}
