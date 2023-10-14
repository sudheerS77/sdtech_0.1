import React, { useState } from "react";

import fl from "./filter.module.css";

const FiltersAccordion = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState({
    language: true,
    courseCategory: true,
    level: true,
    price: true,
    duration: true,
  });

  const toggleAccordion = (section) => {
    // setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };

  return (
    <div>
      {filters?.map((filters_items, index) => (
        <div key={index} className={fl.acc_container}>
          <div
            className={fl.filters_acc_header}
            onClick={() => toggleAccordion("language")}
          >
            <h4>{filters_items.title}</h4>
          </div>
          {filters_items.filtersList.map((data) => (
            <>{JSON.stringify(data)}</>
          ))}
          {/* {filters_items?.filtersList?.map((flist_data, indx) => (
            <>
              {isOpen.language && (
                <div className={fl.filters_acc_body}>
                  <label key={indx}>
                    <input type="checkbox" name="language" value="english" />
                    {flist_data}
                  </label>
                </div>
              )}
            </>
          ))} */}
        </div>
      ))}
    </div>
  );
};

const FilterComponent = () => {
  const [filters, setFilters] = useState([
    {
      title: "language",
      filtersList: [{ english: false }, { Hindi: false }, { persian: false }],
    },
    {
      title: "courseCategory",
      filtersList: [
        { programming: false },
        { robotics: false },
        { web_Development: false },
        { mobile_App_Development: false },
        { data_Bases: false },
      ],
    },
    {
      title: "level",
      filtersList: [
        { beginner: false },
        { intermediate: false },
        { advance: false },
      ],
    },
    {
      title: "duration",
      filtersList: [
        { one_month: false },
        { two_months: false },
        { three_months: false },
      ],
    },

    // price: {

    // },
  ]);
  return (
    <>
      <div className={fl.filters_container}>
        <h3>Filter by</h3>
        <FiltersAccordion filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};

export default FilterComponent;
