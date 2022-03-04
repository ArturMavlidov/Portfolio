import React, { memo } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnimate,
  setContentVisible,
} from "../../../../redux/reducers/about";

import styles from "./index.module.scss";
import { ReactComponent as GoBack } from "../../../../assets/img/arrow-left.svg";

const AboutContent = memo(({ children, icon }) => {
  const elementsToReverseAnimate = useSelector(
    ({ about }) => about.elementsToReverseAnimate
  );
  const dispatch = useDispatch();

  const revertAnimate = () => {
    gsap.to(elementsToReverseAnimate[0], {
      width: "33%",
      height: "190px",
      ease: "elastic.out(1, 0.3)",
      position: "static",
      zIndex: 10,
      duration: 0.6,
    });
    gsap.to(elementsToReverseAnimate[1], {
      position: "absolute",
      top: "15px",
      left: "15px",
      zIndex: 0,
      delay: 0,
      duration: 0,
    });
    dispatch(setAnimate());
    dispatch(setContentVisible(false));
  };

  return (
    <div className={styles.aboutContent}>
      <div className={styles.aboutContentHeader}>
        <button
          className={styles.goBack}
          onClick={revertAnimate}
        >
          <GoBack />
        </button>
        <div className={styles.aboutContentHeaderIcon}>{icon}</div>
      </div>
      {children}
    </div>
  );
});

export default AboutContent;
