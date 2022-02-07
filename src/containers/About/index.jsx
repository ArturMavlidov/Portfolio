import React, { useRef, useState, useEffect, memo } from "react";
import gsap from "gsap";

import store from '../../redux/store';
import { setAnimate } from '../../redux/reducers/about';


import { Page } from "../../components";
import { AboutItem } from "./components";

import styles from "./index.module.scss";
import { ReactComponent as EducationIcon } from "../../assets/img/education-icon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/img/experience-icon.svg";
import { ReactComponent as ExperienceIcon2 } from "../../assets/img/experience2-icon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/img/skills-icon.svg";

const About = memo(() => {
  const tl = useRef(null);
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  const setisAnimate = () => {
    store.dispatch(setAnimate());
  }

  const startAnimation = () => {
    tl.current = gsap
      .timeline()
      .from(q("[data-role=animate_1]"), {
        opacity: 0,
        x: "100%",
        y: "100%",
        duration: 0.35,
      })
      .from(q("[data-role=animate_2]"), {
        opacity: 0,
        x: "-100%",
        y: "100%",
        duration: 0.35,
      })
      .from(q("[data-role=animate_3]"), {
        opacity: 0,
        x: "100%",
        y: "-100%",
        duration: 0.35,
      })
      .from(q("[data-role=animate_4]"), {
        opacity: 0,
        x: "-100%",
        y: "-100%",
        duration: 0.35,
        onComplete: setisAnimate,
      });
  }

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Page pageName="About" pageClass={styles.about} isDark>
      <div className={styles.aboutContent} ref={el}>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Education"
            icon={<EducationIcon />}
            dataRole="animate_1"
            top={0}
            left={0}
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon />}
            dataRole="animate_2"
            top={0}
            right={-15}
          />
        </div>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Skills"
            icon={<SkillsIcon />}
            dataRole="animate_3"
            left={0}
            bottom={-15}
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon2 />}
            dataRole="animate_4"
            right={-15}
            bottom={-15}
          />
        </div>
      </div>
    </Page>
  );
});

export default About;
