import React, { useEffect, useState } from "react";
import cb from "./coursebody.module.css";
import Accordion from "../../Atoms/Accordion/accordion";

const TechnicalRoadMapComponent = ({
  // data,
  // level,
  // levelHandler,
  courseInfo,
  // courseContent,
}) => {
  const [openIndex, setOpenIndex] = useState([0]);
  const [expandAll, setExpandAll] = useState(false);
  const toggleAccordion = (index) => {
    // setOpenIndex((prev) => (prev === index ? null : index));
    setOpenIndex((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((item) => item !== index);
      } else {
        return [index];
      }
    });
  };

  const handleExpandAll = () => {
    setExpandAll(!expandAll);
    if (expandAll) {
      setOpenIndex([]);
    } else {
      if (level !== null) setOpenIndex([...Array(courseContent.length).keys()]);
      else setOpenIndex([...Array(courseInfo?.course_content.length).keys()]);
    }
  };

  //
  const [level, setLevel] = useState(
    "default"
    // courseInfo?.levels[0] ? courseInfo.levels[0] : "default"
  );
  const [courseContent, setCourseContent] = useState();

  const getLevelContent = () => {
    courseInfo?.course_content?.technicalRoadMap?.filter((item) => {
      if (item.level === "default") {
        setCourseContent(item?.data);
      }
    });
  };
  const levelHandler = (e) => {
    setLevel(e.target.name);
  };

  useEffect(() => {
    // if (courseInfo?.levels[0] === "default") {
    // } else {
    // }

    // if (data?.levels?.length > 1) {
    //   setCourseContent(data?.course_content?.technicalRoadMap[0]?.data);
    // } else {
    // }

    getLevelContent();
    // setCourseContent(courseInfo?.course_content?.technicalRoadMap[0].data);
  });

  useEffect(() => {
    getLevelContent();
  }, [level]);

  useEffect(() => {
    if (courseInfo?.levels[0] !== "default") {
      // setCourseInfo;
    }
  }, []);
  return (
    <>
      <div className={cb.cc_section}>
        <h3>Technical Roadmap</h3>
        {/* <h3>Course Content</h3> */}
        <div className={cb.tr_header}>
          <div className={cb.level_Section}>
            {courseInfo?.levels[0] !== null &&
            courseInfo?.levels[0] !== "default" ? (
              courseInfo?.levels.map((level_name, indx) => (
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
          </div>
          <div className={cb.expand_collapse_btn}>
            <button onClick={handleExpandAll}>
              {expandAll ? "Collapse All" : "Expand All"}
            </button>
          </div>
        </div>

        <div className={cb.acc_container}>
          {
            level !== null ? (
              courseContent?.map((acdata, index) => (
                <Accordion
                  key={index}
                  sno={index}
                  header={acdata.topicName}
                  body={acdata.subtopics}
                  isOpen={openIndex.includes(index)}
                  expandAll={expandAll}
                  toggleAccordion={() => toggleAccordion(index)}
                />
              ))
            ) : (
              <></>
            )
            // courseInfo.course_content.map((acdata, index) => (
            // <Accordion
            //   key={index}
            //   sno={index}
            //   header={acdata.topicName}
            //   body={acdata.subtopics}
            //   isOpen={openIndex.includes(index)}
            //   expandAll={expandAll}
            //   toggleAccordion={() => toggleAccordion(index)}
            // />
            // )
            // )
          }
        </div>
      </div>
    </>
  );
};

export default TechnicalRoadMapComponent;
