import React from 'react';
import style from './style.module.scss';
import Modal from '../Modal/Modal';

class Card extends React.Component  {
  state = {
    show: false,
  };

  IsOpen = () => {
    this.setState({ show: true });
  };

  CerrarTexto = () => {
    this.setState({ show: false });
  };
  render()  {
    const { image } = this.props;
    return  (
      <>
      {this.state.show && <Modal Cerrar={this.CerrarTexto} isHome />}
        <div className={style.cardContainer}>
          {image.map((imagedata) => (
            <div key={imagedata.id} className={style.cardList}>
              <img
                className={style.img}
                src={imagedata.url} alt="pugs" 
                />
            <div className={style.studyOverlay}>
  	    <h2 className={style.studyTitle}>Developing Hexxis</h2>
       <span className={style.studyLink} href="#"   Abrir={this.IsOpen} >View Case Study</span>
  </div>
            </div>
          ))}
  </div> 

        </>
    );
  }
}

export default Card;