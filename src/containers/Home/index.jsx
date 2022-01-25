import React, { memo } from "react";
import { Page } from '../../components';

import manIcon from '../../assets/img/man-icon.svg';
import homeIcon from '../../assets/img/home-icon.svg';

import styles from "./index.module.scss";

const Home = memo(() => {
  return (
    <Page cn={styles.home} pageName="Home" link={"/about"}>
      <div className={styles.home_content}>
        <span className={styles.fragment}>{`<Fragment>`}</span> <br />
        <span className={styles.greeting}>
          HI THERE <img src={manIcon} alt="Man icon" />, I'M
        </span>
        <div className={styles.name}>
          artur.
          <br />
          <span>
            Frontend Developer <img src={homeIcon} alt="Man icon" />
          </span>
        </div>
        <span className={styles.fragment}>{`</Fragment>`}</span>
      </div>
    </Page>
  );
});

export default Home;
