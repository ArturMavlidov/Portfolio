import React, { memo, useRef, useEffect } from "react";
import gsap from "gsap";

import styles from "./index.module.scss";

const AboutItem = memo((props) => {
  const {
    content = Function.prototype,
    icon,
    itemName,
    top,
    right,
    bottom,
    left,
    dataRole,
    isAnimate,
    setIsAnimate,
    setArrayToReverseAnimate,
    isContentVisible,
    setContentVisible,
  } = props;

  const timer = useRef(null);
  const tl = useRef(null);
  const el = useRef(null);
  const bg = useRef(null);

  const handleContentVisible = () => {
    setContentVisible(true);
    setArrayToReverseAnimate([el.current, bg.current]);
  };

  useEffect(() => {

    return () => {
      clearTimeout(timer.current);
      };
  }, [])


  const startAnimation = () => {
    setIsAnimate();

    tl.current = gsap
      .timeline()
      .to(bg.current, {
        x: "100%",
        y: "100%",
        duration: 0.3,
      })
      .to(bg.current, {
        zIndex: 10,
        top: 0,
        left: 0,
        x: "0",
        y: "0",
        duration: 0.3,
      })
      .to(el.current, {
        width: "104%",
        height: "104%",
        ease: "elastic.out(1, 0.3)",
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        zIndex: 10,
        onComplete: handleContentVisible,
      });
  }

  const handleMouseEnter = () => {
    timer.current = setTimeout(() => {
      startAnimation();
    }, 200)
  };

  const handleMouseLeave = () => {
    clearTimeout(timer.current)
  }

  return (
    <div
      className={styles.aboutContentEl}
      onMouseEnter={isAnimate ? handleMouseEnter : null}
      onMouseLeave={handleMouseLeave}
      data-role={dataRole}
      ref={el}
    >
      <div className={styles.aboutContentItem}>
        <div className={styles.aboutContentIcon}>{icon}</div>
        <span>{itemName}</span>
      </div>
      <div className={styles.aboutContentBg} ref={bg}>
        {isContentVisible && content()}
      </div>
    </div>
  );
});

export default AboutItem;
