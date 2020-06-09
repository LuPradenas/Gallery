import React from 'react';

import style from './style.module.scss';

function Boton({ onClick }) {
  return (
    <div>
    <button type="button" onClick={onClick} className={style.btn}>
     X
    </button>
    </div>
  );
}

export default Boton;