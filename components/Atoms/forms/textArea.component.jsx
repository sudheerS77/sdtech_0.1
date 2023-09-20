import { ErrorMessage, Field } from "formik";
import React from "react";

const TeaxtAreaComponent = ({ label, name, value }) => {
  return (
    <>
      <div>
        {label !== "empty" && <label htmlFor={name}>{label}</label>}
        <Field
          as="textarea"
          id="message"
          name="message"
          value={value}
          rows="5"
        />
        <ErrorMessage
          name={name}
          component={"div"}
          className="inputFieldErrorMessage"
        />
      </div>
      {/* <div></div> */}
    </>
  );
};

export default TeaxtAreaComponent;
