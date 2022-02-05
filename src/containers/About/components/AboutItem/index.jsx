import React, {memo, useState, useRef} from 'react';
import gsap from 'gsap';

import styles from './index.module.scss'

const AboutItem = memo((props) => {
  const {icon, itemName, top = '', right = '', bottom = '', left = '', dataRole, isAnimate, setAnimate} = props;

   const tl = useRef(null);
   const el = useRef(null);
   const q = gsap.utils.selector(el);

  const handleMouseEnter = () => {
    setAnimate();

    tl.current = gsap
      .timeline()
      .to(q(`.${styles.aboutContentBg}`), {
        x: "100%",
        y: "100%",
        duration: 0.3,
      })
      .to(q(`.${styles.aboutContentBg}`), {
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
      });
  }

  return (
    <div
      className={styles.aboutContentEl}
      onMouseEnter={isAnimate && handleMouseEnter}
      data-role={dataRole}
      ref={el}
    >
      <div className={styles.aboutContentItem}>
        <div className={styles.aboutContentIcon}>{icon}</div>
        <span>{itemName}</span>
      </div>
      <div className={styles.aboutContentBg}></div>
    </div>
  );
});

export default AboutItem;
