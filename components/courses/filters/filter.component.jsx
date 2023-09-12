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
        <div className={fl.acc_container}>
          <div
            className={fl.filters_acc_header}
            onClick={() => toggleAccordion("language")}
          >
            <h4>{fname}</h4>
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
                  {filterIndividualName.split("_").join(" ").toUpperCase()}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FilterComponent = ({ filters, setFilters }) => {
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
