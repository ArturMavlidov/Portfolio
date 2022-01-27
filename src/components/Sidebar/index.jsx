import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

import { pagesPathnames } from "../../utils";

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
            pagesPathnames.map(page => {
              return (
                <li
                  className={`${styles.nav_item} ${
                    pathname === page ? styles.active : null
                  }`} key={page}
                >
                  <Link to={page}>{page === '/' ? 'Home' : page.slice(1)}</Link>
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
