import React, { memo, useEffect, useRef } from "react";
import gsap from "gsap";

import AboutContent from "../AboutContent";

import styles from "./index.module.scss";
import { ReactComponent as EducationIcon } from "../../../../assets/img/education-icon.svg";

const EducationItem = memo(() => {
  const tl = useRef();

  const startAnimation = () => {
    tl.current = gsap
      .timeline()
      .from(`.${styles.aboutEducationTime}`, {
        opacity: 0,
      })
      .from(`.${styles.textLine}`, {
        height: 0,
      })
      .from(`.${styles.aboutEducationText}`, {
        display: "none",
        opacity: 0,
      });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <AboutContent icon={<EducationIcon />}>
      <div className={styles.aboutEducationInfo}>
        <div className={styles.aboutEducationItem}>
          <div className={styles.aboutEducationTime}>2021</div>
          <span className={styles.textLine}></span>
          <div className={styles.aboutEducationText}>
            Even in my school years I thought about IT, I decided to develop in
            the field of frontend. Made layouts of websites, started working
            with pug/scss preprocessors. I took the 'Webmaster' course on
            Hexlet. At the same time, I drew knowledge on frontend development
            from everywhere: books, articles, YouTube, and tried to develop.
            Constantly looked for interesting JS tasks and solved them. Created
            pet-projects in native javascript. Took a fundamental javascript
            course on Udemy. Started to actively maintain github. Got a little
            commercial experience (fixing bugs in scripts, layout). I have found
            a goal for myself - to join a company where I can realize my
            potential, grow in it and show results. I began to think about which
            framework to choose - React or Vue, it was a difficult choice, but
            after studying their differences, I decided without a doubt.
          </div>
        </div>
        <div className={styles.aboutEducationItem}>
          <div className={styles.aboutEducationTime}>2022</div>
          <span className={styles.textLine}></span>
          <div className={styles.aboutEducationText}>
            I chose and began to learn React and its ecosystem (redux, thunk,
            reselect, saga, etc.). Took a React course from scratch for
            beginners, made my projects as similar to real ones as possible
            (component memoization, state management, asynchronous requests,
            react-way architecture), started to learn animation with gsap and
            felt completely ready to work as a frontend developer.
          </div>
        </div>
      </div>
    </AboutContent>
  );
});

export default EducationItem;
