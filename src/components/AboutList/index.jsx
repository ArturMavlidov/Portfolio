import React, {memo} from 'react';
import { AboutItem } from "../../components";

import styles from './index.module.scss'

import { ReactComponent as EducationIcon } from "../../assets/img/education-icon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/img/experience-icon.svg";
import { ReactComponent as ExperienceIcon2 } from "../../assets/img/experience2-icon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/img/skills-icon.svg";


const AboutList = memo(() => {
  return (
    <div className={styles.aboutContent}>
      <div className={styles.aboutContentRow}>
        <AboutItem itemName="Education" icon={<EducationIcon />} />
        <AboutItem itemName="Experience" icon={<ExperienceIcon />} />
      </div>
      <div className={styles.aboutContentRow}>
        <AboutItem itemName="Skills" icon={<SkillsIcon />} />
        <AboutItem itemName="Experience" icon={<ExperienceIcon2 />} />
      </div>
    </div>
  );
});

export default AboutList;
