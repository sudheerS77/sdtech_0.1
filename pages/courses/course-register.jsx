import React from "react";

import { useRouter } from "next/router";
import HomeLayout from "@/Layout/Home.layout";
import CourseRegisterForm from "@/components/Atoms/forms/courseRegisterForm";

const CourseRegister = ({ name }) => {
  console.log(name);
  return (
    <>
      <HomeLayout>
        <CourseRegisterrForm courseName={name} />
      </HomeLayout>
    </>
  );
};

export default CourseRegister;

CourseRegister.getInitialProps = ({ query }) => {
  const { name } = query;

  return { name };
};
