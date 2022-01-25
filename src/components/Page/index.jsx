import React, { memo } from "react";

import { PageHeader } from "../index";

import styles from "./index.module.scss";
import buttonIcon from "../../assets/img/button-icon.svg";

const Page = memo(({ cn, pageName, link = '/', children }) => {
  return (
    <div className={`${styles.page} ${cn}`}>
      <PageHeader link={link}>{pageName}</PageHeader>
      <div className={styles.home_content}>{children}</div>
        <button className={styles.page_btn}>
          Download Cv <img src={buttonIcon} alt="Button icon" />
        </button>
    </div>
  );
});

export default Page;
