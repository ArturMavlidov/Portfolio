import React, { memo, useEffect } from "react";
import gsap from "gsap";

import styles from "./index.module.scss";

const SkillsItem = memo(({ icon, strokeColor, percent }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  useEffect(() => {
    gsap.from(`.${styles.progressRingCircle}`, { strokeDashoffset: 314 });
  }, [])

  return (
    <div className={styles.skillsItem}>
      <svg width="118" height="118">
        <circle
          className={styles.progressRingCircle}
          stroke={strokeColor}
          strokeWidth="3"
          cx="59"
          cy="59"
          r="50"
          fill="#FAFAFA"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      {icon}
    </div>
  );
});

export default SkillsItem;
