import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

import { mapPagesToPath } from "../../utils";

import styles from "./index.module.scss";
import avatar from "../../assets/img/sidebarLogo.png";

const Sidebar = memo(() => {
  const { pathname } = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.sidebarInformation}>
        <div>Artur Mavlidov | 18yo</div>
        <div className={styles.sidebarProf}>Frontend Developer</div>
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {
            Object.keys(mapPagesToPath).map(page => {
              return (
                <li
                  className={`${styles.nav_item} ${
                    pathname === mapPagesToPath[page] ? styles.active : null
                  }`}
                  key={page}
                >
                  <Link to={mapPagesToPath[page]}>{page}</Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
      <span className={styles.sidebarDate}>2022</span>
    </aside>
  );
});

export default Sidebar;
