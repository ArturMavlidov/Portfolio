import React, { memo } from "react";

import { PageHeader, Button } from "../index";

import styles from "./index.module.scss";
import { ReactComponent as ButtonIcon } from "../../assets/img/button-icon.svg";

const Page = memo(({ className, pageName, children }) => {
  return (
    <main className={`${styles.page} ${className}`}>
      <PageHeader>{pageName}</PageHeader>
      {children}
      <Button className={styles.pageBtn}>
        Download Cv <ButtonIcon className={styles.pageBtnIcon} />
      </Button>
    </main>
  );
});

export default Page;
