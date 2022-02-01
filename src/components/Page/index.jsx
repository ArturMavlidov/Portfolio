import React, { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";

import { PageHeader, Button } from "../index";

import styles from "./index.module.scss";
import { ReactComponent as ButtonIcon } from "../../assets/img/button-icon.svg";

const Page = memo(({ pageName, pageClass, children, isDark }) => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q(`.${styles.pageBtn}`), {
      x: "-500px",
      delay: 0.2,
    });
  }, []);

  return (
    <main className={`${styles.page} ${pageClass}`} ref={el}>
      <PageHeader isDark={isDark}>{pageName}</PageHeader>
      {children}
      <Button className={styles.pageBtn}>
        Download Cv <ButtonIcon className={styles.pageBtnIcon} />
      </Button>
    </main>
  );
});

export default Page;
