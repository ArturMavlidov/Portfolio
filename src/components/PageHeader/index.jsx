import React, { useRef, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { getNextPage } from "../../utils";
import { Button } from "../index";

import { ReactComponent as ArrowIcon } from "../../assets/img/arrow-right.svg";
import styles from "./index.module.scss";

const PageHeader = memo(({ children, isDark }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q(`.${styles.pageHeaderButton}`), {
      x: "500px",
      delay: 0.2,
    });

    gsap.from(q(`.${styles.pageName}`), {
      opacity: 0,
      delay: 0.2,
    });

    gsap.from(q(`.${styles.pageNameLine}`), {
      width: "0",
      delay: 0.2,
    });
  }, []);

  return (
    <div className={styles.pageHeader} ref={el}>
      <div className={`${styles.pageName} ${isDark && styles.pageNameDark}`}>
        {children}
        <span className={`${styles.pageNameLine} ${isDark && styles.pageNameLineDark}`}></span>
      </div>
      <Link to={getNextPage(children)}>
        <Button className={`${styles.pageHeaderButton}`}>
          Next
          <ArrowIcon className={styles.pageButtonIcon} />
        </Button>
      </Link>
    </div>
  );
});

export default PageHeader;
