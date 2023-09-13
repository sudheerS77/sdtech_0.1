"use client";
import React, { useEffect, useState } from "react";
const { useRouter } = require("next/router");
import Head from "next/head";
import axios from "axios";
import { APP_NAME, DOMAIN } from "@/config";

// Layout
import HomeLayout from "@/Layout/Home.layout";

// Components
import CourseBody from "@/components/courses/CourseBody";
import Banner from "@/components/courses/banner";
import SimilarCourses from "@/components/courses/similarCourses";

// Data
import allCourses from "../../data/allcourses.json";

const PaidCourse = ({ courseid, data }) => {
  const router = useRouter();

  const [courseInfo, setCourseInfo] = useState(data);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const filteredResults = allCourses?.filter(
      (course) => course?.slug.toLowerCase() === courseid?.toLowerCase()
    );
    setCourseInfo(filteredResults[0]);
  }, [, courseid]);

  const HeadSection = () => {
    return (
      <Head>
        <title>{courseInfo?.title} | sdtechacademy.com</title>
        <meta name="description" content={courseInfo?.description} />
        <meta name="keywords" content={courseInfo?.tags} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="canonical"
          href={`https://sdtechacademy.com/courses/${courseInfo?.slug}`}
        />
        <meta
          property="og:description"
          content={courseInfo?.description?.slice(0, 160)}
        />
        <meta property="og:type" content="webiste" />
        <meta
          property="og:url"
          content={`https://sdtechacademy.com/courses/${courseInfo?.slug}`}
        />
        <meta property="og:site_name" content={"sdtechacademy.com"} />
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
        <HeadSection />
        <Banner courseInfo={courseInfo} />
        <CourseBody courseInfo={courseInfo} />
        {/* <SimilarCourses /> */}
      </HomeLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { courseid } = context.params;

  return {
    props: {
      courseid,
      allCourses,
    },
  };
}

export default PaidCourse;
