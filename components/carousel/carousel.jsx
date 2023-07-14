import React, { useEffect, useState } from "react";

// Icons
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
// Images
import poster_1 from "../../assets/logos/poster_1.png";
import poster_2 from "../../assets/logos/p1.png";

import ca from "./carousel.module.css";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      image: { poster_1 },
      title: "Invest in your child's future, ",
      text: "where innovation and technology thrive.",
      link: "",
    },
    {
      image: { poster_2 },
      title: "Invest in your child's future, ",
      text: "where innovation and technology thrive.",
      link: "",
    },
    {
      image:
        "https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7480.jpg",
      title: "Invest in your child's future, ",
      text: "where innovation and technology thrive.",
      link: "",
    },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/69094169-f35e-470a-9146-d5955c7330b9.png",
      title: "Invest in your child's future, ",
      text: "where innovation and technology thrive.",
      link: "",
    },
    // {
    //   image:
    //     "https://png.pngtree.com/background/20210710/original/pngtree-blue-technology-artificial-intelligence-cool-banner-background-picture-image_968559.jpg",
    //   text: "Prepare your child for a future driven by technology, where possibilities are endless.",
    //   link: "",
    // },
    {
      image:
        "https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg",
      title: "Unleash your digital potential,",
      text: "Unleash and Amplify Your Digital Potential.",
      link: "",
    },
  ];

  console.log(poster_1);
  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  // const goToImage = (index) => {
  //   setCurrentImageIndex(index);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);
  images.map((data, index) => {
    console.log(data);
    console.log(data?.image?.poster_1?.src);
  });
  return (
    <>
      <div className={`${ca.carousel}`}>
        <div className={`${ca.carousel_images}`}>
          {images.map((data, index) =>
            index === currentImageIndex ? (
              <>
                <div key={index} className={ca.carousel__card}>
                  <div className={ca.image_container}>
                    <img
                      key={index}
                      // src={`${data?.image}`}
                      src={
                        index === 1
                          ? data?.image?.poster_2?.src
                          : data?.image?.poster_1?.src
                          ? data?.image?.poster_1?.src
                          : data?.image
                      }
                      alt={`Slide ${index + 1}`}
                      className={index === currentImageIndex ? "active" : ""}
                    />
                  </div>
                  <div className={ca.carousel_box}>
                    <h1>{data.title}</h1>
                    <p>{data.text}</p>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )
          )}
        </div>
        {/* <div className={`${ca.carousel_controls}`}>
          <button
            className={`${ca.carousel_arrow} ${ca.prev}`}
            onClick={prevImage}
          >
            <FaChevronCircleLeft />
          </button>
          <button
            className={`${ca.carousel_arrow} ${ca.next}`}
            onClick={nextImage}
          >
            <FaChevronCircleRight />
          </button>
        </div> */}
        <div className={`${ca.carousel_dots}`}>
          {images.map((_, index) => (
            <>
              <button
                key={index}
                className={`${ca.dot} ${
                  index === currentImageIndex ? `${ca.active}` : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
              {/* {index} */}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;

// width:  354.542     207.973
// height: 105.833     106.541

// w  350   165
// h  110
