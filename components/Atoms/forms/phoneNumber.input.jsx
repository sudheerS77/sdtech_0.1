import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import { ErrorMessage, Field } from "formik";

const PhoneInputComponent = ({ field, name, values, setFieldValue }) => {
  // const [value, setValue] = useState();

  return (
    <PhoneInput
      {...field}
      defaultCountry="IN"
      placeholder="Enter phone number"
      value={values[name]}
      onChange={(value) => setFieldValue(name, value)}
      error={
        values[name]
          ? isValidPhoneNumber(values[name])
            ? undefined
            : "Invalid phone number"
          : "Phone number required"
      }
    />
  );
};

const PhoneNumberInput = ({ label, name, values, setFieldValue }) => {
  return (
    <>
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <Field name={name}>
          {({ field }) => (
            <PhoneInputComponent
              field={field}
              name={name}
              values={values}
              setFieldValue={setFieldValue}
            />
          )}
        </Field>
        {/* <PhoneInputComponent name={name} setFieldValue={setFieldValue} /> */}
        <ErrorMessage
          name={name}
          component={"div"}
          className="inputFieldErrorMessage"
        />
      </div>
      {/* <div>
      </div> */}
    </>
  );
};

export default PhoneNumberInput;
