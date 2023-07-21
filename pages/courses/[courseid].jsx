import HomeLayout from "@/Layout/Home.layout";
import CourseBody from "@/components/courses/CourseBody";
import Banner from "@/components/courses/banner";
import SimilarCourses from "@/components/courses/similarCourses";
import axios from "axios";
import { useEffect, useState } from "react";

const { useRouter } = require("next/router");

const PaidCourse = ({ id }) => {
  const router = useRouter();

  const { courseid, coursename } = router.query;

  const [courseInfo, setCourseInfo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const course_info = courseDetails.filter((data) => data.link === courseid);

    setCourseInfo(course_info);
  }, [courseid]);

  useEffect(() => {
    const getCourse = async () => {
      setIsLoading(true);

      const data = await axios.get(
        `https://sdtech-0-1.vercel.app/api/course/${coursename}`
      );

      setCourseInfo(data.data);
      setIsLoading(false);
    };

    const delay = 0;
    const timeoutId = setTimeout(() => {
      getCourse();
    }, delay);

    return () => clearTimeout(timeoutId);
    // const timeoutId = setTimeout(() => {
    //   fetchData();
    // }, delay);

    // return () => clearTimeout(timeoutId);
  }, [courseid]);
  console.log(coursename);
  console.log();

  return (
    <>
      <HomeLayout>
        {isLoading ? (
          <>Loading....</>
        ) : (
          <>
            <Banner courseInfo={courseInfo.data} />
            <CourseBody courseInfo={courseInfo.data} />
            <SimilarCourses />
          </>
        )}
      </HomeLayout>
    </>
  );
};

export default PaidCourse;
