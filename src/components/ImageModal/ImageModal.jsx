import css from './ImageModal.module.css'
import Modal from 'react-modal';
import React from 'react';

export default function ImageModal({ isOpen , onRequestClose, image }) {
    if (!image) return null;
    return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className={css.modalContent}
    overlayClassName={css.modalOverlay}
    contentLabel="Image Modal"
    >
    <button onClick={onRequestClose} className={css.btn}>
    Close
    </button>
    <div className={css.div}>
    <img src={image} alt={image.tags} className={css.img} />
    </div>
    </Modal>
    );
}















