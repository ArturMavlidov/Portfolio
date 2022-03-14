import React, { useRef, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";

import {
  setAnimate,
  setElementsToReverseAnimate,
  setContentVisible,
} from "../../redux/reducers/about";

import { Page } from "../../components";
import { AboutItem, AboutContent, EducationItem, SkillsItem } from "./components";

import styles from "./index.module.scss";
import { ReactComponent as EducationIcon } from "../../assets/img/education-icon.svg";
import { ReactComponent as Goals } from "../../assets/img/goals-icon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/img/experience-icon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/img/skills-icon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/img/html-icon.svg";

const About = memo(() => {
  const dispatch = useDispatch();
  const { isAnimate, isContentVisible } = useSelector(({ about }) => about);

  const tl = useRef(null);
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  const setIsAnimate = () => {
    dispatch(setAnimate());
  };

  const setIsContentVisible = (bool) => {
    dispatch(setContentVisible(bool));
  };

  const setObjToReverseAnimate = (arr) => {
    dispatch(setElementsToReverseAnimate(arr));
  };

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
        onComplete: setIsAnimate,
      });
  };

  useEffect(() => {
    // startAnimation();
    setIsAnimate();

    return () => {
      dispatch(setContentVisible(false));
    };
  }, []);

  return (
    <Page pageName="About" pageClass={styles.about} isDark>
      <div className={styles.aboutContent} ref={el}>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Education"
            icon={<EducationIcon />}
            Content={EducationItem}
            dataRole="animate_1"
            top={0}
            left={0}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setObjToReverseAnimate={setObjToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
          <AboutItem
            itemName="Goals"
            icon={<Goals />}
            dataRole="animate_2"
            top={0}
            right={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setObjToReverseAnimate={setObjToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
        </div>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Skills"
            icon={<SkillsIcon />}
            Content={SkillsItem}
            dataRole="animate_3"
            left={0}
            bottom={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setObjToReverseAnimate={setObjToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon />}
            dataRole="animate_4"
            right={-15}
            bottom={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setObjToReverseAnimate={setObjToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
        </div>
      </div>
    </Page>
  );
});

export default About;
