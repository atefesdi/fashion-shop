import React, { useState } from "react";
import styles from "./Slider.module.css";
import { sliderData } from "./Data";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const sliderLength = sliderData.length;
  const prevSlideHandler = () => {
    setCurrent(current === 0 ? sliderLength - 1 : current - 1);
  };

  const nextSlideHandler = () => {
    setCurrent(current === sliderLength - 1 ? 0 : current + 1);
  };

  return (
    <div className={styles.slider__container}>
      <BsArrowLeftCircle  onClick={prevSlideHandler} className={styles.leftArrow} />
      {sliderData.map((slider, index) => (
        <div className={  styles.imageSlider__container} key={index}>
         {index === current && <img src={slider.image} className={index === current ? styles.active : styles.deactive} alt="fashion image" />}
        </div>
      ))}
      <BsArrowRightCircle  onClick={nextSlideHandler}  className={styles.rightArrow}/>
    </div>
  );
};

export default Slider;
