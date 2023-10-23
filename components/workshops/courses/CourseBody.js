import Accordion from "../../Atoms/Accordion/accordion";
import cb from "./coursebody.module.css";

import { useEffect, useState } from "react";

// Components

// CSS

import TechnicalRoadMapComponent from "./technicalRoadMap.component";
import CourseFeaturesComponent from "./courseFeatures.component";
import CourseAdditionalInforComponent from "./courseAdditionalInfor.component";
import Link from "next/link";

const CourseBody = ({
  courseInfo,
  // levelHandler,
  // level,
  // setLevel,
  // courseContent,
}) => {
  // const data = courseInfo;
  // const [level, setLevel] = useState(data?.levels[0] || "default");
  // const [courseContent, setCourseContent] = useState();
  // const [openIndex, setOpenIndex] = useState([]);
  // const [expandAll, setExpandAll] = useState(false);

  // const getLevelContent = () => {
  //   data?.course_content?.technicalRoadMap?.filter((item) => {
  //     if (item.level === level) {
  //       setCourseContent(item?.data);
  //     }
  //   });
  // };
  // const levelHandler = (e) => {
  //   setLevel(e.target.name);
  //   getLevelContent(e.target.name);
  // };
  // useEffect(() => {
  //   data?.course_content?.technicalRoadMap?.filter((item) => {
  //     if (item.level === level) {
  //       setCourseContent(item?.data);
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   getLevelContent();
  // }, [level]);
  const data = courseInfo;
  const [openIndex, setOpenIndex] = useState([]);
  const [expandAll, setExpandAll] = useState(false);

  // useEffect(() => {}, []);

  return (
    <>
      <div className={cb.cb_container}>
        <div className={cb.coursOverView_section}>
          <div className={cb.coursOverView_container}>
            <div className={cb.cb_wul}>
              <h2 style={{ color: "#04233f"}} dir="rtl">آنچه در این دوره می آموزید:</h2>
              <ul dir="rtl">
                {data?.learning_outcomes?.map((wul, indx) => (
                  <li key={indx}>{wul}</li>
                ))}
              </ul>
            </div>

            <div className={cb.cb__workshop_poster}>
              <img
                src="https://res.cloudinary.com/df8aswwta/image/upload/v1697980745/images/workshop/ep7hhy8kwrhbzumzduxy.png"
                alt=""
              />
              <img
                src="https://res.cloudinary.com/df8aswwta/image/upload/v1697293882/images/workshop/hxqdkbgc2fwyz8lzxs2l.jpg"
                alt=""
              />
            </div>
            <div className={cb.course__video}>
              <h3>ویدیو معرفی دوره</h3>
              <video
                src="https://res.cloudinary.com/df8aswwta/video/upload/v1697980543/images/workshop/s6nwboco8sft6wk93ev3.mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
            <div className={cb.cb__instructor}>
              <h1 style={{ textAlign: "right" }}>مدرس دوره</h1>
              <div className={cb.ins__details}>
                <div>
                  <img src="https://res.cloudinary.com/df8aswwta/image/upload/v1698085659/images/workshop/hkmcm7mxrgxgpijncuig.jpg" alt="" />
                </div>
                <div dir="rtl">
                  <h2>مهندس دنیا خوبانی</h2>
                  <ul>
                    <li>عضو رسمی فدراسیون بین المللی مخترعین سوئیس IFIA</li>
                    <li>مدرس و پژوهشگر حوزه رباتیک و مهندسی صنعتی</li>
                    <li>کسب مقام اول مسابقات جهانی فیرا کاپ 2021 </li>
                    <li>دارای 12 مقام بین المللی و 2 مقام ملی </li>
                    <li>دانش آموخته مدرسه رباتیک دانشگاه امیرکبیر</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <CourseFeaturesComponent
            pricing={courseInfo?.pricing}
            discount={courseInfo?.isDiscounted}
            classeDetails={courseInfo?.classes}
            name={courseInfo?.name}
          />
        </div>
        <div className={cb.certificate__section}>
          <div>
            <img
              src="https://res.cloudinary.com/df8aswwta/image/upload/v1698082205/images/workshop/a328vsyp5urlm094m6ba.png"
              alt=""
            />
          </div>
          <div dir="rtl">
            <h3>با ارائه گواهی معتبر دو زبانه از دانشگاه الزهرا</h3>
          </div>
        </div>
        <div dir="rtl" className={cb.cb__course__package}>
          <h2>محتویات پک آموزشی </h2>
          <div className={cb.cb__details}>
            <ul>
              <li>جعبه ابزار</li>
              <li>کانتور مخابراتی</li>
              <li>پین کانتور</li>
              <li>پین هدر</li>
              <li>برد هزار سوراخ</li>
              <li>باتری</li>
              <li>هویه</li>
              <li>LDR</li>
              <li>بازر</li>
              <li>ترانزیستور</li>
              <li>سیم لحیم</li>
              <li>وارنیش</li>
              <li>چسب برق</li>
            </ul>
            <ul>
              <li>میکرو سوئیچ اهرمی</li>
              <li>Push button</li>
              <li>رگولاتور 7805</li>
              <li>سون سگمنت کاتد و آند مشترک</li>
              <li>ولوم 5 کیلو و 10 کیلو</li>
              <li>خازن 1000, 4700, 220 میکرو فاراد</li>
              <li>دیود N4007</li>
              <li>سیم چین</li>
            </ul>
            <ul>
              <li>بردبرد بزرگ</li>
              <li>بردبرد کوچک</li>
              <li>سیم جامپر نری به نری</li>
              <li>سیم جامپر مادگی به مادگی</li>
              <li>سیم جامپر نری به مادگی</li>
              <li>مقاومت 100Ω, 220Ω ,1KΩ , 10KΩ</li>
              <li>LED</li>
              <li>LED RGB کاتد و آند مشترک</li>
            </ul>
          </div>
        </div>
        <div className={cb.enroll__btn}>
          <Link href="https://forms.gle/6hSKTExKSZd8ES5V7" target="__blank">
            ثبت نام کنید{" "}
          </Link>
        </div>

        {/* <FeeCard /> */}
      </div>
    </>
  );
};

export default CourseBody;
