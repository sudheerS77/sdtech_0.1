import React from "react";
import rm from "./roadmaps.module.css";
import { useRouter } from "next/router";

const RoadMapsComponent = () => {
  const router = useRouter();
  const roadMapData = [
    {
      title: "Robotics",
      children: [
        {
          name: "Robotics Beginner",
          link: "robotics-beginner",
        },
        {
          name: "Robotics Intermediate",
          link: "robotics-intermediate",
        },
        {
          name: "Robotics Advanced",
          link: "robotics-advanced",
        },
        {
          name: "Full stack Robotics",
          link: "full-stack-robotics",
        },
      ],
    },
    {
      title: "Programming",
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
          name: "Java Script",
          link: "java-script",
        },
        {
          name: "php",
          link: "php",
        },
      ],
    },
    {
      title: "Web Development",
      children: [
        { name: "Frontend", link: "" },
        { name: "Backend", link: "" },
        { name: "Full Stack", link: "" },
        { name: "Mern Stack", link: "" },
        { name: "Mean Stack", link: "" },
        { name: "React", link: "" },
        { name: "Angular", link: "" },
        { name: "NextJS", link: "" },
        { name: "Node", link: "" },
        { name: "Express", link: "" },
      ],
    },
    {
      title: "Mobile App Development",
      children: [
        { name: "React Native", link: "" },
        { name: "Flutter", link: "" },
      ],
    },
    {
      title: "Data Base",
      children: [
        { name: "MongoDB", link: "" },
        { name: "SQL", link: "" },
      ],
    },
  ];

  return (
    <>
      <div className={rm.rm_container}>
        {roadMapData.map((items, index) => (
          <div key={index} className={rm.rm_courses_container}>
            <h3>{items.title}</h3>
            <div className={rm.rm_course}>
              {items.children.map((courses, ind) => (
                <button
                  key={ind}
                  onClick={() => router.push(`/roadMaps/${courses.link}`)}
                >
                  {courses.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoadMapsComponent;
