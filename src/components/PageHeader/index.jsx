import React, {memo} from 'react';
import { Link } from "react-router-dom";

import arrowIcon from '../../assets/img/arrow-right.svg';
import styles from './index.module.scss'

const PageHeader = memo(({link = '/', children}) => {
  return (
    <div className={styles.page_header}>
      <div className={styles.page_name}>{children}</div>
      <Link to={link}>
        <button className={`${styles.page_button}`}>
          Next
          <img src={arrowIcon} alt="arrow-icon" />
        </button>
      </Link>
    </div>
  );
});

export default PageHeader;
