"use client";
import React, { useEffect, useState } from "react";
const { useRouter } = require("next/router");
import Head from "next/head";
import axios from "axios";
import { APP_NAME, DOMAIN } from "@/config";

// Layout
import HomeLayout from "@/Layout/Home.layout";

// Components
import Banner from "@/components/workshops/courses/banner";
import CourseBody from "@/components/workshops/courses/CourseBody";

// Data
import allCourses from "../../data/allcourses.json";

const PaidCourse = ({ courseid, data }) => {
  const router = useRouter();

  const [courseInfo, setCourseInfo] = useState({
    _id: "64f80f84323f1823e59db11c",
    name: "دوره مقدماتی مهندس رباتیک ( مبانی رباتیک - الکترونیک جامع )",
    title: "دوره مقدماتی مهندس رباتیک ( مبانی رباتیک - الکترونیک جامع )",
    description:
      "رباتیک یک علم میان رشته ای است که متشکل از علوم الکترونیک، مکانیک و برنامه نویسی می باشد. همچنین رباتیک به عنوان زیر مجوعه ای از رشته های مهندسی و به خصوص رشتهء علوم و مهندسی کامپیوتر تعریف می شود که با طراحی، ساخت، بهره برداری و کاربرد ربات ها سروکار دارد. با گذراندن دوره مقدماتی مهندس رباتیک در آکادمی بین المللی SD Tech، که با همکاری دانشگاه الزهرا و انجمن رباتیک و مکاترونیک این دانشگاه برگزار می شود، می توانید مسیر یادگیری خود را آغاز کنید. دراین دوره آموزشی حداقل 30 مینی پروژه و 5 پروژه انجام خواهید داد و در هر جلسه حداقل دو تمرین عملی و یک تمرین تئوری وجود خواهد داشت. دوره به صورت کاملا خروجی محور و کاربردی بوده و پاسخ تمامی مسائل و نحوه انجام پروژه ها نیز در اختیارتان قرار خواهد گرفت. همچنین در انتهای دوره مدرک معتبر و بین المللی دوزبانه به صورت الکترونیکی و فیزیکی در اختیار شما قرار خواهد گرفت.",
    meta_title:
      "Introduction to Robotics: Explore History, Types, and AI Connection | Beginner Course",
    meta_description:
      "Unlock the world of robotics in our beginner course. Explore the history of robotics, learn about different robot types, and understand the link between AI and robotics. Discover exciting career opportunities in this rapidly evolving field.",
    image:
      "https://res.cloudinary.com/df8aswwta/image/upload/v1696048723/images/robotics/xhroybarnx4hpsyzw0ce.png",
    image1:
      "https://res.cloudinary.com/df8aswwta/image/upload/v1694713471/images/ozvlwqv0lx383xqm0teh.jpg",
    isbigimage: true,
    slug: "zero-beginner",
    categories: ["Robotics Fundamentals", "Robotic Programming"],
    tags: ["Industrial Robots"],
    languages: ["persian"],
    level: ["beginner"],
    duration: ["1Month", "2Months"],
    course_category: "robotics",
    levels: ["default"],
    learning_outcomes: [
      "آنچه در این دوره می آموزید:",
      "درک جامعی از چیستی رباتیک و تکامل تاریخی آن",
      "تعامل هوش مصنوعی و رباتیک و تمایز ها",
      "آشنایی و درک مبانی الکترونیک ( الکترسیته، جریان، ولتاژ، مقاومت و... )",
      "قانون اهم و مدار های اولیه",
      "شماتیک خوانی و طراحی مدار",
      "آشنایی با عملکرد و ساختار قطعات مختلف الکترونیکی و انجام مینی پروژه",
      "ایجاد و تجزیه و تحلیل مدارهای الکترونیکی، از جمله مدارهای سری و موازی",
      "انجام بیش از 30 پروژه  و مینی پروژه عملی و کاربردی",
      "دیتا شیت خوانی و تحلیل آن",
      "نقشه کشی و عیب یابی مدار",
      "قطعه شناسی و کاربرد ( خازن، مقاومت ، مقاومت متغییر، سوئیچ، ، دیود، بازر، LED، LED RGB ، ترانزیستور، کانتور ها، رگولاتور، سون سگمنت، پوتانسیومتر و.... )",
      "لحیم کاری کاری و اصول آن",
      "آشنایی با ای سی ها و ماژول ها",
      "آشنایی با مولتی متر",
      "و ....",
    ],
    course_content: {
      _id: "64f80f83323f1823e59db10b",
      technicalRoadMap: [
        {
          level: "default",
          data: [
            {
              topicName: "introduction to robotics",
              subtopics: [
                "What is robotics",
                "The history of robotics and its first appearance",
                "Entering the world of robotics",
                "What is a robot?",
                "Types of robots",
                "Categories in Robot Studies",
                "The connection between artificial intelligence and robotics",
                "career opportunities",
              ],
              _id: "64f80f83323f1823e59db10d",
            },
            {
              topicName: "Introducing Robotics Learning Path",
              subtopics: [
                "Why robotics?",
                "How to enter the world of robotics",
                "Educational Resources",
                "Educational roadmaps",
                "Finding your interests and talents",
                "self-study or training class",
                "How to find your interest in robotics",
                "robotic learning roadmap ",
                "A variety of teaching and learning methods",
              ],
              _id: "64f80f83323f1823e59db10e",
            },
            {
              topicName: "Fundamentals of Robotics and Robotics Technology",
              subtopics: [
                "Introduction to electronics in robotics",
                "Introduction to mechanics in robotics",
                "Introduction to programming in robotics",
                "Professional branches of robotics",
                "Robotics competitions and challenges",
              ],
              _id: "64f80f83323f1823e59db10f",
            },
            {
              topicName: "The role of other sciences in robotics",
              subtopics: [
                "Artificial Intelligence and Robotics",
                "The role of economics and optimization",
                "safety",
                "inventions",
                "industrialization",
                "The future of robots and robotics",
              ],
              _id: "64f80f83323f1823e59db110",
            },
            {
              topicName: "Conclusion",
              subtopics: [
                "Educational steps and levels in robotics",
                "Introduction of robotics course of SD Tech Academy",
                "Educational components of the robotics course",
              ],
              _id: "64f80f83323f1823e59db111",
            },
          ],
          level_learning_outcomes: [],
        },
      ],
      __v: 0,
    },
    isDiscounted: {
      status: true,
      percentage: 100,
    },
    classes: {
      no_of_classes: 7,
      no_of_months: " - ",
      certification_name: "",
    },
    pricing: {
      pricing: [
        {
          course_level_category: "1 : 1 Private Sessions",
          course_level_pricing: [
            {
              level: "default",
              rupees: "0",
              dollars: "52",
              _id: "64eed26eda05b4219356ef48",
            },
          ],
        },
        {
          course_level_category: "Group Sessions",
          course_level_pricing: [
            {
              level: "default",
              rupees: "0",
              dollars: "10",
              _id: "64eed26eda05b4219356ef4a",
            },
          ],
        },
      ],
      __v: 0,
    },
    status: "active",
    createdAt: "2023-09-06T05:35:00.671Z",
    updatedAt: "2023-09-06T05:35:00.671Z",
    __v: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const filteredResults = allCourses?.filter(
    //   (course) => course?.slug.toLowerCase() === courseid?.toLowerCase()
    // );
    // setCourseInfo(filteredResults[0]);
  }, [, courseid]);

  const HeadSection = () => {
    return (
      <Head>
        <title>{courseInfo?.title} | sdtechacademy.com</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Language" content="fa" />
        <meta charset="UTF-8"></meta>
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
