import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import Slider from "../components/slider/Slider";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.homeScreen__overlay}>
      <div className={styles.homeScreen__contents}>
        <div style={{width:"50%"}}>
        <h1> hey, welcome to my website</h1>
        </div>
        <div className={styles.homeScreen__divider}></div>
        <button>
          see more <FiArrowRightCircle />
        </button>
      </div>
    </div>
    <Slider/>
    </React.Fragment>
  );
};
export default Home;
