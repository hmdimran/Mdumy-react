import React from "react";
import std1 from "../../../assets/images/student/student-1.png";
import std2 from "../../../assets/images/student/student-2.png";
import std3 from "../../../assets/images/student/student-3.png";
import std4 from "../../../assets/images/student/student-4.png";
import StdCard from "./StdCard";

export default function StdMain() {
  const studentInfo = [
    {
      _id: 1,
      name: `Awlad Hossain`,
      course: `UIUX Designer`,
      studentAvatar: std1,
    },
    {
      _id: 2,
      name: `Jannatul Islam`,
      course: `Motion Design`,
      studentAvatar: std2,
    },
    {
      _id: 3,
      name: `Imran Hossain`,
      course: `Graphic Designer`,
      studentAvatar: std3,
    },
    {
      _id: 4,
      name: `Nishi Akter`,
      course: `Web Developer`,
      studentAvatar: std4,
    },
  ];
  return (
    <main class="my-5">
      <div class="row gx-4 gy-4">
        {studentInfo.map((student) => (
          <StdCard
            name={student.name}
            course={student.course}
            studentAvatar={student.studentAvatar}
          />
        ))}
      </div>
    </main>
  );
}
