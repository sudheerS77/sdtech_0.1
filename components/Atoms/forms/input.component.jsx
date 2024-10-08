import { ErrorMessage, Field } from "formik";
import React from "react";

const InputComponent = ({
  label = "empty",
  name,
  value,
  type,
  placeholder,
}) => {
  return (
    <>
      <div className="form__input">
        {label !== "empty" && <label htmlFor={name}>{label}</label>}
        <Field
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
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

export default InputComponent;
