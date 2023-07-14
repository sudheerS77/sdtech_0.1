import { FaPlay } from "react-icons/fa";
import b from "./banner.module.css";
import { useState } from "react";

const Banner = ({ courseInfo }) => {
  const data = courseInfo[0];
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      <div className={b.b_container}>
        <div className={b.b_left}>
          <h2>{data?.name}</h2>
          <p>{data?.description}</p>
          <button>Enroll Now</button>
        </div>
        <div className={b.b_right} onClick={() => setPlayVideo(!playVideo)}>
          {/* <img src={data?.image} /> */}
          <div className={b.b_right_container}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
