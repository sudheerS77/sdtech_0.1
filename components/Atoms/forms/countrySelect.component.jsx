import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import crf from "./courseRegisterForm.module.css";
import { ErrorMessage } from "formik";

const CountrySelectComponent = ({ values, setFieldValue }) => {
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();
  const selectCountry = (country) => {
    setCountry(country);
  };
  const selectRegion = (region) => {
    setRegion(region);
  };
  return (
    <>
      <div className={crf.form_group}>
        <div>
          <label htmlFor="country">Country</label>
          <CountryDropdown
            defaultOptionLabel="Select a country."
            value={values?.country}
            name="country"
            onChange={(ctry) => setFieldValue("country", ctry)}
            style={{
              padding: "8px 12px",
              width: "300px",
              height: "45px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "15px",
            }}
            //   tabIndex={1000}
          />
          <ErrorMessage
            name={"country"}
            component={"div"}
            className="inputFieldErrorMessage"
          />
        </div>
        <div>
          <label htmlFor="region">State / Province / Region</label>
          <RegionDropdown
            blankOptionLabel="No country selected."
            defaultOptionLabel="Now select a region."
            country={values?.country}
            name="region"
            value={values?.region}
            onChange={(reg) => setFieldValue("region", reg)}
            style={{
              padding: "8px 12px",
              width: "300px",
              height: "45px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "15px",
            }}
            //   tabIndex={1001}
          />
          <ErrorMessage
            name={"region"}
            component={"div"}
            className="inputFieldErrorMessage"
          />
        </div>
      </div>
    </>
  );
};

export default CountrySelectComponent;
