import React, { useEffect, useState } from "react";
const { useRouter } = require("next/router");
import Head from "next/head";

// Layout
import HomeLayout from "@/Layout/Home.layout";

// Components
import CourseBody from "@/components/courses/CourseBody";
import Banner from "@/components/courses/banner";
import SimilarCourses from "@/components/courses/similarCourses";

import { APP_NAME, DOMAIN } from "@/config";

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

  const mergeJSONData = async () => {
    const fileList = [
      "programming",
      "webDevelopment",
      "robotics",
      "mobileAppDevelopment",
      "databases",
    ];
    var courseData = [];
    let mergedData = [];
    const programming = [
      "python-programming",
      "java-script",
      "R-programming",
      "php-programming",
      "go-programming",
      "c-programming",
    ];
    const webDebevelopment = [
      "html-css-js",
      "html",
      "css",
      "java-script",
      "react-js",
      "node-js",
      "nextjs",
      "mern-stack",
      "mean-stack",
      "flask",
      "complete-java-full-stack-development",
      "python-full-stack",
      "full-stack-web-development",
    ];
    const mobileAppDevelopment = ["react-native", "dart", "flutter"];
    const databases = ["sql", "mongodb"];
    try {
      const courseFileName = programming.includes(courseid)
        ? "programming"
        : webDebevelopment.includes(courseid)
        ? "webDevelopment"
        : mobileAppDevelopment.includes(courseid)
        ? "mobileAppDevelopment"
        : databases.includes(courseid)
        ? "databases"
        : null;
      if (courseFileName === null) {
        setCourseInfo();
      } else {
        const jsonModule = await import(`../../data/${courseFileName}.json`);
        const jsonData = jsonModule.default;
        setMergedData(jsonData);
        const filteredResults = jsonData?.filter((course) =>
          course?.slug?.toLowerCase().includes(courseid?.toLowerCase())
        );
        setCourseInfo(filteredResults[0]);
      }

      // mergedData = mergedData.concat(jsonData);
      // if () {
      // }
      // for (let i = 0; i < fileList.length; i++) {
      //   const jsonModule = await import(`../../data/${fileList[i]}.json`);
      //   const jsonData = jsonModule.default;
      //   mergedData = mergedData.concat(jsonData);
      // }
      // setMergedData(mergedData);
      // const filteredResults = mergedData?.filter((course) =>
      //   course?.slug?.toLowerCase().includes(courseid?.toLowerCase())
      // );
      // setCourseInfo(filteredResults[0]);
    } catch (error) {
      // console.error("Error merging JSON files:", error);
    }
  };
  useEffect(() => {
    mergeJSONData();
  }, []);

  useEffect(() => {
    mergeJSONData();
  }, [courseid]);

  const HeadSection = () => {
    return (
      <Head>
        <title>
          {courseInfo.title} | {} {APP_NAME}
        </title>
        <meta name="description" content={courseInfo.description} />
        <meta name="keywords" content={courseInfo.tags} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href={`https://sdtechacademy.com/courses/${courseInfo.slug}`} />
        <meta
          property="og:description"
          content={courseInfo.description?.slice(0, 160)}
        />
        <meta property="og:type" content="webiste" />
        <meta
          property="og:url"
          content={`https://sdtechacademy.com/courses/${courseInfo.slug}`}
        />
        <meta property="og:site_name" content={`${APP_NAME}`} />
        {/* <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
        <meta
      property="og:image:secure_url"
      ccontent={`${API}/blog/photo/${blog.slug}`}
    />
    <meta property="og:image:type" content="image/jpg" /> */}

        <meta name="robots" content="index, follow"></meta>
      </Head>
    );
  };

  return (
    <>
      <HomeLayout>
        {isLoading ? (
          <>Loading....</>
        ) : courseInfo ? (
          <>
            <HeadSection />
            <Banner courseInfo={courseInfo} />
            <CourseBody courseInfo={courseInfo} />
            {/* <SimilarCourses /> */}
          </>
        ) : (
          <>OOPSE</>
        )}
      </HomeLayout>
    </>
  );
};

export default PaidCourse;
