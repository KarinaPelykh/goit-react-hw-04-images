
import React, { useState } from 'react';
// import s from './ImageGalleryItem.modelu.css';
import { Modal } from 'components/Modal/Modal';
export const ImageGalleryItem =(props)=> {

  const [isOpenModal, setIsOpenModal] = useState(false);

 const toggleModal = () => {
   setIsOpenModal(prevState => (  !prevState ));
  };


  
const { webformatURL, largeImageURL, tags } = props.image;

return <>
        <li  >
          <img  src={webformatURL} alt={tags} onClick={toggleModal}/>
        </li>

       {isOpenModal && (<Modal image={{largeImageURL}} onClose={toggleModal} />)} 
       
      </>
  }