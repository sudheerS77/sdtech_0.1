import React, { useState } from "react";
// Icons
import { MdGroups } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

// Components
import FeeCard from "./feeCard";
// CSS
import cf from "./courseFee.module.css";

const CourseFee = ({ course_content, pricing }) => {
  const [classType, setClassType] = useState("one_to_one");
  const handleClick = (e) => {
    setClassType(e.target.name);
  };
  return (
    <>
      {/* <div className={cf.cf_container}>
        <div className={cf.btn_group}>
          <button
            name="one_to_one"
            onClick={handleClick}
            className={classType === "one_to_one" ? `${cf.active_btn}` : ""}
          >
            <BsFillPersonFill /> 1 : 1
          </button>
          <button
            name="group"
            className={classType === "group" ? `${cf.active_btn}` : ""}
          >
            <MdGroups /> Group Classes
          </button>
        </div>
        <div className={cf.plans_section}>
          {courseLevels.map((data, indx) => (
            <>
              <FeeCard data={data} />
            </>
          ))}
        </div>
      </div> */}
       <div className={cf.cf_container}>
          <div className={cf.btn_group}>
            <button
              name="one_to_one"
              // onClick={handleClick}
              // className={classType === "one_to_one" ? `${cf.active_btn}` : ""}
            >
              <BsFillPersonFill /> 1 : 1
            </button>
            <button
              name="group"
              // className={classType === "group" ? `${cf.active_btn}` : ""}
            >
              <MdGroups /> Group Classes
            </button>
          </div>
          <div className={cf.plans_section}>
            {course_content?.map((ccitems, indx) => (
              <FeeCard ccitems={ccitems} key={indx} pricing={pricing} />
            ))}
            {/* {courseLevels.map((data, indx) => (
              <>
              </>
            ))} */}
          </div>
        </div>
      
    </>
  );
};

export default CourseFee;
// Easy Level Learning Outcomes:

// Understand fundamental concepts in the subject.
// Apply basic knowledge to simple tasks and exercises.
// Build a strong foundation for further learning.
// Medium Level Learning Outcomes:

// Demonstrate a deeper understanding of advanced concepts.
// Analyze and solve moderately complex problems.
// Engage in collaborative learning and discussions.
// Hard Level Learning Outcomes:

// Master advanced theoretical knowledge and practices.
// Conduct independent research and projects.
// Exhibit leadership and critical thinking skills.