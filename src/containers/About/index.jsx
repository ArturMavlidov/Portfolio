import React, { memo } from "react";
import { Page, AboutList } from "../../components";

import styles from "./index.module.scss";
import { ReactComponent as SassIcon } from "../../assets/img/sass-icon.svg";

const About = memo(() => {
  return (
    <>
      <Page pageName="About" pageClass={styles.about} isDark>
        <div className={styles.sassIcon}>
          <SassIcon />
        </div>
        <AboutList/>
      </Page>
    </>
  );
});

export default About;
