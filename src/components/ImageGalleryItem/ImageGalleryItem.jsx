import React, { Component } from 'react';
import s from './ImageGalleryItem.modelu.css';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { isOpenModal } = this.state;
    const {  webformatURL, largeImageURL, tags } = this.props.image;

    return <>
        <li className={s.galleryItem}>
          <img className={s.image} src={webformatURL} alt={tags} onClick={this.toggleModal}/>
        </li>

       {isOpenModal && (<Modal image={{largeImageURL}} onClose={this.toggleModal} />)} 
       
      </>
  }
}
