import { useState } from "react";
import acc from "./accodrion.module.css";

import { BiPlus, BiMinus } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const Accordion = ({ sno, header, body }) => {
  const [clicked, setClicked] = useState(false);

  const txt_color = clicked ? "#fff" : "#0f1923";
  const bg_color = clicked ? "#0f1923" : "#fff";

  const handleAccordion = () => {
    // setClicked(false);
    setClicked(!clicked);
  };
  return (
    <>
      <div
        className={acc.accordion_container}
        // style={{ backgroundColor: bg_color, color: txt_color }}
      >
        <div className={acc.accordion}>
          <div className={acc.acc_head} onClick={handleAccordion}>
            <div className={acc.acc_icon}>
              {clicked === true ? <BiMinus /> : <BiPlus />} {sno + 1}
            </div>
            <h4>{header}</h4>
          </div>
          {clicked ? (
            <div className={acc.acc_body}>
              {body?.map((accdata, indx) => (
                <div className={acc.acc_list} key={indx}>
                  <BsDot />
                  {accdata}
                </div>
              ))}
              {/* {body.length > 1 ? (
                                <>
                                </>
                            ) : (
                                <p>We are a champion team of IIT, Harvard, NYU, and IIM alumni, as well as Ph.D holders and ISRO scientists providing 1:1 live classes to children aimed at arming them with the power of technology creation and mathematical thinking. We have our own proprietary teaching platforms apart from the ones from Google, MIT, Autodesk, and others.</p>
                            )

                            } */}
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
