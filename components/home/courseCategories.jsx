import Link from "next/link";
import React, { useEffect, useState } from "react";
// Icons
import { BsCode, BsRobot } from "react-icons/bs";
import { SiWebflow } from "react-icons/si";
// CSS
import hcc from "./categories.module.css";
// Images
import robotImage from "../../assets/images/robot.png";
import Image from "next/image";

const CourseCategories = () => {
  const [activeCourse, setActiveCourse] = useState("Robotics");

  const categories = [
    {
      name: "Robotics",
      icon: <BsRobot className={hcc.caticon} />,
      children: [
        {
          name: "Zero Beginner",
          link: "zero-beginner",
        },
        {
          name: "beginner 1",
          link: "beginner-1",
        },
        {
          name: "Mechanics For Robotics",
          link: "mechanics-for-robotics",
        },
        {
          name: "Programming fundamentals for robotics",
          link: "programming-fundamentals-for-robotics",
        },
        {
          name: "Arduino and sensors ( M-Block Software)",
          link: "Arduino-and-sensors-(M-Block_Software)",
        },
        {
          name: "Mastering Robot Control",
          link: "mastering-robot-control",
        },
        {
          name: "Multi-Robots Projects Mastery",
          link: "mulit-robots-projects",
        },
        {
          name: "Mechanical Design Mastery with SOLIDWORKS",
          link: "mechanical-desin-solidWorks",
        },
        // {
        //   name: "",
        //   link: "",
        // },
        // {
        //   name: "",
        //   link: "",
        // },
      ],
    },
    {
      name: "Programming",
      icon: <BsCode className={hcc.caticon} />,
      children: [
        {
          name: "Python",
          link: "python-programming",
        },
        // {
        //   name: "Java",
        //   link: "complete-java-full-stack-development",
        // },
        {
          name: "JavaScript",
          link: "java-script",
        },
        // // {
        // //   name: "GOLANG",
        // //   link: "go-programming",
        // // },
        // {
        //   name: "PHP",
        //   link: "php-programming",
        // },
        // {
        //   name: "R",
        //   link: "R-programming",
        // },
        // {
        //   name: "C",
        //   link: "c-programming",
        // },
        // {
        //   name: "C++",
        //   link: "c++",
        // },
      ],
    },
    {
      name: "Web Development",
      icon: <SiWebflow className={hcc.caticon} />,
      children: [
        // {
        //   name: "Full Stack Wev Development",
        //   link: "full-stack-web-development",
        // },
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
          link: "java-script",
        },
        // {
        //   name: "NodeJS",
        //   link: "node-js",
        // },
        {
          name: "ReactJS",
          link: "react-js",
        },
        {
          name: "NextJS",
          link: "nextjs",
        },
        {
          name: "Mern Stack",
          link: "mern-stack",
        },
        // {
        //   name: "Mean Stack",
        //   link: "mean-stack",
        // },
        // {
        //   name: "Frontend",
        //   link: "frontend",
        // },
        // {
        //   name: "Backend",
        //   link: "backend",
        // },
        // {
        //   name: "flask",
        //   link: "flask",
        // },
        // {
        //   name: "Java Full Stack",
        //   link: "complete-java-full-stack-development",
        // },
        // {
        //   name: "Python Full Stack",
        //   link: "python-full-stack",
        // },
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
          name: "Flutter",
          link: "flutter",
        },
      ],
    },

    {
      name: "DataBases",
      icon: <BsRobot className={hcc.caticon} />,
      children: [
        {
          name: "MySql",
          link: "sql",
        },
        {
          name: "MongoDB",
          link: "mongodb",
        },
      ],
    },
  ];
  const coursesList = categories.filter((data) => data.name === activeCourse);

  const activeCourseHandler = (name) => {
    setActiveCourse(name);
    localStorage.setItem("courseCategoryName", name);
  };

  useEffect(() => {
    const ccName = localStorage.getItem("courseCategoryName");
    ccName ? setActiveCourse(ccName) : setActiveCourse("Robotics");
  }, []);
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
                onClick={() => activeCourseHandler(cdata.name)}
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
            {activeCourse === "Robotics" && (
              <div className={hcc.animate}>
                <Image src={robotImage} alt="" width={100} height={100} />
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CourseCategories;
