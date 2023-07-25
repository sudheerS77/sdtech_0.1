import React, { useEffect, useState } from "react";
const { useRouter } = require("next/router");
import axios from "axios";
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

  useEffect(() => {   
    const delay = 0;
    const timeoutId = setTimeout(() => {}, delay);

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
        // console.log(mergedData);
        const filteredResults = mergedData?.filter((course) =>
          course?.slug?.toLowerCase().includes(courseid.toLowerCase())
        );
        setCourseInfo(filteredResults[0]);
      } catch (error) {
        console.error("Error merging JSON files:", error);
      }
    };
    mergeJSONData();
  }, []);

  useEffect(() => {
    console.log("REFRESHED");
  }, [])

  const HeadSection = () => {
    return (
      <Head>
        {/* <title>
      {blog.title} | {APP_NAME}
    </title>
    <meta name="description" content={blog.mdesc} />
    <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />

    <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
    
    <meta property="og:description" content={blog.mdesc} />
    <meta property="og:type" content="webiste" />
    <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
    <meta property="og:site_name" content={`${APP_NAME}`} />

    <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
    <meta
      property="og:image:secure_url"
      ccontent={`${API}/blog/photo/${blog.slug}`}
    />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="fb:app_id" content={`${FB_APP_ID}`} /> */}
        <title>
          {courseInfo.title} | {} {APP_NAME}
        </title>
        <meta name="description" content={courseInfo.description} />
        <meta name="keywords" content={courseInfo.tags} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="canonical" href={`${DOMAIN}/courses/${courseInfo.slug}`} />
        <meta property="og:description" content={courseInfo.description?.slice(0, 160)} />
        <meta property="og:type" content="webiste" />
        <meta
          property="og:url"
          content={`${DOMAIN}/courses/${courseInfo.slug}`}
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
      {/* <HeadSection /> */}
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
