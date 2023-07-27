import React from "react";

import hc from "./ourCourses.module.css";
import CourseCard from "./courseCard";
import Link from "next/link";

const OurCourses = () => {
  const ourCoursesData = [
    {
      name: "Python Mastery: Unlock Your Coding Superpowers",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850188/images/pamvha9lzu6mkpmobqep.png",
      cost: 5000,
      link: "python-programming",
    },
    {
      name: "Mastering JavaScript: From Basics to Advanced",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850187/images/enwdonu3ntfbsgpklqht.png",
      cost: 0,
      link: "java-script",
    },
    {
      name: "Web Development: Comprehensive Guide to HTML, CSS, and JavaScript",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1690368005/images/h63ykqvog4i4uht9xzg8.png",
      cost: 0,
      link: "html-css-js",
    },
    {
      name: "React.js Mastery: Comprehensive Guide to React.js",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850185/images/gwz3e2lo0j30se3qqw3v.png",
      cost: 0,
      link: "reactjs",
    },
    {
      name: "Complete Java - Full Stack Development",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850187/images/u4jzfmfxakcgliqoca0m.png",
      cost: 0,
      link: "complete-java-full-stack-development",
    },
  ];

  return (
    <>
      <div className={hc.oc_container}>
        <div className={hc.oc_header}>
          <h1>Our Courses</h1>
          <Link href="/courses" className={hc.oc_view_all}>
            <span>View All</span>
          </Link>
        </div>
        <div className={hc.oc_section}>
          {ourCoursesData.map((data, indx) => (
            <CourseCard key={indx} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCourses;
