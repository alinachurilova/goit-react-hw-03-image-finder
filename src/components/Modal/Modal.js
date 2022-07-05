import React from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ toogleModal, children }) => (
    <>

              <div className={s.Overlay} onClick={toogleModal}>
             <div className={s.Modal}>
                <img className={s.ModalImage} src={children} alt="" width={900} height={ 600} />
             </div>
             </div>
        </>
);

Modal.propTypes = {
    toogleModal: PropTypes.func,
    children: PropTypes.node,
};
  

export default Modal;