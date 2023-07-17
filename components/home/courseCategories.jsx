import Link from "next/link";
import React, { useState } from "react";

import {BsCode, BsRobot} from 'react-icons/bs'
import {SiWebflow} from 'react-icons/si'

import hcc from "./categories.module.css"

const CourseCategories = () => {
    const [activeCourse, setActiveCourse] = useState("Programming")

    const categories = [
        {
            name: "Programming",
            icon: <BsCode className={hcc.caticon}/>,
            children: [
                {
                    name: "Python",
                    link: 'python'
                },
                {
                    name: "Java",
                    link: 'java'
                },
                {
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
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
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                }, {
                    name: "Python",
                    link: 'python'
                },
                {
                    name: "Java",
                    link: 'java'
                },
                {
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                },
            ]
        },
        {
            name: "Web Development",
            icon: <SiWebflow className={hcc.caticon}/>,
            children: [                
                {
                    name: "Python",
                    link: 'python'
                },
                {
                    name: "Java",
                    link: 'java'
                },
                {
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                },
            ]
        },
        {
            name: "Robotics",
            icon: <BsRobot className={hcc.caticon}/>,
            children: [
                {
                    name: "ROBOTICS",
                    link: 'python'
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
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                },
            ]
        },
        {
            name: "Machine Learning",
            icon: <BsCode className={hcc.caticon}/>,
            children: [
                {
                    name: "MACHINE LEARNING",
                    link: 'python'
                },
                {
                    name: "Java",
                    link: 'java'
                },
                {
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                },
            ]
        },
        {
            name: "Data Analytics",
            icon: <BsCode className={hcc.caticon}/>,
            children: [
                {
                    name: "Python",
                    link: 'python'
                },
                {
                    name: "Java",
                    link: 'java'
                },
                {
                    name: "JavaScript",
                    link: 'java-script'
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
                    name: "R",
                    link: 'r'
                },
            ]
        },
    ]
    const coursesList = categories.filter((data) => data.name === activeCourse)
   
    return (
        <>
            <div className={hcc.category_container} id="courseCategories">
                <div className={hcc.category_header}>
                    <h1>Course Categories</h1>
                </div>
                <div className={hcc.categories}>
                    <div className={hcc.catList}>
                        {
                            categories.map((cdata, indx) => (
                                <button key={indx} className={hcc.catbtn} onClick={() => setActiveCourse(cdata.name)}>
                                    {cdata.icon}{cdata.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className={hcc.coursesList}>
                        {coursesList[0]?.children?.map((courses, indx) => (
                            <Link href={`/courses/${courses.link}`} key={indx}>
                                <div className={hcc.courseName}>
                                    {courses.name}
                                </div>
                            </Link>
                        ))

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCategories;