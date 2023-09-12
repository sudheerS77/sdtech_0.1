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

const CourseBody = ({ courseInfo }) => {
  const data = courseInfo;
  const [level, setLevel] = useState(data?.levels[0] || "default");
  const [courseContent, setCourseContent] = useState();
  const [openIndex, setOpenIndex] = useState([]);
  const [expandAll, setExpandAll] = useState(false);

  const levelHandler = (e) => {
    setLevel(e.target.name);
  };
  const getLevelContent = () => {
    data?.course_content?.technicalRoadMap?.filter((item) => {
      if (item.level === level) {
        setCourseContent(item?.data);
      }
    });
  };

  useEffect(() => {
    getLevelContent();
  });

  useEffect(() => {
    getLevelContent();
  }, [level]);

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
              data={data}
              level={level}
              courseContent={courseContent}
            />
          </div>
          <CourseFeaturesComponent />
          {/* <div className={cb.cb_wul_img}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/658/299/original/boy-studying-with-computer-and-books-illustration-concept-in-cartoon-style-vector.jpg"
                alt="image"
              />
            </div> */}
        </div>
        <div className={cb.course_information}>
          <div>
            <h3>Description</h3>
            <p>{data?.description}</p>
          </div>
          <div>
            <h3>Why Choose This Course?</h3>
            <p>{data?.description}</p>
          </div>
          <div>
            <h3>Why Learn {data?.name}</h3>
            <p>{data?.description}</p>
          </div>
          <div>
            <h3>Who this course is for:</h3>
            <ul>
              <li>
                Java programmers who want to create web applications
                Professionals
              </li>
              <li>willing to develop a Java skill Future developers of web</li>
              <li>
                applications People willing to create a fast web application
                using Java
              </li>
            </ul>
          </div>
        </div>
        {/* <FeeCard /> */}
      </div>
    </>
  );
};

export default CourseBody;
