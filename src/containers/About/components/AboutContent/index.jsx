import React, { memo, useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnimate,
  disallowContentVisible,
} from "../../../../redux/reducers/about";

import styles from "./index.module.scss";
import { ReactComponent as GoBack } from "../../../../assets/img/arrow-left.svg";

const AboutContent = memo(({ children, icon }) => {
  const tl = useRef(null);

  const elementsToReverseAnimate = useSelector(
    ({ about }) => about.elementsToReverseAnimate
  );

  const dispatch = useDispatch();

  const revertAnimate = () => {
    tl.current = gsap
      .timeline()
      .to(elementsToReverseAnimate.itemBg, {
        x: "100%",
        y: "100%",
        duration: 0.3,
      })
      .to(elementsToReverseAnimate.itemBg, {
        zIndex: 0,
        duration: 0,
      })
      .to(elementsToReverseAnimate.itemBg, {
        top: "15px",
        left: "15px",
        x: "0",
        y: "0",
        duration: 0.3,
        delay: 0,
      })
      .to(elementsToReverseAnimate.item, {
        width: "33%",
        height: "190px",
        ease: "elastic.out(1, 0.3)",
        position: "static",
        zIndex: 2,
        duration: 0.6,
        onComplete: () => dispatch(setAnimate())
      })

    dispatch(disallowContentVisible(false));
  };

  return (
    <div className={styles.aboutContent}>
      <div className={styles.aboutContentHeader}>
        <button className={styles.goBack} onClick={revertAnimate}>
          <GoBack />
        </button>
        <div className={styles.aboutContentHeaderIcon}>{icon}</div>
      </div>
      {children}
    </div>
  );
});

export default AboutContent;
