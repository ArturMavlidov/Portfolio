import React, {memo} from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./index.module.scss";
import sidebarAvatar from "../../assets/img/sidebarLogo.png";

const Sidebar = memo(() => {
  const { pathname } = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_avatar}>
        <img src={sidebarAvatar} alt="Sidebar avatar" />
      </div>
      <div className={styles.sidebar_name}>
        <div>Artur Mavlidov | 18yo</div>
        <div className={styles.sidebar_prof}>Frontend Developer</div>
      </div>
      <nav className={styles.sidebar_nav}>
        <ul>
          <li className={`${styles.nav_item} ${pathname === '/' ? styles.active : null}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.nav_item} ${pathname === '/about' ? styles.active : null}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${styles.nav_item} ${pathname === '/portfolio' ? styles.active : null}`}>
            <Link to="/portfolio">Projects</Link>
          </li>
          <li className={`${styles.nav_item} ${pathname === '/contact' ? styles.active : null}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <span className={styles.sidebar_date}>2022</span>
    </div>
  );
});

export default Sidebar;
