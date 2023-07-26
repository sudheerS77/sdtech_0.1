import Link from "next/link";
import React, { useState } from "react";
// Icons
import { BsCode, BsRobot } from "react-icons/bs";
import { SiWebflow } from "react-icons/si";
// CSS
import hcc from "./categories.module.css";
// Images
import robotImage from "../../assets/images/robot.png";
import Image from "next/image";

const CourseCategories = () => {
  const [activeCourse, setActiveCourse] = useState("Programming");

  const categories = [
    {
      name: "Programming",
      icon: <BsCode className={hcc.caticon} />,
      children: [
        {
          name: "Python",
          link: "python",
        },
        {
          name: "Java",
          link: "java",
        },
        {
          name: "JavaScript",
          link: "java-script",
        },
        {
          name: "GOLANG",
          link: "golang",
        },
        {
          name: "PHP",
          link: "php",
        },
        {
          name: "R",
          link: "r",
        },
        {
          name: "C",
          link: "c",
        },
        {
          name: "C++",
          link: "c++",
        },
      ],
    },
    {
      name: "Web Development",
      icon: <SiWebflow className={hcc.caticon} />,
      children: [
        {
          name: "Full Stack Wev Development",
          link: "full-stack-web-development",
        },
        {
          name: "HTML CSS JS",
          link: "html-css-js",
        },
        {
          name: "HTML",
          link: "html",
        },
        {
          name: "CSS",
          link: "css",
        },
        {
          name: "JavaScript",
          link: "javascript",
        },
        {
          name: "NodeJS",
          link: "node-js",
        },
        {
          name: "ReactJS",
          link: "react-js",
        },
        {
          name: "NextJS",
          link: "next-js",
        },
        {
          name: "Mern Stack",
          link: "mern-stack",
        },
        {
          name: "Mean Stack",
          link: "mean-stack",
        },
        {
          name: "Frontend",
          link: "frontend",
        },
        {
          name: "Backend",
          link: "backend",
        },
        {
          name: "flask",
          link: "flask",
        },
        {
          name: "Java Full Stack",
          link: "java-full-stack",
        },
        {
          name: "Python Full Stack",
          link: "python-full-stack",
        },
      ],
    },
    {
      name: "Mobile APP Development",
      icon: <BsRobot className={hcc.caticon} />,
      children: [
        {
          name: "React Native",
          link: "react-native",
        },
        {
          name: "Dart",
          link: "dart",
        },
        {
          name: "FLutter",
          link: "flutter",
        },
      ],
    },
    {
      name: "Robotics",
      icon: <BsRobot className={hcc.caticon} />,
      children: [
        {
          name: "Arduino",
          link: "arduino",
        },
      ],
    },
    {
      name: "DataBases",
      icon: <BsRobot className={hcc.caticon} />,
      children: [
        {
          name: "MySql",
          link: "mysql",
        },
        {
          name: "MongoDB",
          link: "mongoDB",
        },
      ],
    },
  ];
  const coursesList = categories.filter((data) => data.name === activeCourse);

  console.log(activeCourse);
  return (
    <>
      <div className={hcc.category_container} id="courseCategories">
        <div className={hcc.category_header}>
          <h1>Course Categories</h1>
        </div>
        <div className={hcc.categories}>
          <div className={hcc.catList}>
            {categories.map((cdata, indx) => (
              <button
                key={indx}
                className={`${hcc.catbtn} ${
                  activeCourse === cdata.name ? hcc.cactive : ""
                }`}
                onClick={() => setActiveCourse(cdata.name)}
              >
                {cdata.icon}
                {cdata.name}
              </button>
            ))}
          </div>
          <div className={hcc.coursesList}>
            {coursesList[0]?.children?.map((courses, indx) => (
              <Link href={`/courses/${courses.link}`} key={indx}>
                <div className={hcc.courseName}>{courses.name}</div>
              </Link>
            ))}
            <div className={hcc.animate}>
              <Image src={robotImage} alt="" width={100} height={100}/>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default CourseCategories;
