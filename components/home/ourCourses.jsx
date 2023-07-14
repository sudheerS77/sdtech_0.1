import React from "react";

import hc from "./ourCourses.module.css"
import CourseCard from "./courseCard";
import Link from "next/link";

const OurCourses = () => {
    const ourCoursesData = [
        {
            name: "Full Stack Web Development",
            image: "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
            cost: 5000,
            link: "full-stack-web-development"
        },
        {
            name: "Machine Learning BootCamp",
            image: "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
            cost: 5000,
            link: "machine-learning-bootcamp"
        },
        {
            name: "Robotics 2.0",
            image: "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
            cost: 5000,
            link: "robotics-2.0 "
        },
        {
            name: "Machine Learning BootCamp",
            image: "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
            cost: 5000,
            link: "machine-learning-bootcamp"
        },
        {
            name: "Robotics 2.0",
            image: "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
            cost: 5000,
            link: "robotics-2.0 "
        },
        {
            name: "Full Stack Web Development",
            image: "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
            cost: 5000,
            link: "full-stack-web-development"
        },
        
       
    ]

    return (
        <>
            <div className={hc.oc_container}>
                <div className={hc.oc_header}>
                    <h4>Our Courses</h4>
                    <Link href="/courses" className={hc.oc_view_all}>
                        <span>
                            View All
                        </span>
                    </Link>
                </div>
                <div className={hc.oc_section}>
                    {
                        ourCoursesData.map((data, indx) => (
                            <CourseCard key={indx} data={data} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OurCourses;