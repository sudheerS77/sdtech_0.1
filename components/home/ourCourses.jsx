import React from "react";

import hc from "./ourCourses.module.css";
import CourseCard from "./courseCard";
import Link from "next/link";

const OurCourses = () => {
  const ourCoursesData = [
    {
      name: "Foundations of Robotics: From History to AI Integration",
      description:
        "Learn the fundamentals of robotics in our introductory course, Introduction to Robotics. Dive into the exciting world of robots, their history, and their applications. Discover the types of robots, the connection between robotics and artificial intelligence, and explore various career opportunities in this dynamic field. Whether you're a curious beginner or aspiring robotics engineer, this course will equip you with essential knowledge and skills to kickstart your journey into robotics.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1694713471/images/ozvlwqv0lx383xqm0teh.jpg",
      isBig: true,
      slug: "zero-beginner",
      price: 6,
    },
    {
      name: "Programming Fundamentals for Robotics: Mastering the Basics",
      description:
        "Unlock the power of programming in the realm of robotics with our Programming Fundamentals for Robotics beginner course. This course offers a comprehensive introduction to the world of programming, covering its history, different programming languages, and its unique applications in robotics. Explore the nuances that distinguish robot programming from other forms of programming and get to grips with numbering systems. By the end of this course, you'll be well-equipped to tackle programming challenges in the robotics field.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1694713757/images/b5qviotprutwjdeic5kx.jpg",
      isBig: true,
      slug: "programming-fundamentals-for-robotics",
      price: 100,
    },
    {
      name: "Web Development: Comprehensive Guide to HTML, CSS, and JavaScript",
      description:
        "Learn web development from the basics of HTML, CSS to building interactive websites with JavaScript.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1690558647/images/fcvphmn3rdszg3vausn0.png",
      isBig: false,
      slug: "html-css-js",
      price: 250,
    },
    {
      name: "React.js Mastery: Comprehensive Guide to React.js",
      description:
        "Learn React.js from the basics to advanced techniques for building modern web applications.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1689850185/images/gwz3e2lo0j30se3qqw3v.png",
      isBig: false,
      slug: "react-js",
      price: 250,
    },
    {
      name: "Next.js Mastery: Comprehensive Guide to Next.js",
      description:
        "Learn Next.js from the basics to advanced techniques for building modern and server-rendered React applications.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1690557205/images/gzgedeevea8juoif6u2t.png",
      isBig: false,
      slug: "nextjs",
      price: 170,
    },
    {
      name: "MERN Stack Mastery: Comprehensive Guide to Full-Stack Web Development",
      description:
        "Learn the MERN stack to build modern and powerful full-stack web applications.",
      image:
        "https://res.cloudinary.com/df8aswwta/image/upload/v1690558939/images/uccycj0urlhlnaka12la.png",
      isBig: false,
      slug: "mern-stack",
      price: 245,
    },
  ];

  return (
    <>
      <div className={hc.oc_container}>
        <div className={hc.oc_header}>
          <h1>Popular Courses</h1>
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
