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
      description:
        "Elevate your programming skills with our Python Mastery course! Whether you're a novice or a seasoned coder, our hands-on curriculum covers it all. From mastering Python fundamentals to crafting dynamic web apps and diving into data science, you'll conquer real-world projects and emerge a Python pro. Enroll now to supercharge your coding journey! 🐍🚀",
      slug: "python-programming",
    },
    {
      name: "Mastering JavaScript: From Basics to Advanced",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850187/images/enwdonu3ntfbsgpklqht.png",
      cost: 0,
      description:
        "Learn JavaScript from the basics to advanced concepts with hands-on projects and real-world applications.",
      slug: "java-script",
    },
    {
      name: "Web Development: Comprehensive Guide to HTML, CSS, and JavaScript",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1690558647/images/fcvphmn3rdszg3vausn0.png",
      cost: 0,
      description:
        "Learn web development from the basics of HTML, CSS to building interactive websites with JavaScript.",
      slug: "html-css-js",
    },
    {
      name: "React.js Mastery: Comprehensive Guide to React.js",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850185/images/gwz3e2lo0j30se3qqw3v.png",
      cost: 0,
      description:
        "Learn React.js from the basics to advanced techniques for building modern web applications.",
      slug: "reactjs",
    },
    {
      name: "Complete Java - Full Stack Development",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850187/images/u4jzfmfxakcgliqoca0m.png",
      cost: 0,
      description:
        "Learn Java programming and build full-stack applications with Spring, Spring Boot, and microservices.",
      slug: "complete-java-full-stack-development",
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
