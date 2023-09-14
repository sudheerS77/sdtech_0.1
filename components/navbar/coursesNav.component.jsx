import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";
import cnav from "@/styles/coursesnav.module.css";

const CoursesNav = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const courses = [
    {
      name: "Python",
      link: "python-programming",
    },
    // {
    //   name: "Java",
    //   link: "complete-java-full-stack-development",
    // },
    // {
    //   name: "PHP",
    //   link: "php-programming",
    // },
    {
      name: "HTML",
      link: "html",
    },
    {
      name: "CSS",
      link: "css",
    },
    {
      name: "JavaScript",
      link: "java-script",
    },
    // {
    //   name: "NodeJS",
    //   link: "node-js",
    // },
    {
      name: "ReactJS",
      link: "react-js",
    },
    {
      name: "NextJS",
      link: "nextjs",
    },
    {
      name: "React Native",
      link: "react-native",
    },
    {
      name: "Dart",
      link: "dart",
    },
    {
      name: "Flutter",
      link: "flutter",
    },
    {
      name: "MYSQL",
      link: "sql",
    },
    {
      name: "MongoDB",
      link: "mongodb",
    },
  ];
  const CourseNameCard = ({ data }) => {
    return (
      <div className={cnav.chip}>
        <Link href={`/courses/${data.link}`}>{data.name}</Link>
      </div>
    );
  };
  return (
    <>
      <div className={cnav.csnavContainer}>
        <div className={cnav.csnav}>
          <Slider {...settings}>
            {courses.map((data, indx) => (
              <CourseNameCard key={indx} data={data} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CoursesNav;
