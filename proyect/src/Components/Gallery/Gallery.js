import React from 'react';
import ListData from './Card/Data';
import Card from './Card/Card';
import style from './Card/style.module.scss';

function Gallery() {
  return (
     <section className={style.ContainerGallery}>
        <Card image={ListData} />
       </section>
 
  );
}

export default Gallery;