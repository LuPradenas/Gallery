import React from 'react';
import styles from './style.module.scss';

function Header() {
  return (
      <section>
      <div>
         <p className={styles.subtitle}> It's never too late to fall in love</p>
         </div>
          <div className={styles.swiperContainer}>
            <div className={styles.swiperWrapper}>
              <div className={styles.swiperSlide}>
                 <div className={styles.containerGeneral}>
                   <div className= {styles.galleryWrap}>
                    <div className={styles.item}></div> 
                    <div className={styles.item}></div> 
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
                    <div className={styles.item}></div>
               </div>
             </div>
         </div>
       </div>
   </div>  
  </section>
 
  );
}

export default Header;