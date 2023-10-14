import { FaPlay } from "react-icons/fa";
import b from "./banner.module.css";
import { useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const Banner = ({ courseInfo }) => {
  const data = courseInfo;
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <div className={b.b_container}>
        <div className={b.b_left}>
          {/* <span className={b.b_level_tag}>Level - {data?.level[0]}</span> */}
          <h1>دوره مقدماتی مهندس رباتیک ( مبانی رباتیک - الکترونیک جامع )</h1>
          <p>
            رباتیک یک علم میان رشته ای است که متشکل از علوم الکترونیک، مکانیک و
            برنامه نویسی می باشد. همچنین رباتیک به عنوان زیر مجوعه ای از رشته
            های مهندسی و به خصوص رشتهء علوم و مهندسی کامپیوتر تعریف می شود که با
            طراحی، ساخت، بهره برداری و کاربرد ربات ها سروکار دارد. با گذراندن
            دوره مقدماتی مهندس رباتیک در آکادمی بین المللی SD Tech، که با همکاری
            دانشگاه الزهرا و انجمن رباتیک و مکاترونیک این دانشگاه برگزار می شود،
            می توانید مسیر یادگیری خود را آغاز کنید. دراین دوره آموزشی حداقل 30
            مینی پروژه و 5 پروژه انجام خواهید داد و در هر جلسه حداقل دو تمرین
            عملی و یک تمرین تئوری وجود خواهد داشت. دوره به صورت کاملا خروجی محور
            و کاربردی بوده و پاسخ تمامی مسائل و نحوه انجام پروژه ها نیز در
            اختیارتان قرار خواهد گرفت. همچنین در انتهای دوره مدرک معتبر و بین
            المللی دوزبانه به صورت الکترونیکی و فیزیکی در اختیار شما قرار خواهد
            گرفت.
          </p>
          <div>
            <Link
              href={`/courses/course-register?name${encodeURIComponent(
                data?.name
              )}`}
            >
              {/* <Link
              href={{
                pathname: "/courses/course-register",
                query: { name: encodeURIComponent(data?.name) },
              }}
            > */}
              <button>Enroll Now</button>
            </Link>
          </div>
        </div>
        <div className={b.b_right} onClick={() => setPlayVideo(!playVideo)}>
          <div
            className={`${
              data?.isbigimage ? b.fullCoverImage : b.course_cover_img
            } `}
            // className={b.course_cover_img}
          >
            <img src={data?.image} alt="image" />
            {data?.isDiscounted?.status && (
              <div className={b.discounted__label}>
                <span>{data?.isDiscounted?.percentage} %</span>
              </div>
            )}
          </div>
          {/* <span className={b.b_level_tag}>Level - {data?.level[0]}</span> */}

          {/* <div className={b.b_right_container}>
            {playVideo ? (
              <iframe
                // width="640"
                // height="360"
                src="https://www.youtube.com/embed/Y6yYRWC2ITE"
                title="Web Development"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoplay
              ></iframe>
            ) : (
              <div className={b.play_button}>
                <FaPlay />
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
