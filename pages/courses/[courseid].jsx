import React, { useEffect, useState } from "react";
const { useRouter } = require("next/router");
import axios from "axios";

// Layout
import HomeLayout from "@/Layout/Home.layout";

// Components
import CourseBody from "@/components/courses/CourseBody";
import Banner from "@/components/courses/banner";
import SimilarCourses from "@/components/courses/similarCourses";

// import data from '../../lib/mergejsondata';
// Data
import programming from "../../data/programming.json";
import robotics from "../../data/robotics.json";

const PaidCourse = ({ id }) => {
  const router = useRouter();

  const { courseid, coursename } = router.query;

  const [courseInfo, setCourseInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mergedData, setMergedData] = useState([]);

  const courseDetails = [
    {
      name: "Full Stack Web Development",
      image:
        "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
      cost: 5000,
      description:
        "The MERN Stack is a popular web development technology stack that is widely used for building scalable and dynamic web applications. The MERN Stack comprises of four key technologies: MongoDB, Express.js, React.js, and Node.js, which together provide a powerful, end-to-end framework for developing web applications. By the end of the course, you will have a solid understanding of the MERN Stack",
      link: "full-stack-web-development",
      learning_outcomes: [
        "HTML and HTML 5",
        "CSS and CSS3",
        "Wokring on Template",
        "Mobile Responsive Design",
        "Flex amd Grid",
        "JavaScript",
        "Understanding DOM",
        "Advance JavaScript",
        "Git and Github",
        "Starting with React",
        "Tailwind With React",
        "Networking and Linux",
        "Concepts of DataBases",
        "Understanding MySQL",
        "Understanding NoSQL",
        "NodeJS/Express",
        "Full Fledge Project",
      ],
      course_content: [
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
      ],
    },
    {
      name: "Machine Learning BootCamp",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      cost: 5000,
      description:
        "The MERN Stack is a popular web development technology stack that is widely used for building scalable and dynamic web applications. The MERN Stack comprises of four key technologies: MongoDB, Express.js, React.js, and Node.js, which together provide a powerful, end-to-end framework for developing web applications. By the end of the course, you will have a solid understanding of the MERN Stack",
      link: "machine-learning-bootcamp",
      learning_outcomes: [
        "HTML and HTML 5",
        "CSS and CSS3",
        "Wokring on Template",
        "Mobile Responsive Design",
        "Flex amd Grid",
        "JavaScript",
        "Understanding DOM",
        "Advance JavaScript",
        "Git and Github",
        "Starting with React",
        "Tailwind With React",
        "Networking and Linux",
        "Concepts of DataBases",
        "Understanding MySQL",
        "Understanding NoSQL",
        "NodeJS/Express",
        "Full Fledge Project",
      ],
      course_content: [
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
      ],
    },
    {
      name: "Robotics 2.0",
      image:
        "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
      cost: 5000,
      description:
        "The MERN Stack is a popular web development technology stack that is widely used for building scalable and dynamic web applications. The MERN Stack comprises of four key technologies: MongoDB, Express.js, React.js, and Node.js, which together provide a powerful, end-to-end framework for developing web applications. By the end of the course, you will have a solid understanding of the MERN Stack",
      link: "robotics-2.0",
      learning_outcomes: [
        "HTML and HTML 5",
        "CSS and CSS3",
        "Wokring on Template",
        "Mobile Responsive Design",
        "Flex amd Grid",
        "JavaScript",
        "Understanding DOM",
        "Advance JavaScript",
        "Git and Github",
        "Starting with React",
        "Tailwind With React",
        "Networking and Linux",
        "Concepts of DataBases",
        "Understanding MySQL",
        "Understanding NoSQL",
        "NodeJS/Express",
        "Full Fledge Project",
      ],
      course_content: [
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
        {
          topicName: "Introduction to Course - Fundamental of Development",
          subtopics: [
            "Internet and How it works?",
            "Understanding IP Address/Domain/Server/DNS",
            "Understand and Difference between Web and HTTP",
            "Understanding Protocols",
            "Browser and Browser Engine",
            "Test on Fundamental of Development",
          ],
        },
        {
          topicName:
            "Introduction to Course - Understanding Frontend and Backend",
          subtopics: [
            "Web Designing Tools",
            "Traditional and Modern Web Pages",
            "Backend and requirement of it in an application",
            "API",
            "MVC",
            "Test on Understanding Frontend and Backend",
          ],
        },
        {
          topicName: "Introduction to Course - RoadMap to the Course",
          subtopics: ["Course Introduction"],
        },
      ],
    },
  ];

  // useEffect(() => {
  //   const course_info = mergedData.filter((data) => data.slug.toLowerCase() === courseid.toLowerCase());
  //   console.log(mergedData, courseid, course_info);
  //   setCourseInfo(course_info);
  //   // const filteredResults = mergedData?.filter((course) =>
  //   //     course?.name?.toLowerCase().includes(searchInput.toLowerCase())
  //   //   );
  //   //   setFilteredCourses(filteredResults);
  // }, [courseid]);


  useEffect(() => {


    const getCourse = async () => {
      setIsLoading(true);

      const data = await axios.get(
        `http://localhost:3000/api/course/${coursename}`
      );

      setCourseInfo(data.data);
      setIsLoading(false);
    };

    const delay = 0;
    const timeoutId = setTimeout(() => {
      // getCourse();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [courseid]);

  useEffect(() => {
    const fileList = [
      // "webDevelopmentData",
      "programming",
      "robotics",
    ];
    var courseData = [];
    const mergeJSONData = async () => {
      let mergedData = [];
      try {
        for (let i = 0; i < fileList.length; i++) {
          const jsonModule = await import(`../../data/${fileList[i]}.json`);
          const jsonData = jsonModule.default;
          mergedData = mergedData.concat(jsonData);
        }
        setMergedData(mergedData);
        console.log(mergedData);
        const filteredResults = mergedData?.filter((course) =>
        course?.slug?.toLowerCase().includes(courseid.toLowerCase())
        );
        setCourseInfo(filteredResults[0]);
      } catch (error) {
        console.error("Error merging JSON files:", error);
      }
    };
    mergeJSONData();
    console.log(mergedData);
  }, []);
  console.log(courseInfo);

  return (
    <>
      <HomeLayout>
        {isLoading ? (
          <>Loading....</>
        ) : (
          <>
            <Banner courseInfo={courseInfo} />
            <CourseBody courseInfo={courseInfo} />
            <SimilarCourses />
          </>
        )}
      </HomeLayout>
    </>
  );
};

export default PaidCourse;
