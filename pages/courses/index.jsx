"use client";
import CourseCard from "@/components/home/courseCard";
// Layout
import HomeLayout from "@/Layout/Home.layout";
// css files
import allc from "../../styles/course.module.css";
// Icons
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import FilterComponent from "@/components/courses/filters/filter.component";
import RowCourseCard from "@/components/home/rowCourse.card";
import allCourses from "../../data/allcourses.json";

const AllPaidCourses = () => {
  const [filteredCourses, setFilteredCourses] = useState();
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [filters, setFilters] = useState({
    language: { English: false, Hindi: false, Persian: false },
    courseCategory: {
      programming: false,
      robotics: false,
      web_Development: false,
      mobile_App_Development: false,
      data_Bases: false,
    },
    level: {
      beginner: false,
      intermediate: false,
      advance: false,
    },
    // price: {

    // },
    // duration: {
    //   one_month: false,
    //   two_months: false,
    //   three_months: false,
    // },

    
  });
  const handleInputChange = (e) => {
    // Search string
    const searchInput = e.target.value;
    // setQueryString(searchInput);
    if (searchInput !== "") {
      const filteredResults = allCoursesData?.filter((course) =>
        course?.name?.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filteredResults);
    } else {
      setFilteredCourses(allCoursesData);
    }
  };

  const applyFilters = () => {
    const filteredCoursesData = allCoursesData.filter((item) => {
      // Language Filter
      const languageKeys = Object.keys(filters.language).filter((data) => {
        return filters.language[data];
      });
      if (
        languageKeys.length > 0 &&
        !item.languages.some((lan) => languageKeys.includes(lan))
      ) {
        return false;
      }

      // Course Category Filter
      const courseCategoryKeys = Object.keys(filters.courseCategory).filter(
        (data) => {
          return filters.courseCategory[data];
        }
      );
      if (
        courseCategoryKeys.length > 0 &&
        !courseCategoryKeys.some((cat) =>
          item.course_category.includes(cat.split("_").join(" ").toLowerCase())
        )
      ) {
        return false;
      }

      // Level Filter
      const levelKeys = Object.keys(filters.level).filter((data) => {
        return filters.level[data];
      });
      if (
        levelKeys.length > 0 &&
        !item.level.some((lvl) => levelKeys.includes(lvl))
        // !levelKeys.some((lvl) => item.level.includes(lvl.toLowerCase()))
      ) {
        return false;
      }
      if (
        Object.keys(filters.level).some(
          (level) =>
            filters.level[level] && !item.level.includes(level.toLowerCase())
        )
      )
        return false;
      return true;
    });
    console.log(filteredCoursesData);
    setFilteredCourses(filteredCoursesData);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  useEffect(() => {
    // getCourses();
    console.log(allCourses);
    setAllCoursesData(allCourses);
    setFilteredCourses(allCourses);
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
          <div className={allc.allc_courses_container}>
            <FilterComponent filters={filters} setFilters={setFilters} />
            <div className={allc.allc_body}>
              {filteredCourses?.length !== 0 ? (
                <>
                  {filteredCourses?.map((data, indx) => (
                    <RowCourseCard key={indx} data={data} />
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
        </div>
      </HomeLayout>
    </>
  );
};

export default AllPaidCourses;
