import React, { memo } from "react";

import { PageHeader, Button } from "../index";

import styles from "./index.module.scss";
import { ReactComponent as ButtonIcon } from "../../assets/img/button-icon.svg";

const Page = memo(({ className, pageName, link = "/", children }) => {
  return (
    <div className={`${styles.page} ${className}`}>
      <PageHeader link={link}>{pageName}</PageHeader>
      <div>{children}</div>
      <Button className={styles.pageBtn}>
        Download Cv <ButtonIcon className={styles.pageBtnIcon} />
      </Button>
    </div>
  );
});

export default Page;
