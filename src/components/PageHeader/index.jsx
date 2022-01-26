import React, { memo } from "react";
import { Link } from "react-router-dom";

import { Button } from "../index";

import { ReactComponent as ArrowIcon } from "../../assets/img/arrow-right.svg";
import styles from "./index.module.scss";

const PageHeader = memo(({ link = "/", children }) => {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageName}>{children}</div>
      <Link to={link}>
        <Button className={`${styles.pageHeaderButton}`}>
          Next
          <ArrowIcon className={styles.pageButtonIcon} />
        </Button>
      </Link>
    </div>
  );
});

export default PageHeader;
