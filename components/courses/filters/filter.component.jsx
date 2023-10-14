import React, { useState } from "react";

import fl from "./filter.module.css";
import { BsChevronDown, BsSearch } from "react-icons/bs";

const FiltersAccordion = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState({
    language: true,
    courseCategory: true,
    level: true,
    price: true,
    duration: true,
  });
  const filterNames = ["language", "courseCategory", "level"];
  const toggleAccordion = (section) => {
    // setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };
  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        [value]: !prev[name][value],
      },
    }));
  };

  return (
    <div>
      {filterNames.map((fname, index) => (
        <div key={index} className={fl.acc_container}>
          <div
            className={fl.filters_acc_header}
            onClick={() => toggleAccordion("language")}
          >
            <h4>{fname.charAt(0).toUpperCase() + fname.slice(1)}</h4>
            <div>
              <BsChevronDown />
            </div>
          </div>
          {isOpen.language && (
            <div className={fl.filters_acc_body}>
              {Object.keys(filters[fname]).map((filterIndividualName, indx) => (
                <label key={indx}>
                  <input
                    type="checkbox"
                    checked={filters[fname][filterIndividualName]}
                    onChange={() =>
                      handleFilterChange(fname, filterIndividualName)
                    }
                  />
                  {
                    filterIndividualName.charAt(0).toUpperCase() +
                      filterIndividualName.slice(1).split("_").join(" ")
                    // .toLowerCase()
                  }
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FilterComponent = ({ filters, setFilters, handleInputChange }) => {
  return (
    <>
      <div className={fl.filters_container}>
        <h3>Filter by</h3>
        <div>
          <div className={fl.fl_search_section}>
            <input
              type="search"
              placeholder="search courses"
              onChange={handleInputChange}
            />
            <span className={fl.fl_search_icon_section}>
              <BsSearch className={fl.fl_search_icon} />
            </span>
          </div>
        </div>
        <FiltersAccordion filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};

export default FilterComponent;
