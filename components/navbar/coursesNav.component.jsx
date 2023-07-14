import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import cnav from "@/styles/coursesnav.module.css"



const CoursesNav = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 4
  };
  const courses = [
    {
      name: "Python",
      link: 'python'
    },
    {
      name: "Java",
      link: 'java'
    },
    {
      name: "python",
      link: 'python'
    },
    {
      name: "C",
      link: 'c'
    },
    {
      name: "C++",
      link: 'c++'
    },
    {
      name: "PHP",
      link: 'php'
    },
    {
      name: "MachineLearning",
      link: 'machine-learning'
    },
    {
      name: "ARM",
      link: 'arm'
    },
    {
      name: "Arduino",
      link: 'arduino'
    },
    {
      name: "Python",
      link: 'python'
    },
    {
      name: "Java",
      link: 'java'
    },
    {
      name: "python",
      link: 'python'
    },
    {
      name: "C",
      link: 'c'
    },
    {
      name: "C++",
      link: 'c++'
    },
    {
      name: "PHP",
      link: 'php'
    },
    {
      name: "Machine Learning",
      link: 'machine-learning'
    },
    {
      name: "Arduino",
      link: 'arduino'
    },
    {
      name: "ARM",
      link: 'arm'
    }
  ]
  const CourseNameCard = ({ data }) => {
    return (
      <div className={cnav.chip}>
        <Link href={`/${data.link}`}>{data.name}</Link>
      </div>
    )
  }
  return (
    <>
      <div className={cnav.csnavContainer}>
        <div className={cnav.csnav}>
          <Slider {...settings}>
            {courses.map((data, indx) => (
              <CourseNameCard key={indx} data={data} />
            ))

            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default CoursesNav;