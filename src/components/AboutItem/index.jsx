import React, {memo} from 'react';

import styles from './index.module.scss'

const AboutItem = memo(({icon, itemName}) => {
  return (
    <div className={styles.aboutContentEl}>
      <div className={styles.aboutContentItem}>
        <div className={styles.aboutContentIcon}>
          {icon}
        </div>
        <span>{itemName}</span>
      </div>
      <div className={styles.aboutContentBg}></div>
    </div>
  );
});

export default AboutItem;
