import React from 'react';

import style from '../../Card/style.module.scss';

class Boton extends React.Component {
  AbrirModal = () => this.props.Abrir();

  render() {
    const { ButtonTwo } = this.props;
    return (
      <button type="button" onClick={this.AbrirModal}  className={style.studyLink}>
     see more
      </button>
    );
  }
}

export default Boton;