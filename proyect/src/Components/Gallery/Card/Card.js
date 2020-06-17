import React from 'react';
import style from './style.module.scss';
import Modal from '../Modal/Modal';
import Boton from '../Modal/Boton/botton';

class Card extends React.Component  {
  state = {
    show: false,
  };

  IsOpen = () => {
    this.setState({ show: true });
  };


  // esta funcion es llamado desde el componente Texto mediante prop, con el boton llama a la funcion y convierte al state en falso y deja de renderizar
  CerrarTexto = () => {
    this.setState({ show: false });
  };
  render()  {
    const { image } = this.props;
    return  (
      <>
        <div className={style.cardContainer}>
          {image.map((imagedata) => (
            <div key={imagedata.id} className={style.cardList}>
              <img
                className={style.img}
                src={imagedata.url} alt="pugs" 
                />
            <div className={style.studyOverlay}>
  	          <h2 className={style.studyTitle}>model pug</h2>
               {this.state.show && <Modal Cerrar={this.CerrarTexto} isHome />}
                  <Boton Abrir={this.IsOpen} />
                </div>
            </div>
          ))}
  </div> 

        </>
    );
  }
}

export default Card;