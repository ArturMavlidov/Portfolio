import React, {memo} from 'react';

import styles from './index.module.scss'

const AboutItem = memo(({icon, itemName, dataRole}) => {
  return (
    <div className={styles.aboutContentEl} data-role={dataRole}>
      <div className={styles.aboutContentItem}>
        <div className={styles.aboutContentIcon}>{icon}</div>
        <span>{itemName}</span>
      </div>
      <div className={styles.aboutContentBg}></div>
    </div>
  );
});

export default AboutItem;
