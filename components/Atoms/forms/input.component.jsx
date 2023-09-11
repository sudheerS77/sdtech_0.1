import { ErrorMessage, Field } from "formik";
import React from "react";

const InputComponent = ({ label = null, name, type, placeholder }) => {
  return (
    <>
      <div>
        {label !== null && <label htmlFor={name}>{label}</label>}
        <Field type={type} id={name} name={name} placeholder={placeholder} />
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
