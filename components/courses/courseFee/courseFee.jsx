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
