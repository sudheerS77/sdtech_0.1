import CourseCard from "@/components/home/courseCard";
// Layout
import HomeLayout from "@/Layout/Home.layout";
// css files
import allc from "./index.module.css";
// Icons
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const AllPaidCourses = () => {
  const [queryString, setQueryString] = useState("");

  const ourCoursesData = [
    {
      name: "Full Stack Web Development",
      image:
        "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
      cost: 5000,
      link: "full-stack-web-development",
    },
    {
      name: "Machine Learning BootCamp",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      cost: 5000,
      link: "machine-learning-bootcamp",
    },
    {
      name: "Robotics 2.0",
      image:
        "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
      cost: 5000,
      link: "robotics-2.0 ",
    },
    {
      name: "Machine Learning BootCamp",
      image:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      cost: 5000,
      link: "machine-learning-bootcamp",
    },
    {
      name: "Robotics 2.0",
      image:
        "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
      cost: 5000,
      link: "robotics-2.0 ",
    },
    {
      name: "Full Stack Web Development",
      image:
        "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
      cost: 5000,
      link: "full-stack-web-development",
    },
  ];
  const [filteredCourses, setFilteredCourses] = useState(ourCoursesData);
  console.log(queryString);
  const handleInputChange = (e) => {
    const searchInput = e.target.value;
    setQueryString(searchInput);
    if (searchInput !== "") {
      const filteredResults = ourCoursesData.filter((course) =>
        course.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filteredResults);
    } else {
      setFilteredCourses(ourCoursesData);
    }
    // const filteredResults1 = originalData.filter(item =>
    //     item.toLowerCase().includes(inputValue.toLowerCase())
    //   );
    //   setFilteredData(filteredResults);
  };
  console.log({ ourCoursesData });
  console.log({ filteredCourses });
  return (
    <>
      <HomeLayout>
        <div className={allc.allc_container}>
          <div className={allc.allc_head}>
            <input
              type="search"
              placeholder="search courses"
              onChange={handleInputChange}
            />
            <span className={allc.allc_search_icon}>
              <BsSearch />
            </span>
          </div>
          <div className={allc.allc_body}>
            {filteredCourses?.length !== 0 ? (
              <>
                {filteredCourses?.map((data, indx) => (
                  <CourseCard key={indx} data={data} />
                ))}
              </>
            ) : (
              <>
              <p>!oopse</p>
              </>
            )}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default AllPaidCourses;
