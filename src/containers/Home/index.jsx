import React, { memo } from "react";
import { Page } from "../../components";

import { ReactComponent as ManIcon } from "../../assets/img/man-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/img/home-icon.svg";

import styles from "./index.module.scss";

const Home = memo(() => {
  return (
    <Page className={styles.home} pageName="Home">
      <div className={styles.homeContent}>
        <span className={styles.fragment}>{`<Fragment>`}</span> <br />
        <span className={styles.greeting}>
          HI THERE <ManIcon className={styles.greetingIcon} />, I'M
        </span>
        <div className={styles.name}>
          artur.
          <br />
          <span>
            Frontend Developer <HomeIcon />
          </span>
        </div>
        <span className={styles.fragment}>{`</Fragment>`}</span>
      </div>
    </Page>
  );
});

export default Home;
