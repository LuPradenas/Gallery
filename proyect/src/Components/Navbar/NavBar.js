import React from 'react';
import styles from './style.module.scss';

function Navbar() {
  return (
      <nav>
      <div className={styles.container}>
             <p className={styles.chighlight}>Mundo Pug's</p>
          </div>
       </nav>  
  );
}

export default Navbar;