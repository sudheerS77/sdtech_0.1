import Accordion from "../Atoms/Accordion/accordion";
import cb from "./coursebody.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import CourseFee from "./courseFee/courseFee";

// CF
// Icons
import { MdGroups } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

// Components
import FeeCard from "./courseFee/feeCard";
// CSS
import cf from "./courseFee/courseFee.module.css";
import TechnicalRoadMapComponent from "./technicalRoadMap.component";
import CourseFeaturesComponent from "./courseFeatures.component";
import CourseAdditionalInforComponent from "./courseAdditionalInfor.component";

const CourseBody = ({
  courseInfo,
  // levelHandler,
  // level,
  // setLevel,
  // courseContent,
}) => {
  // const data = courseInfo;
  // const [level, setLevel] = useState(data?.levels[0] || "default");
  // const [courseContent, setCourseContent] = useState();
  // const [openIndex, setOpenIndex] = useState([]);
  // const [expandAll, setExpandAll] = useState(false);

  // const getLevelContent = () => {
  //   data?.course_content?.technicalRoadMap?.filter((item) => {
  //     console.log(level, item?.level);
  //     if (item.level === level) {
  //       setCourseContent(item?.data);
  //     }
  //   });
  // };
  // const levelHandler = (e) => {
  //   setLevel(e.target.name);
  //   console.log("clicked", e.target.name);
  //   getLevelContent(e.target.name);
  // };
  // useEffect(() => {
  //   data?.course_content?.technicalRoadMap?.filter((item) => {
  //     console.log(level, item?.level);
  //     if (item.level === level) {
  //       setCourseContent(item?.data);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   getLevelContent();
  // }, [level]);
  const data = courseInfo;
  const [openIndex, setOpenIndex] = useState([]);
  const [expandAll, setExpandAll] = useState(false);

  // useEffect(() => {}, []);

  // console.log(data.levels[0], level);
  return (
    <>
      <div className={cb.cb_container}>
        <div className={cb.coursOverView_section}>
          <div className={cb.coursOverView_container}>
            <div className={cb.cb_wul}>
              <h3>What You Will Learn</h3>
              <ul>
                {data?.learning_outcomes?.map((wul, indx) => (
                  <li key={indx}>{wul}</li>
                ))}
              </ul>
            </div>
            <TechnicalRoadMapComponent
              // data={data}
              // level={level}
              courseInfo={courseInfo}
              // levelHandler={levelHandler}
              // courseContent={courseContent}
            />
            {/* {JSON.stringify(level)} */}
            {/* {JSON.stringify(courseContent)} */}
            {/* <CourseAdditionalInforComponent data={data} /> */}
          </div>
          <CourseFeaturesComponent />
          {/* <div className={cb.cb_wul_img}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/658/299/original/boy-studying-with-computer-and-books-illustration-concept-in-cartoon-style-vector.jpg"
                alt="image"
              />
            </div> */}
        </div>

        {/* <FeeCard /> */}
      </div>
    </>
  );
};

export default CourseBody;
