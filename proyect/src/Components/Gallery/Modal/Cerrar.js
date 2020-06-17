import React from 'react';

import style from './style.module.scss';

function Boton({ onClick }) {
  return (
    <div>
    <span type="button" onClick={onClick} className={style.btn}>
     X
    </span>
    </div>
  );
}

export default Boton;