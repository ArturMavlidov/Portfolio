import React, { useRef, useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";

import { setAnimate, setElementsToReverseAnimate, setContentVisible } from "../../redux/reducers/about";

import { Page } from "../../components";
import { AboutItem, AboutContent } from "./components";

import styles from "./index.module.scss";
import { ReactComponent as EducationIcon } from "../../assets/img/education-icon.svg";
import { ReactComponent as ExperienceIcon } from "../../assets/img/experience-icon.svg";
import { ReactComponent as ExperienceIcon2 } from "../../assets/img/experience2-icon.svg";
import { ReactComponent as SkillsIcon } from "../../assets/img/skills-icon.svg";

const About = memo(() => {
  const dispatch = useDispatch();
  const { isAnimate, isContentVisible } = useSelector(({ about }) => about);

  const tl = useRef(null);
  const el = useRef(null);
  const q = gsap.utils.selector(el);

  const renderEducation = () => {
    return (
      <AboutContent icon={<EducationIcon />}>
        <div className={styles.aboutEducationInfo}>
          <div className={styles.aboutEducationItem}>
            <div className={styles.aboutEducationTime}>2021г.</div>
            <span></span>
            <div className={styles.aboutEducationText}>
              Even in my school years I thought about IT, I decided to develop
              in the field of frontend. Made layouts of websites, started
              working with pug/scss preprocessors. I took the 'Webmaster' course
              on Hexlet. At the same time, I drew knowledge on frontend
              development from everywhere: books, articles, YouTube, and tried
              to develop. Constantly looked for interesting JS tasks and solved
              them. Created pet-projects in native javascript. Took a
              fundamental javascript course on Udemy. Started to actively
              maintain github. Got a little commercial experience (fixing bugs
              in scripts, layout). I have found a goal for myself - to join a
              company where I can realize my potential, grow in it and show
              results. I began to think about which framework to choose - React
              or Vue, it was a difficult choice, but after studying their
              differences, I decided without a doubt.
            </div>
          </div>
          <div className={styles.aboutEducationItem}>
            <div className={styles.aboutEducationTime}>2022г.</div>
            <span></span>
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
  }

  const setIsAnimate = () => {
    dispatch(setAnimate())
  };

  const setIsContentVisible = (bool) => {
    dispatch(setContentVisible(bool));
  }

  const setArrayToReverseAnimate = (arr) => {
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
    setIsAnimate()

    return () => {
      dispatch(setContentVisible(false));
    }
  }, []);

  return (
    <Page pageName="About" pageClass={styles.about} isDark>
      <div className={styles.aboutContent} ref={el}>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Education"
            icon={<EducationIcon />}
            content={renderEducation}
            dataRole="animate_1"
            top={0}
            left={0}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setArrayToReverseAnimate={setArrayToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon />}
            dataRole="animate_2"
            top={0}
            right={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setArrayToReverseAnimate={setArrayToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
        </div>
        <div className={styles.aboutContentRow}>
          <AboutItem
            itemName="Skills"
            icon={<SkillsIcon />}
            dataRole="animate_3"
            left={0}
            bottom={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setArrayToReverseAnimate={setArrayToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
          <AboutItem
            itemName="Experience"
            icon={<ExperienceIcon2 />}
            dataRole="animate_4"
            right={-15}
            bottom={-15}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
            setArrayToReverseAnimate={setArrayToReverseAnimate}
            isContentVisible={isContentVisible}
            setContentVisible={setIsContentVisible}
          />
        </div>
      </div>
    </Page>
  );
});

export default About;
