import React, { useState } from "react";

import fl from "./filter.module.css";

const FiltersAccordion = () => {
  const [isOpen, setIsOpen] = useState({
    language: false,
    courseCategory: false,
    level: false,
    price: false,     
    duration: false,
  });

  const toggleAccordion = (section) => {
    setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };

  return (
    <div className={fl.acc_container}>
      <div
        className={fl.acc_header}
        onClick={() => toggleAccordion("language")}
      >
        <h4>Language</h4>
      </div>
      {isOpen.language && (
        <div>
          <label>
            <input type="checkbox" name="language" value="english" />
            English
          </label>
          <label>
            <input type="checkbox" name="language" value="Hindi" />
            Hindi
          </label>
        </div>
      )}
    </div>
  );
};

const FilterComponent = () => {
  const initialValues = {
    language: [],
    courseCategory: [],
    level: [],
    price: [],
    duration: [],
  };
  console.log(initialValues);
  return (
    <>
      <div className={fl.filters_container   }>
        <h4>Filter by</h4>
        <FiltersAccordion />
      </div>
    </>
  );
};

export default FilterComponent;
