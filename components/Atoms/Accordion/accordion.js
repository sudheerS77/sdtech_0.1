import { useState } from "react";
import acc from "./accodrion.module.css";

import { BiPlus, BiMinus } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Accordion = ({ sno, header, body, isOpen, toggleAccordion }) => {
  // const [clicked, setClicked] = useState(a_status);
// console.log(isOpen);
  const txt_color = isOpen ? "#fff" : "#0f1923";
  const bg_color = isOpen ? "#0f1923" : "#fff";

  return (
    <>
      <div
        className={acc.accordion_container}
        // style={{ backgroundColor: bg_color, color: txt_color }}
      >
        <div className={acc.accordion}>
          <div className={acc.acc_head} onClick={toggleAccordion}>
            <div className={acc.acc_icon}>
              {isOpen === true ? <BiMinus /> : <BiPlus />} {sno + 1}
            </div>
            <h4>{header}</h4>
          </div>
          {isOpen ? (
            <div className={acc.acc_body}>
              {body?.map((accdata, indx) => (
                <div className={acc.acc_list} key={indx}>
                  <BsDot />
                  {accdata}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
