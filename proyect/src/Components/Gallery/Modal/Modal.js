import React from "react";
import Image from '../Imagen/imagen';
import styles from './styles.module.scss';

const Modal = ({ isOpen, onClick, src }) => {
  if (isOpen === false) return null;

  return (
    <div className={styles.modal}  onClick={onClick}>
        <Image src={src} />
      </div>
  );
};

export default Modal;