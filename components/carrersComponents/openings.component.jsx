import React from "react";

import c from "./carrers.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const JobCard = () => {
  return (
    <>
      <Link href={`#`}>
        <div className={c.c__job__card}>
          <h4>Full Stack Developer - Mern Stack</h4>
          <div>
            <BsArrowRight />
          </div>
        </div>
      </Link>
    </>
  );
};

const OpeningsComponent = () => {
  return (
    <>
      <div className={c.c__openings__container}>
        <div className={c.c__openings__header}>
          <h2>
            Open positions <span>—</span>
          </h2>
          <p>
            Let’s create clever things together! Are you up for it? Let us know!
          </p>
        </div>
        <div className={c.c__jobs__container}>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
};

export default OpeningsComponent;
