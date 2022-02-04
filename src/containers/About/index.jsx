import React, { useRef, useEffect, memo } from "react";
import gsap from "gsap";

import { Page } from "../../components";
import { AboutItem } from "./components";

import styles from "./index.module.scss";
import { ReactComponent as SassIcon } from "../../assets/img/sass-icon.svg";
import { ReactComponent as EducationIcon } from "../../assets/img/education-icon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/img/experience-icon.svg";
import { ReactComponent as ExperienceIcon2 } from "../../assets/img/experience2-icon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/img/skills-icon.svg";

const About = memo(() => {
  const tl = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(q("[data-role=animate_1]"), {
        opacity: 0,
        x: "100%",
        y: "100%",
      })
      .from(q("[data-role=animate_2]"), {
        opacity: 0,
        x: "-100%",
        y: "100%",
      })
      .from(q("[data-role=animate_3]"), {
        opacity: 0,
        x: "100%",
        y: "-100%",
      })
      .from(q("[data-role=animate_4]"), {
        opacity: 0,
        x: "-100%",
        y: "-100%",
      });
  }, []);

  return (
    <Page pageName="About" pageClass={styles.about} isDark>
      <div className={styles.aboutContent} ref={el}>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Education"
            icon={<EducationIcon />}
            dataRole="animate_1"
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon />}
            dataRole="animate_2"
          />
        </div>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Skills"
            icon={<SkillsIcon />}
            dataRole="animate_3"
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon2 />}
            dataRole="animate_4"
          />
        </div>
      </div>
    </Page>
  );
});

export default About;
