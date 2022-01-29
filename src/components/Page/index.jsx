import React, { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";

import { PageHeader, Button } from "../index";

import styles from "./index.module.scss";
import { ReactComponent as ButtonIcon } from "../../assets/img/button-icon.svg";

const Page = memo(({ className, pageName, children }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q(".Page_pageBtn__Kso5l"), {
      x: "-500px",
      delay: 0.2
    });
  }, []);

  return (
    <main className={`${styles.page} ${className}`} ref={el}>
      <PageHeader>{pageName}</PageHeader>
      {children}
      <Button className={styles.pageBtn}>
        Download Cv <ButtonIcon className={styles.pageBtnIcon} />
      </Button>
    </main>
  );
});

export default Page;
