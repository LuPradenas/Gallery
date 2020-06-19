import React, { Fragment, useState } from "react";
import styles from './style.module.scss';
import Modal from './Modal/modal';
import GalleryImage from './Imagen/imagen';

const Gallery =({imgURLs}) => {
  const [showModal, setShowModal] = useState(false);
  const [imgUrl, setImgUrl] = useState(undefined);

  const toggleModal = url => {
    setShowModal(!showModal);
    setImgUrl(url);
  };

  return (
    <Fragment>
     <section className={styles.Container}>
      <div className={styles.galleryContainer}>
        {imgURLs.map((url, i) => (
          <div className={styles.galleryImage} onClick={e => toggleModal(url)}>
            <GalleryImage key={i} src={url} alt={`Photo: ${i}`} />
          </div>
        ))}
      </div>
    </section>
      <Modal isOpen={showModal} onClick={toggleModal} src={imgUrl} />
    </Fragment>
  );
};

export default Gallery;
