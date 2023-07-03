import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
export const ImageGalleryItem = props => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(prevState => !prevState);
  };

  const { webformatURL, largeImageURL, tags } = props.image;

  return (
    <>
      <li>
        <img src={webformatURL} alt={tags} onClick={toggleModal} />
      </li>

      {isOpenModal && <Modal image={{ largeImageURL }} onClose={toggleModal} />}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string,
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};
