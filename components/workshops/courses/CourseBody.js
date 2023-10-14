import Accordion from "../../Atoms/Accordion/accordion";
import cb from "./coursebody.module.css";

import { useEffect, useState } from "react";

// Components

// CSS

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
  //     if (item.level === level) {
  //       setCourseContent(item?.data);
  //     }
  //   });
  // };
  // const levelHandler = (e) => {
  //   setLevel(e.target.name);
  //   getLevelContent(e.target.name);
  // };
  // useEffect(() => {
  //   data?.course_content?.technicalRoadMap?.filter((item) => {
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

  return (
    <>
      <div className={cb.cb_container}>
        <div className={cb.coursOverView_section}>
          <div className={cb.coursOverView_container}>
            <div className={cb.cb_wul}>
              <h3>آنچه در این دوره می آموزید:</h3>
              <ul>
                {data?.learning_outcomes?.map((wul, indx) => (
                  <li key={indx}>{wul}</li>
                ))}
              </ul>
            </div>

            <div className={cb.cb__workshop_poster}>
              <img
                src="https://res.cloudinary.com/df8aswwta/image/upload/v1697293882/images/workshop/hxqdkbgc2fwyz8lzxs2l.jpg"
                alt=""
              />
            </div>
            {/* <TechnicalRoadMapComponent
              // data={data}
              // level={level}
              courseInfo={courseInfo}
              // levelHandler={levelHandler}
              // courseContent={courseContent}
            /> */}

            {/* {JSON.stringify(level)} */}
            {/* {JSON.stringify(courseContent)} */}
            {/* <CourseAdditionalInforComponent data={data} /> */}
          </div>
          <CourseFeaturesComponent
            pricing={courseInfo?.pricing}
            discount={courseInfo?.isDiscounted}
            classeDetails={courseInfo?.classes}
            name={courseInfo?.name}
          />
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
