import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from './Modal.module.css';

export const Modal=(props)=> {
  useEffect(()=>{
  const  handleKeyDown = (event) => {
    if (event.code === "Escape") {
    props.onClose();
    }
    };
      document.addEventListener("keydown", handleKeyDown);
    return () => {
    document.removeEventListener("keydown", handleKeyDown);
}
  })
 





 const  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
    props.onClose();
    }
  };


    const { image } = props;
     const { largeImageURL, tags } = image;
    return (
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.modal}>
          <img  src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
Modal.propTypes = {
      image:PropTypes.shape({
      largeImageURL:PropTypes.string,
      tags:PropTypes.string,
    }),
    onClose:PropTypes.func
  
}

  