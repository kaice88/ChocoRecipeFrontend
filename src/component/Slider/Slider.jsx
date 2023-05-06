import { useState } from "react";
import styles from "./Slider.module.css";

const slideStyles = {
  width: "100%",
  height: "100%",
  // borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "32px",
//   fontSize: "25px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "32px",
//   fontSize: "25px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
// };

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "16px 8px",
  cursor: "pointer",
  fontSize: "8px",
  color: "#3A9196",
};

let iconClass = "fa-regular fa-circle fa-default";
let activeIconClass = "fa-solid fa-circle fa-active";
const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotStatus, setDotStatus] = useState([
    true,
    ...Array(slides.length - 1).fill(false),
  ]);
  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };
  // const goToNext = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    setDotStatus(dotStatus.map((status, index) => index === slideIndex));
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      {/* <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div> */}
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <span className={styles["icon-border"]}>
              <i
                className={`fa ${
                  dotStatus[slideIndex] ? activeIconClass : iconClass
                }`}
              ></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
