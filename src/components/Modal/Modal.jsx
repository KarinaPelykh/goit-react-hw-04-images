import React, { Component } from "react";
import styles from './Modal.module.css';

export class Modal extends Component {
  
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }



  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;
     const { largeImageURL, tags } = image;
    // console.log(largeImageURL);
    return (
      <div className={styles.overlay} onClick={this.handleOverlayClick}>
        <div className={styles.modal}>
          <img  src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
