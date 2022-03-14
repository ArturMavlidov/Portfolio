import React, { memo, useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./index.module.scss";

const SkillBlock = memo(({ Icon, strokeColor, percent, dataAnimate, children }) => {
  const tl = useRef();
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const startAnimation = () => {
    tl.current = gsap
      .timeline()
      .from(`[data-animate=${dataAnimate}]`, { opacity: 0, delay: 1 })
      .from(`[data-animate=${dataAnimate}]`, { strokeDashoffset: 219 })
      .fromTo(`.${styles.skillDesc}`, { opacity: 0 }, { opacity: 1 });
  }

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className={styles.skillEl}>
      <div className={styles.skillBlock}>
        <svg width="90" height="90">
          <circle
            className={styles.progressRingCircle}
            stroke={strokeColor}
            strokeWidth="3"
            cx="45"
            cy="45"
            r={radius}
            fill="#FAFAFA"
            data-animate={dataAnimate}
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        {<Icon className={styles.skillBlockIcon} />}
      </div>
      <div className={styles.skillDesc}>{children}</div>
    </div>
  );
});

export default SkillBlock;
