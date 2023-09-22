import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import { RxArrowDown } from "react-icons/rx";

import c from "./carrers.module.css";
import Link from "next/link";

const CarrersHeroComponent = () => {
  return (
    <>
      <div className={c.c__hero__container}>
        <div className={c.c__image}>
          <img
            src="https://img.freepik.com/free-vector/abstract-geometric-design_1048-12109.jpg"
            alt=""
          />
        </div>
        <div className={c.c__hero__content}>
          <div className={c.c__hero__content__container}>
            <MdSupervisedUserCircle className={c.c__hero__icons} />
            <h4>JOIN THE SDTECH TEAM</h4>
            <h1>Create clever things with us!</h1>
            <p>
              We’re a close-knit crew of professionals, focused on delivering
              best-in-class digital products and exciting campaigns for clients
              all over the world. There’s only one thing we take really
              seriously: work.
            </p>
            <div className={c.c__letsgo}>
              <Link href="#">
                <RxArrowDown className={c.c__downarrow__icons} />
                <p>Lets go</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrersHeroComponent;
