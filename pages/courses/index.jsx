import CourseCard from "@/components/home/courseCard";
// Layout
import HomeLayout from "@/Layout/Home.layout";
// css files
import allc from "../../styles/course.module.css";
// Icons
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

const AllPaidCourses = () => {
  const [queryString, setQueryString] = useState("");

  const [ourCoursesData, setOutCoursesData] = useState([
    // {
    //   name: "Full Stack Web Development",
    //   image:
    //     "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
    //   cost: 5000,
    //   link: "full-stack-web-development",
    // },
    // {
    //   name: "Machine Learning BootCamp",
    //   image:
    //     "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
    //   cost: 5000,
    //   link: "machine-learning-bootcamp",
    // },
    // {
    //   name: "Robotics 2.0",
    //   image:
    //     "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
    //   cost: 5000,
    //   link: "robotics-2.0 ",
    // },
    // {
    //   name: "Machine Learning BootCamp",
    //   image:
    //     "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
    //   cost: 5000,
    //   link: "machine-learning-bootcamp",
    // },
    // {
    //   name: "Robotics 2.0",
    //   image:
    //     "https://www.thebigredgroup.com/wp-content/uploads/2021/07/5-reasons.jpg",
    //   cost: 5000,
    //   link: "robotics-2.0 ",
    // },
    // {
    //   name: "Full Stack Web Development",
    //   image:
    //     "https://www.webindiamaster.com/assests/images/web-development-company-1-2022.jpg",
    //   cost: 5000,
    //   link: "full-stack-web-development",
    // },
  ]);
  const [filteredCourses, setFilteredCourses] = useState();
  const [mergedData, setMergedData] = useState([]);

  const handleInputChange = (e) => {
    // Search string
    const searchInput = e.target.value;
    setQueryString(searchInput);
    if (searchInput !== "") {
      const filteredResults = mergedData?.filter((course) =>
        course?.name?.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filteredResults);
    } else {
      setFilteredCourses(mergedData);
    }
  };

  // const getCourses = async () => {
  //   const data = await axios.get("http://localhost:3000//api/course/route");
  //   console.log(data?.data.data);
  //   setOutCoursesData(data.data?.data);
  //   setFilteredCourses(data.data?.data);
  // };

  useEffect(() => {
    // getCourses();
  });

  useEffect(() => {
    const fileList = [
      "programming",
      "webDevelopment",
      "robotics",
      "mobileAppDevelopment",
      "databases"
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
        setFilteredCourses(mergedData);
      } catch (error) {
        console.error("Error merging JSON files:", error);
      }
    };
    mergeJSONData();
  }, []);
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
                <div className={allc.notFound}>
                  <p>!oopse</p>
                </div>
              </>
            )}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default AllPaidCourses;
