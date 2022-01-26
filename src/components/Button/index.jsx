import React, {memo} from 'react';

import styles from './index.module.scss'

const Button = memo(({children, className}) => {
  return (
    <button className={`${className} ${styles.button}`}>
      {children}
    </button>
  );
});

export default Button;
