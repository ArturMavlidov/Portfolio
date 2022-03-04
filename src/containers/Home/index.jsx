import React, { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { Page } from "../../components";

import { ReactComponent as ManIcon } from "../../assets/img/man-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/img/home-icon.svg";

import styles from "./index.module.scss";

const Home = memo(() => {
  const tl = useRef();
  const el = useRef();
  const q = gsap.utils.selector(el);

  gsap.registerPlugin(TextPlugin);

  const startAnimation = () => {
    tl.current = gsap
      .timeline()
      .from(q("[data-role=animate-fragment]"), {
        y: "-30px",
        opacity: 0,
      })
      .to(q("[data-role=animate-greet]"), {
        text: "HI THERE",
        duration: 0.2,
      })
      .from(q("[data-role=animate-icon]"), {
        scale: 0,
        duration: 0.2,
      })
      .to(q("[data-role=animate-greet_1]"), {
        text: ", I'M",
        duration: 0.2,
      })
      .to(q("[data-role=animate-name]"), {
        text: "artur.",
        duration: 0.3,
      })
      .to(q("[data-role=animate-prof]"), {
        text: "Frontend Developer",
        duration: 0.7,
      })
      .from(q("[data-role=animate-icon_1]"), {
        scale: 0,
        duration: 0.3,
      })
      .from(
        q("[data-role=animate-fragment_1]"),
        {
          y: "30px",
          opacity: 0,
        },
        "<"
      );
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <Page pageClass={styles.home} pageName="Home" animate>
      <div className={styles.homeContent} ref={el}>
        <span
          className={styles.fragment}
          data-role="animate-fragment"
        >{`<Fragment>`}</span>
        <br />
        <span className={styles.greeting}>
          <span data-role="animate-greet"></span>
          <ManIcon className={styles.greetingIcon} data-role="animate-icon" />
          <span data-role="animate-greet_1"></span>
        </span>
        <div className={styles.name}>
          <span data-role="animate-name"></span>
          <br />
          <span className={styles.prof} data-role="animate-prof"></span>
          <HomeIcon className={styles.homeIcon} data-role="animate-icon_1" />
        </div>
        <span
          className={styles.fragment}
          data-role="animate-fragment_1"
        >{`</Fragment>`}</span>
      </div>
    </Page>
  );
});

export default Home;
