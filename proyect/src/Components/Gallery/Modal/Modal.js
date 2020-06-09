import React from 'react';

import style from './style.module.scss';
import Boton from './Cerrar';

class Modal extends React.Component {
  cerrar = () => this.props.Cerrar();

  render() {
    const { seleccion } = this.props;
    console.log(seleccion);
    return (
      <div className={style.modal}>
        <Boton onClick={this.cerrar} className={style.BotonClose} />
        <div isHome={this.props.isHome} className={style.containerModal}>
        </div>
      </div>
    );
  }
}

export default Modal;