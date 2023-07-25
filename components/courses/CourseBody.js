import Accordion from "../Atoms/Accordion/accordion";
import cb from "./coursebody.module.css";

// Icons
import {
  MdArrowForward,
  MdComputer,
  MdFeedback,
  MdLanguage,
  MdLocationOn,
} from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useEffect, useState } from "react";
import Image from "next/image";

const CourseBody = ({ courseInfo }) => {
  const data = courseInfo;
  const [level, setLevel] = useState("beginner");
  const [courseContent, setCourseContent] = useState();

  const levelHandler = (e) => {
    setLevel(e.target.name);
  };
  const getLevelContent = () => {
    data?.course_content?.filter((item) => {
      if (item.level === level) {
        console.log(item?.data);
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
        {/* What you will learn */}
        <div className={cb.cb_wul_section}>
          <h3>What You Will Learn</h3>
          <div className={cb.wul_container}>
            <div className={cb.cb_wul}>
              <ul>
                {data?.learning_outcomes?.map((wul, indx) => (
                  <li key={indx}>{wul}</li>
                ))}
              </ul>
            </div>
            <div className={`${cb.cb_course_features}`}>
              {/* <div className={cb.c_enroll}>
                  <h1>₹ 6000</h1>
                  <button>Enroll Now</button>
                </div> */}
              <div className={`${cb.cb_card}`}>
                <h4>Class Details</h4>
                <div>
                  <MdLocationOn />
                  Location: Online and Classroom
                </div>
                <div>
                  <MdLanguage />
                  Mode of Delivery: Group Session and 1:1
                </div>
                <div>
                  <MdLanguage />
                  Language: English, Telugu, Hindi, Urudu, Persian
                </div>
              </div>
              <div className={`${cb.cb_card}`}>
                <h4>Course Features</h4>
                <div>
                  <MdArrowForward />
                  Online Instructor-led learning
                </div>
                <div>
                  <MdArrowForward />
                  Doubt Clearing
                </div>
                <div>
                  <MdArrowForward />
                  Recording of Live Class
                </div>
                <div>
                  <MdArrowForward />
                  Material
                </div>
                <div>
                  <MdArrowForward />
                  Quiz in every module
                </div>
                <div>
                  <MdArrowForward />
                  Certificate
                </div>
              </div>
              <div className={`${cb.cb_card}`}>
                <h4>Bonus Features</h4>
                <div>
                  <AiFillSafetyCertificate />
                  Completion Certificate
                </div>
                <div>
                  <MdComputer />
                  1:1 Parents Teacher Meeting
                </div>
                <div>
                  <MdFeedback />
                  Feedback From Instructors
                </div>
                <div></div>
              </div>
            </div>
            <div className={cb.cb_wul_img}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/658/299/original/boy-studying-with-computer-and-books-illustration-concept-in-cartoon-style-vector.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className={cb.cc_section}>
          <h3>Technical Roadmap</h3>
          {/* <h3>Course Content</h3> */}
          <div className={cb.level_Section}>
            {data?.levels ? (
              data?.levels.map((level_name, indx) => (
                <button
                  key={indx}
                  className={level === level_name ? cb.active_btn : ""}
                  name={level_name}
                  onClick={levelHandler}
                >
                  {level_name}
                </button>
              ))
            ) : (
              <></>
            )}
            {/* <button
              className={level === "beginner" ? cb.active_btn : ""}
              name="beginner"
              onClick={levelHandler}
            >
              Beginner
            </button>
            <button
              className={level === "intermediate" ? cb.active_btn : ""}
              name="intermediate"
              onClick={levelHandler}
            >
              Intermediate
            </button>
            <button
              className={level === "advance" ? cb.active_btn : ""}
              name="advance"
              onClick={levelHandler}
            >
              Advance
            </button> */}
          </div>
          <div className={cb.acc_container}>
            {/* {data?.course_content?.map((acdata, indx) => ( */}
            {courseContent?.map((acdata, indx) => (
              <Accordion
                key={indx}
                sno={indx}
                header={acdata.topicName}
                body={acdata.subtopics}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseBody;
