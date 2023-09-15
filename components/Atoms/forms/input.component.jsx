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
      <div>
        {label !== "empty" && <label htmlFor={name}>{label}</label>}
        <Field
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
        />
      </div>
      <div>
        <ErrorMessage
          name={name}
          component={"div"}
          className="inputFieldErrorMessage"
        />
      </div>
    </>
  );
};

export default InputComponent;
