import React from "react";
import allc from "@/styles/course.module.css";
import CourseCard from "../home/courseCard";

const SimilarCourses = () => {
  
    const ourCoursesData = [
    {
      name: "Full Stack Web Development",
      image:
        "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
      cost: 5000,
      link: "full-stack-web-development",
    },
    {
      name: "Machine Learning BootCamp",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      cost: 5000,
      link: "machine-learning-bootcamp",
    },
  ];

  return (
    <>
    <div className={allc.similar_container}>
        <h3 style={{textAlign: 'center', fontSize: '1.4rem'}}>Similar Courses</h3>
    </div>
      <div className={allc.allc_body}>
        {ourCoursesData.map((data, indx) => (
          <CourseCard key={indx} data={data} />
        ))}
      </div>
    </>
  );
};

export default SimilarCourses;
