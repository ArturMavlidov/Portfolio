import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

import { pagesNavigate } from "../../utils";
import { Button } from "../index";

import { ReactComponent as ArrowIcon } from "../../assets/img/arrow-right.svg";
import styles from "./index.module.scss";

const PageHeader = memo(({ link = "/", children }) => {
  const {pathname} = useLocation();
  const {getNextPagePathname} = pagesNavigate;
  console.log(pagesNavigate);

  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageName}>{children}</div>
      <Link to={getNextPagePathname(pathname)}>
        <Button className={`${styles.pageHeaderButton}`}>
          Next
          <ArrowIcon className={styles.pageButtonIcon} />
        </Button>
      </Link>
    </div>
  );
});

export default PageHeader;
